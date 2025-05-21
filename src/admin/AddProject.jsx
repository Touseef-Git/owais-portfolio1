import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddProject = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setProject({ ...project, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setProject({ ...project, [name]: value });
    }
  };

  // ✅ Validation Function
  const validateForm = () => {
    const newErrors = {};
    if (!project.title || project.title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }
    if (!project.category) {
      newErrors.category = "Please select a category.";
    }
    if (!project.description || project.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }
    if (!project.image) {
      newErrors.image = "Image is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Cloudinary Upload
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "owais_portfolio");

    const res = await fetch("https://api.cloudinary.com/v1_1/dr0ezjxdj/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm() || loading) return;

    setLoading(true);
    try {
      const imageUrl = await uploadToCloudinary(project.image);

      await addDoc(collection(db, "projects"), {
        title: project.title,
        category: project.category,
        description: project.description,
        image: imageUrl,
        createdAt: new Date(),
      });

      alert("✅ Project saved successfully!");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error saving project:", error);
      alert("❌ Failed to save project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#f9f9f9] flex items-center justify-center px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-[#FCB415] mb-8">
          ➕ Add New Project
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FCB415]"
              placeholder="Enter project title"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <select
              name="category"
              value={project.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FCB415]"
            >
              <option value="">Select category</option>
              <option value="Web Design">Web Design</option>
              <option value="Branding">Branding</option>
              <option value="Graphics">Graphics</option>
              <option value="App UI">App UI</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FCB415]"
              placeholder="Write something about the project"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded bg-white focus:outline-none focus:border-[#FCB415]"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-40 h-28 object-cover rounded shadow-md"
              />
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"
              } bg-[#FCB415] text-white font-semibold py-2 px-8 rounded-full transition duration-300`}
            >
              {loading ? "Saving..." : "Save Project"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddProject;
