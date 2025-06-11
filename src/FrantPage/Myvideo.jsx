import React, { useState } from 'react';
import { FaCloudUploadAlt, FaTimes, FaCheck } from 'react-icons/fa';

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
    const newList = [...files];
    newList.splice(index, 1);
    setFiles(newList);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 to-purple-400 p-6">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center border-r border-gray-200">
          <div className="border-2 border-dashed border-indigo-400 rounded-lg w-full h-56 flex flex-col items-center justify-center text-center p-4">
            <FaCloudUploadAlt className="text-4xl text-indigo-600 mb-2" />
            <p className="text-gray-500 mb-2">Drag and Drop Files</p>
            <label className="inline-block bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer">
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

      </div>
    </div>
  );
};

export default Myvideo;
