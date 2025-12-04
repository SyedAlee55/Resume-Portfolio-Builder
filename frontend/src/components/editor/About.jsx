import React, { useState } from 'react';

const About = ({ data, onChange }) => {
    const maxLength = 1000;
    const [charCount, setCharCount] = useState(data?.length || 0);

    const handleChange = (value) => {
        setCharCount(value.length);
        onChange(value);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">About / Professional Summary</h2>
                <span className={`text-sm ${charCount > maxLength ? 'text-red-500' : 'text-gray-500'}`}>
                    {charCount} / {maxLength}
                </span>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Write a brief professional summary about yourself
                </label>
                <textarea
                    value={data || ''}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Experienced software engineer with 5+ years in full-stack development..."
                    rows={10}
                    maxLength={maxLength}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                    Tip: Highlight your key skills, experience, and what makes you unique as a professional.
                </p>
            </div>
        </div>
    );
};

export default About;
