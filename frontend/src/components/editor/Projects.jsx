import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { createProjectEntry } from '../../utils/resumeTemplate';

const Projects = ({ data, onChange }) => {
    const handleAdd = () => {
        onChange([...data, createProjectEntry()]);
    };

    const handleRemove = (id) => {
        onChange(data.filter((item) => item.id !== id));
    };

    const handleChange = (id, field, value) => {
        onChange(
            data.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleTechnologiesChange = (id, value) => {
        const technologies = value.split(',').map(tech => tech.trim()).filter(tech => tech);
        handleChange(id, 'technologies', technologies);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Projects</h2>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    <FaPlus /> Add Project
                </button>
            </div>

            {data.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">No projects yet</p>
                    <button
                        onClick={handleAdd}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Add your first project
                    </button>
                </div>
            ) : (
                <div className="space-y-6">
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Project #{index + 1}
                                </h3>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-600 hover:text-red-700 p-2"
                                    title="Remove"
                                >
                                    <FaTrash />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Project Name */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Project Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={item.name || ''}
                                        onChange={(e) => handleChange(item.id, 'name', e.target.value)}
                                        placeholder="E-commerce Platform"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Description */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Description *
                                    </label>
                                    <textarea
                                        value={item.description || ''}
                                        onChange={(e) => handleChange(item.id, 'description', e.target.value)}
                                        placeholder="Built a full-stack e-commerce platform with user authentication, payment processing, and admin dashboard..."
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white resize-none"
                                    />
                                </div>

                                {/* Technologies */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Technologies Used
                                    </label>
                                    <input
                                        type="text"
                                        value={item.technologies?.join(', ') || ''}
                                        onChange={(e) => handleTechnologiesChange(item.id, e.target.value)}
                                        placeholder="React, Node.js, MongoDB, AWS (comma-separated)"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Separate technologies with commas
                                    </p>
                                </div>

                                {/* Project URL */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Project URL (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        value={item.projectUrl || ''}
                                        onChange={(e) => handleChange(item.id, 'projectUrl', e.target.value)}
                                        placeholder="https://myproject.com"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* GitHub URL */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        GitHub URL (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        value={item.githubUrl || ''}
                                        onChange={(e) => handleChange(item.id, 'githubUrl', e.target.value)}
                                        placeholder="https://github.com/username/project"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
