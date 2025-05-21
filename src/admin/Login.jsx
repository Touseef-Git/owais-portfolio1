import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png"; // Add a suitable illustration image
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "admin123") {
            localStorage.setItem("admin", true);
            navigate("/admin/dashboard");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
            <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                {/* Left Side - Image */}
                <div className="bg-[#e9f6fb] flex items-center justify-center p-10">
                    <img src={login} alt="Login Illustration" className="w-80 h-auto" />
                </div>

                {/* Right Side - Form */}
                <div className="p-10">
                    <h2 className="text-2xl font-bold text-[#FCB415] mb-2">🌐 M-Owais</h2>
                    <p className="text-gray-600 mb-6">Sign in to continue ...</p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FCB415]"
                            />
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FCB415]"
                            />
                            <div
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                            </div>
                        </div>


                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-[#FCB415] hover:underline">Forgot your password?</a>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full bg-[#FCB415] text-white py-2 rounded hover:bg-[#e6a800] transition duration-300"
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
