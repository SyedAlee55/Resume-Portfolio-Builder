const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Resume = require('../models/Resume');

// @route   GET api/resumes
// @desc    Get all users resumes
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const resumes = await Resume.find({ user: req.user.id }).sort({
            createdAt: -1,
        });
        res.json(resumes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/resumes
// @desc    Add new resume
// @access  Private
router.post('/', auth, async (req, res) => {
    const { title, content } = req.body;

    try {
        const newResume = new Resume({
            title,
            content,
            user: req.user.id,
        });

        const resume = await newResume.save();
        res.json(resume);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/resumes/:id
// @desc    Update resume
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { title, content } = req.body;

    // Build resume object
    const resumeFields = {};
    if (title) resumeFields.title = title;
    if (content) resumeFields.content = content;

    try {
        let resume = await Resume.findById(req.params.id);

        if (!resume) return res.status(404).json({ msg: 'Resume not found' });

        // Make sure user owns resume
        if (resume.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        resume = await Resume.findByIdAndUpdate(
            req.params.id,
            { $set: resumeFields },
            { new: true }
        );

        res.json(resume);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/resumes/:id
// @desc    Delete resume
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let resume = await Resume.findById(req.params.id);

        if (!resume) return res.status(404).json({ msg: 'Resume not found' });

        // Make sure user owns resume
        if (resume.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Resume.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Resume removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/resumes/:id
// @desc    Get specific resume
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        let resume = await Resume.findById(req.params.id);

        if (!resume) return res.status(404).json({ msg: 'Resume not found' });

        // Make sure user owns resume
        if (resume.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        res.json(resume);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
