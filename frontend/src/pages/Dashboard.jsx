import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getResumes, createResume, deleteResume } from '../api/resumeApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPlus, FaEdit, FaTrash, FaFileAlt } from 'react-icons/fa';

const Dashboard = () => {
    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResumes = async () => {
            try {
                setLoading(true);
                const data = await getResumes();
                setResumes(data);
            } catch (err) {
                console.error('Error fetching resumes:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchResumes();
    }, []);

    const handleCreateResume = async () => {
        try {
            const newResume = await createResume({
                title: 'New Resume',
                content: {},
            });
            setResumes([newResume, ...resumes]);
            // Automatically navigate to editor for new resume
            navigate(`/editor/${newResume._id}`);
        } catch (err) {
            console.error('Error creating resume:', err);
            alert('Failed to create resume. Please try again.');
        }
    };

    const handleDeleteResume = async (id) => {
        if (!window.confirm('Are you sure you want to delete this resume?')) {
            return;
        }
        try {
            await deleteResume(id);
            setResumes(resumes.filter((resume) => resume._id !== id));
        } catch (err) {
            console.error('Error deleting resume:', err);
            alert('Failed to delete resume. Please try again.');
        }
    };

    const handleEditResume = (id) => {
        navigate(`/editor/${id}`);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />

            {/* Main Content */}
            <main className="pt-24 pb-16 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            My Resumes
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Create, edit, and manage your professional resumes
                        </p>
                    </div>

                    {/* Create New Resume Button */}
                    <div className="mb-8">
                        <button
                            onClick={handleCreateResume}
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            <FaPlus />
                            Create New Resume
                        </button>
                    </div>

                    {/* Resumes Grid */}
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mx-auto mb-4"></div>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">Loading your resumes...</p>
                        </div>
                    ) : resumes.length === 0 ? (
                        <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700">
                            <FaFileAlt className="text-6xl text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                No resumes yet
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Get started by creating your first professional resume
                            </p>
                            <button
                                onClick={handleCreateResume}
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                <FaPlus />
                                Create Your First Resume
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {resumes.map((resume) => (
                                <div
                                    key={resume._id}
                                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden group"
                                >
                                    {/* Resume Info */}
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">
                                            {resume.title}
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            Last updated: {new Date(resume.updatedAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>


                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleEditResume(resume._id)}
                                                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                                            >
                                                <FaEdit />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteResume(resume._id)}
                                                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;



