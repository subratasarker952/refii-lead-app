import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        setServerError("");

        const { data: session, error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });

        if (error) {
            setServerError(error.message);
        } else {
            setUser(session.user);
            navigate("/"); // Redirect to home or dashboard
        }

        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center mt-11 p-6 bg-white min-h-[70vh]">
            <div className="w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Login to Your Account</h2>

                {serverError && (
                    <p className="text-red-500 text-sm mb-4 text-center">{serverError}</p>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email",
                                },
                            })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...register("password", { required: "Password is required" })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
                </p>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Forgot Password? <Link to="/forgot-password" className="text-indigo-600 hover:underline">Reset Now</Link>
                </p>
            </div>
        </div>
    );
}
