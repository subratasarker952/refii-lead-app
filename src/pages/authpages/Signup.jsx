import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient"; // adjust path if needed
import { Link } from "react-router-dom";

const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    phone: yup.string().required("Phone Number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

export default function Signup() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [message, setMessage] = useState("");

    const onSubmit = async (data) => {
        setMessage("");
        const { email, password } = data;

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: data.fullName,
                    phone: data.phone,
                },
            },
        });

        if (error) {
            setMessage(error.message);
        } else {
            setMessage("Signup successful! Check your email for confirmation.");
            reset();
        }
    };

    return (
        <div className="flex justify-center items-center mt-11 p-6 bg-white min-h-[70vh]">
            <div className="w-md mx-auto p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Create an Account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block font-medium">Full Name</label>
                        <input
                            type="text"
                            {...register("fullName")}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Phone</label>
                        <input
                            type="text"
                            {...register("phone")}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm">{errors.phone.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Password</label>
                        <input
                            type="password"
                            {...register("password")}
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                        {isSubmitting ? "Creating..." : "Sign Up"}
                    </button>

                    {message && (
                        <p className="text-center text-sm mt-2 text-blue-600">{message}</p>
                    )}
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}
