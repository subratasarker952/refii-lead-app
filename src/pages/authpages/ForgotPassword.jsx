import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabaseClient";

export default function ForgotPassword() {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ email }) => {
        setSuccess("");
        setError("");

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess("Password reset email sent. Check your inbox.");
        }
    };

    return (
        <div className="flex justify-center items-center p-6 bg-white min-h-[70vh]">
            <div className="w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
                    Forgot Password
                </h2>

                {success && <p className="text-green-600 text-sm text-center mb-4">{success}</p>}
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
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

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Remember your password?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}
