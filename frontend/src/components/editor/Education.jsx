import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { createEducationEntry } from '../../utils/resumeTemplate';

const Education = ({ data, onChange }) => {
    const handleAdd = () => {
        onChange([...data, createEducationEntry()]);
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

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    <FaPlus /> Add Education
                </button>
            </div>

            {data.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">No education entries yet</p>
                    <button
                        onClick={handleAdd}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Add your first education entry
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
                                    Education #{index + 1}
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
                                {/* School/University */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        School/University *
                                    </label>
                                    <input
                                        type="text"
                                        value={item.school || ''}
                                        onChange={(e) => handleChange(item.id, 'school', e.target.value)}
                                        placeholder="Harvard University"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Degree */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Degree *
                                    </label>
                                    <input
                                        type="text"
                                        value={item.degree || ''}
                                        onChange={(e) => handleChange(item.id, 'degree', e.target.value)}
                                        placeholder="Bachelor of Science"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Field of Study */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Field of Study *
                                    </label>
                                    <input
                                        type="text"
                                        value={item.field || ''}
                                        onChange={(e) => handleChange(item.id, 'field', e.target.value)}
                                        placeholder="Computer Science"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Start Date */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Start Date
                                    </label>
                                    <input
                                        type="month"
                                        value={item.startDate || ''}
                                        onChange={(e) => handleChange(item.id, 'startDate', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* End Date */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        End Date
                                    </label>
                                    <input
                                        type="month"
                                        value={item.endDate || ''}
                                        onChange={(e) => handleChange(item.id, 'endDate', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* GPA */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        GPA (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={item.gpa || ''}
                                        onChange={(e) => handleChange(item.id, 'gpa', e.target.value)}
                                        placeholder="3.8/4.0"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Description */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Description (Optional)
                                    </label>
                                    <textarea
                                        value={item.description || ''}
                                        onChange={(e) => handleChange(item.id, 'description', e.target.value)}
                                        placeholder="Relevant coursework, achievements, honors..."
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white resize-none"
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

export default Education;
