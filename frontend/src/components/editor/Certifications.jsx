import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { createCertificationEntry } from '../../utils/resumeTemplate';

const Certifications = ({ data, onChange }) => {
    const handleAdd = () => {
        onChange([...data, createCertificationEntry()]);
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
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications</h2>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    <FaPlus /> Add Certification
                </button>
            </div>

            {data.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">No certifications yet</p>
                    <button
                        onClick={handleAdd}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Add your first certification
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
                                    Certification #{index + 1}
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
                                {/* Certification Name */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Certification Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={item.name || ''}
                                        onChange={(e) => handleChange(item.id, 'name', e.target.value)}
                                        placeholder="AWS Certified Solutions Architect"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Issuing Organization */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Issuing Organization *
                                    </label>
                                    <input
                                        type="text"
                                        value={item.organization || ''}
                                        onChange={(e) => handleChange(item.id, 'organization', e.target.value)}
                                        placeholder="Amazon Web Services"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Issue Date */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Issue Date
                                    </label>
                                    <input
                                        type="month"
                                        value={item.issueDate || ''}
                                        onChange={(e) => handleChange(item.id, 'issueDate', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Expiry Date */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Expiry Date (Optional)
                                    </label>
                                    <input
                                        type="month"
                                        value={item.expiryDate || ''}
                                        onChange={(e) => handleChange(item.id, 'expiryDate', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Credential ID */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Credential ID (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={item.credentialId || ''}
                                        onChange={(e) => handleChange(item.id, 'credentialId', e.target.value)}
                                        placeholder="ABC123XYZ"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                {/* Credential URL */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Credential URL (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        value={item.credentialUrl || ''}
                                        onChange={(e) => handleChange(item.id, 'credentialUrl', e.target.value)}
                                        placeholder="https://..."
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

export default Certifications;
