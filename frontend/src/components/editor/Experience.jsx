import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { createExperienceEntry } from '../../utils/resumeTemplate';

const Experience = ({ data, onChange }) => {
    const handleAdd = () => {
        onChange([...data, createExperienceEntry()]);
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
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Work Experience</h2>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    <FaPlus /> Add Experience
                </button>
            </div>

            {data.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">No experience entries yet</p>
                    <button
                        onClick={handleAdd}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Add your first work experience
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
                                    Experience #{index + 1}
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
                                {/* Company */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Company *
                                    </label>
                                    <input
                                        type="text"
                                        value={item.company || ''}
                                        onChange={(e) => handleChange(item.id, 'company', e.target.value)}
                                        placeholder="Google Inc."
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Position */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Position *
                                    </label>
                                    <input
                                        type="text"
                                        value={item.position || ''}
                                        onChange={(e) => handleChange(item.id, 'position', e.target.value)}
                                        placeholder="Senior Software Engineer"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Location */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        value={item.location || ''}
                                        onChange={(e) => handleChange(item.id, 'location', e.target.value)}
                                        placeholder="San Francisco, CA"
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
                                        disabled={item.current}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white disabled:bg-gray-200 dark:disabled:bg-gray-800"
                                    />
                                </div>

                                {/* Current Position Checkbox */}
                                <div className="md:col-span-2 flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`current-${item.id}`}
                                        checked={item.current || false}
                                        onChange={(e) => {
                                            handleChange(item.id, 'current', e.target.checked);
                                            if (e.target.checked) {
                                                handleChange(item.id, 'endDate', '');
                                            }
                                        }}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label
                                        htmlFor={`current-${item.id}`}
                                        className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        I currently work here
                                    </label>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Responsibilities & Achievements
                                    </label>
                                    <textarea
                                        value={item.description || ''}
                                        onChange={(e) => handleChange(item.id, 'description', e.target.value)}
                                        placeholder="• Led a team of 5 engineers&#10;• Developed microservices architecture&#10;• Improved system performance by 40%"
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white resize-none"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Tip: Use bullet points (•) to list your key responsibilities and achievements
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Experience;
