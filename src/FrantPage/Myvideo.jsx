import React, { useState } from 'react';
import { FaCloudUploadAlt, FaCheck, FaTimes } from 'react-icons/fa';

const Myvideo = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map((file) => ({
      name: file.name,
      uploaded: true,
      timestamp: new Date().toLocaleString(),
    }));
    setFiles([...files, ...newFiles]);
  };

  const handleRemove = (index) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Upload Box */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center bg-white">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">File Upload</h2>
          <div className="border-2 border-dashed border-indigo-400 rounded-lg w-full h-48 flex flex-col items-center justify-center text-center p-4">
            <FaCloudUploadAlt className="text-4xl text-indigo-600 mb-2" />
            <p className="text-gray-500 mb-2">Drag and Drop Files</p>
            <label className="inline-block bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer text-sm">
              Browse
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Right Side: File List */}
        <div className="w-full md:w-1/2 p-6 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Uploading</h2>
          <div className="space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white px-4 py-2 rounded shadow border"
              >
                <div>
                  <p className="text-sm font-medium text-indigo-600">{file.name}</p>
                  <span className="text-xs text-gray-400">{file.timestamp}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheck className="text-green-500 text-lg" />
                  <FaTimes
                    onClick={() => handleRemove(index)}
                    className="text-red-500 text-lg cursor-pointer"
                  />
                </div>
              </div>
            ))}
            {files.length === 0 && (
              <p className="text-sm text-gray-400">No files uploaded yet</p>
            )}
          </div>
          <div className="mt-6 flex gap-3 justify-end">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded shadow text-sm">Upload</button>
            <button className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded shadow text-sm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myvideo;
