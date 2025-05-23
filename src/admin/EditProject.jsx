import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { toast } from "react-toastify";


const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });
  const [newImage, setNewImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch old project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject(docSnap.data());
        } else {
            toast.warn("❌ Project not found!");
          navigate("/admin/dashboard");
        }
      } catch (err) {
        console.error(err);
        toast.error("❌ Error fetching project.");
      }
    };

    fetchProject();
  }, [id, navigate]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  // ✅ Handle new image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ Upload to Cloudinary if new image selected
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

  // ✅ Submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      let updatedImage = project.image;

      if (newImage) {
        updatedImage = await uploadToCloudinary(newImage);
      }

      await updateDoc(doc(db, "projects", id), {
        title: project.title,
        category: project.category,
        description: project.description,
        image: updatedImage,
      });

      toast.success("✅ Project updated successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to update project.");
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
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-[#FCB415] mb-8">
          ✏️ Edit Project
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FCB415]"
              placeholder="Enter project title"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <select
              name="category"
              value={project.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FCB415]"
            >
              <option value="">Select category</option>
              <option value="Web Design">Web Design</option>
              <option value="Branding">Branding</option>
              <option value="Graphics">Graphics</option>
              <option value="App UI">App UI</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-[#FCB415]"
              placeholder="Write something about the project"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Update Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded bg-white focus:outline-none focus:border-[#FCB415]"
            />
            {(preview || project.image) && (
              <img
                src={preview || project.image}
                alt="Preview"
                className="mt-4 w-40 h-28 object-cover rounded shadow-md"
              />
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"
              } border border-gray-400 text-[#FCB415] px-8 py-2 rounded-full shadow-md hover:bg-[#FCB415] hover:text-white`}
            >
              {loading ? "Updating..." : "Update Project"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default EditProject;
