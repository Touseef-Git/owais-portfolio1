import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(data);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Delete project
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "projects", id));
      alert("✅ Project deleted!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("❌ Error deleting project.");
    }
  };

  // ✅ Navigate to edit page
  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-6 py-10">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold text-[#FCB415]">📋 Admin Dashboard</h2>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-[#FCB415] text-white px-5 py-2 rounded-full hover:bg-yellow-500 transition"
          >
            🔙 Home
          </button>
          <button
            onClick={() => navigate("/admin/add")}
            className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
          >
            ➕ Add Project
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {projects.length === 0 ? (
          <p className="text-gray-600">No projects added yet.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <span className="text-sm font-bold text-[#FCB415] uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">{project.description}</p>

                {/* Buttons */}
                <div className="flex justify-end mt-4 space-x-2">
                  <button
                    onClick={() => handleEdit(project.id)}
                    className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
