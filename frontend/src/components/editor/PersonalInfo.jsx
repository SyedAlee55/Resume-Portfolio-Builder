import React from 'react';
import { isValidEmail, isValidUrl } from '../../utils/resumeTemplate';

const PersonalInfo = ({ data, onChange }) => {
    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        value={data.name || ''}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        value={data.email || ''}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john.doe@example.com"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${data.email && !isValidEmail(data.email)
                                ? 'border-red-500'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                    />
                    {data.email && !isValidEmail(data.email) && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                    </label>
                    <input
                        type="tel"
                        value={data.phone || ''}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* LinkedIn */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        LinkedIn URL
                    </label>
                    <input
                        type="url"
                        value={data.linkedin || ''}
                        onChange={(e) => handleChange('linkedin', e.target.value)}
                        placeholder="https://linkedin.com/in/johndoe"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${data.linkedin && !isValidUrl(data.linkedin)
                                ? 'border-red-500'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                    />
                    {data.linkedin && !isValidUrl(data.linkedin) && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid URL</p>
                    )}
                </div>

                {/* GitHub */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        GitHub URL
                    </label>
                    <input
                        type="url"
                        value={data.github || ''}
                        onChange={(e) => handleChange('github', e.target.value)}
                        placeholder="https://github.com/johndoe"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${data.github && !isValidUrl(data.github)
                                ? 'border-red-500'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                    />
                    {data.github && !isValidUrl(data.github) && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid URL</p>
                    )}
                </div>

                {/* Website */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Website/Portfolio
                    </label>
                    <input
                        type="url"
                        value={data.website || ''}
                        onChange={(e) => handleChange('website', e.target.value)}
                        placeholder="https://johndoe.com"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${data.website && !isValidUrl(data.website)
                                ? 'border-red-500'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                    />
                    {data.website && !isValidUrl(data.website) && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid URL</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
