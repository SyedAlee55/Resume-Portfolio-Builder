import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { createSkillEntry } from '../../utils/resumeTemplate';

const Skills = ({ data, onChange }) => {
    const [newSkillName, setNewSkillName] = useState('');

    const handleAdd = () => {
        if (newSkillName.trim()) {
            const newSkill = createSkillEntry();
            newSkill.name = newSkillName.trim();
            onChange([...data, newSkill]);
            setNewSkillName('');
        }
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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    };

    const categories = ['Technical', 'Soft Skills', 'Languages', 'Tools', 'Frameworks', 'Other'];
    const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Skills</h2>

            {/* Add Skill Input */}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={newSkillName}
                    onChange={(e) => setNewSkillName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a skill (e.g., JavaScript, Leadership)"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <button
                    onClick={handleAdd}
                    disabled={!newSkillName.trim()}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    <FaPlus /> Add
                </button>
            </div>

            {data.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400">No skills added yet</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {data.map((skill) => (
                        <div
                            key={skill.id}
                            className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                {/* Skill Name */}
                                <div className="md:col-span-5">
                                    <input
                                        type="text"
                                        value={skill.name || ''}
                                        onChange={(e) => handleChange(skill.id, 'name', e.target.value)}
                                        placeholder="Skill name"
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Category */}
                                <div className="md:col-span-3">
                                    <select
                                        value={skill.category || 'Technical'}
                                        onChange={(e) => handleChange(skill.id, 'category', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Level */}
                                <div className="md:col-span-3">
                                    <select
                                        value={skill.level || 'Intermediate'}
                                        onChange={(e) => handleChange(skill.id, 'level', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    >
                                        {levels.map((level) => (
                                            <option key={level} value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Remove Button */}
                                <div className="md:col-span-1 flex justify-center">
                                    <button
                                        onClick={() => handleRemove(skill.id)}
                                        className="text-red-600 hover:text-red-700 p-2"
                                        title="Remove skill"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {data.length > 0 && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Tip:</strong> Organize your skills by category to make them easier to scan.
                        Technical skills are typically most important for technical roles.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Skills;
