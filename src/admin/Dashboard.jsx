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
import { toast } from "react-toastify";

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

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "projects", id));
      toast.success("✅ Project deleted!");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("❌ Error deleting project.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-4 py-8 md:px-6 md:py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#FCB415]">
          📋 Admin Dashboard
        </h2>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              localStorage.removeItem("admin");
              navigate("/admin/login");
            }}
            className="border border-gray-400 text-[#FCB415] px-5 py-2 rounded-full shadow-md hover:bg-[#FCB415] hover:text-white"
          >
             Logout
          </button>

          <button
            onClick={() => navigate("/")}
            className="border border-gray-400 text-[#FCB415] px-5 py-2 rounded-full shadow-md hover:bg-[#FCB415] hover:text-white"
          >
             Home
          </button>

          <button
            onClick={() => navigate("/admin/add")}
            className="border border-gray-400 text-[#FCB415] px-5 py-2 rounded-full shadow-md hover:bg-[#FCB415] hover:text-white"
          >
             Add Project
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-[200px]">
                <div>
                  <span className="text-sm font-bold text-[#FCB415] uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">{project.description}</p>
                </div>

                <div className="flex justify-end mt-4 space-x-2">
                  <button
                    onClick={() => handleEdit(project.id)}
                    className="border border-gray-400 text-[#FCB415] px-4 py-1 rounded-full shadow-md hover:bg-[#FCB415] hover:text-white"
                  >
                     Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="border border-gray-400 text-[#FCB415] px-4 py-1 rounded-full shadow-md hover:bg-[#FCB415] hover:text-white"
                  >
                     Delete
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
