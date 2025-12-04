import React from 'react';
import { FaUser, FaInfoCircle, FaGraduationCap, FaBriefcase, FaTools, FaCertificate, FaProjectDiagram, FaEye, FaSave, FaArrowLeft } from 'react-icons/fa';

const Sidebar = ({ sections, activeSection, onSectionChange, onSave, onPreview, onBack, saving }) => {
    const sectionIcons = {
        personal: <FaUser />,
        about: <FaInfoCircle />,
        education: <FaGraduationCap />,
        experience: <FaBriefcase />,
        skills: <FaTools />,
        certifications: <FaCertificate />,
        projects: <FaProjectDiagram />,
    };

    const sectionLabels = {
        personal: 'Personal Info',
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        certifications: 'Certifications',
        projects: 'Projects',
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Resume Editor</h2>

            {/* Section Navigation */}
            <nav className="space-y-2 mb-8">
                {sections.map((section) => (
                    <button
                        key={section}
                        onClick={() => onSectionChange(section)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeSection === section
                                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                    >
                        <span className="text-lg">{sectionIcons[section]}</span>
                        <span className="font-medium">{sectionLabels[section]}</span>
                    </button>
                ))}
            </nav>

            {/* Action Buttons */}
            <div className="space-y-3">
                <button
                    onClick={onSave}
                    disabled={saving}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                    <FaSave />
                    {saving ? 'Saving...' : 'Save Resume'}
                </button>

                <button
                    onClick={onPreview}
                    className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                    <FaEye />
                    Preview
                </button>

                <button
                    onClick={onBack}
                    className="w-full flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                    <FaArrowLeft />
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
