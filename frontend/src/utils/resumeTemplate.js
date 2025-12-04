import { v4 as uuidv4 } from 'uuid';

// Default empty resume structure
export const defaultResumeContent = {
    personal: {
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        website: '',
    },
    about: '',
    education: [],
    experience: [],
    skills: [],
    certifications: [],
    projects: [],
};

// Create a new education entry
export const createEducationEntry = () => ({
    id: uuidv4(),
    school: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
    description: '',
});

// Create a new experience entry
export const createExperienceEntry = () => ({
    id: uuidv4(),
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
});

// Create a new skill entry
export const createSkillEntry = () => ({
    id: uuidv4(),
    name: '',
    category: 'Technical',
    level: 'Intermediate',
});

// Create a new certification entry
export const createCertificationEntry = () => ({
    id: uuidv4(),
    name: '',
    organization: '',
    issueDate: '',
    expiryDate: '',
    credentialId: '',
    credentialUrl: '',
});

// Create a new project entry
export const createProjectEntry = () => ({
    id: uuidv4(),
    name: '',
    description: '',
    technologies: [],
    projectUrl: '',
    githubUrl: '',
});

// Validate email format
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validate URL format
export const isValidUrl = (url) => {
    if (!url) return true; // Empty URLs are valid (optional field)
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

// Initialize resume content with defaults if missing
export const initializeResumeContent = (content) => {
    return {
        personal: content?.personal || defaultResumeContent.personal,
        about: content?.about || defaultResumeContent.about,
        education: content?.education || defaultResumeContent.education,
        experience: content?.experience || defaultResumeContent.experience,
        skills: content?.skills || defaultResumeContent.skills,
        certifications: content?.certifications || defaultResumeContent.certifications,
        projects: content?.projects || defaultResumeContent.projects,
    };
};
