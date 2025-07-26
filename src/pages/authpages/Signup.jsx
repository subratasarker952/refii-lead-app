// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useState } from "react";
// import { supabase } from "../../lib/supabaseClient"; // adjust path if needed
// import { Link, useNavigate } from "react-router-dom";

// const schema = yup.object().shape({
//     fullName: yup.string().required("Full name is required"),
//     phone: yup.string().required("Phone Number is required"),
//     email: yup.string().email("Invalid email").required("Email is required"),
//     password: yup
//         .string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
// });

// export default function Signup() {
//     const navigate = useNavigate()
//     const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm({ resolver: yupResolver(schema), });

//     const [message, setMessage] = useState("");

//     const onSubmit = async (data) => {
//         setMessage("");
//         const { email, password } = data;

//         const { error } = await supabase.auth.signUp({
//             email,
//             password,
//             options: {
//                 data: {
//                     full_name: data.fullName,
//                     phone: data.phone,
//                 },
//             },
//         });

//         if (error) {
//             setMessage(error.message);
//         } else {
//             setMessage("Signup successful! Check your email for confirmation.");
//             reset();
//             navigate("/")
//         }
//     };

//     return (
//         <div className="flex justify-center items-center mt-11 p-6 bg-white min-h-[70vh]">
//             <div className="w-md mx-auto p-6 bg-white rounded-xl shadow-md">
//                 <h2 className="text-2xl font-semibold mb-4 text-center">Create an Account</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                     <div>
//                         <label className="block font-medium">Full Name</label>
//                         <input
//                             type="text"
//                             {...register("fullName")}
//                             className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
//                         />
//                         {errors.fullName && (
//                             <p className="text-red-500 text-sm">{errors.fullName.message}</p>
//                         )}
//                     </div>

//                     <div>
//                         <label className="block font-medium">Email</label>
//                         <input
//                             type="email"
//                             {...register("email")}
//                             className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
//                         />
//                         {errors.email && (
//                             <p className="text-red-500 text-sm">{errors.email.message}</p>
//                         )}
//                     </div>

//                     <div>
//                         <label className="block font-medium">Phone</label>
//                         <input
//                             type="text"
//                             {...register("phone")}
//                             className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
//                         />
//                         {errors.phone && (
//                             <p className="text-red-500 text-sm">{errors.phone.message}</p>
//                         )}
//                     </div>

//                     <div>
//                         <label className="block font-medium">Password</label>
//                         <input
//                             type="password"
//                             {...register("password")}
//                             className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
//                         />
//                         {errors.password && (
//                             <p className="text-red-500 text-sm">{errors.password.message}</p>
//                         )}
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//                     >
//                         {isSubmitting ? "Creating..." : "Sign Up"}
//                     </button>

//                     {message && (
//                         <p className="text-center text-sm mt-2 text-blue-600">{message}</p>
//                     )}
//                 </form>

//                 <p className="mt-4 text-center text-sm text-gray-600">
//                     Have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
//                 </p>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, CheckCircle, AlertCircle } from "lucide-react"
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import Alert from '../../components/ui/Alert'
import AlertDescription from '../../components/ui/AlertDescription'
import Label from '../../components/ui/Label'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { supabase } from "../../lib/supabaseClient";

export default function SignUpForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [message, setMessage] = useState("");

    const validateField = (name, value) => {
        switch (name) {
            case "email":
                if (!value) return "Email is required"
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address"
                return ""
            case "password":
                if (!value) return "Password is required"
                if (value.length < 8) return "Password must be at least 8 characters"
                if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value))
                    return "Password must contain uppercase, lowercase, and number"
                return ""
            case "confirmPassword":
                if (!value) return "Confirm Password is required"
                if (value !== formData.password) return "Password missmatch"
                if (value.length < 8) return "Password must be at least 8 characters"
                if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value))
                    return "Password must contain uppercase, lowercase, and number"
                return ""
            default:
                return ""
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Real-time validation
        const error = validateField(name, value)
        setErrors((prev) => ({ ...prev, [name]: error }))
    }

    const handleBlur = (e) => {
        const { name } = e.target
        setTouched((prev) => ({ ...prev, [name]: true }))
    }

    const isFormValid = () => {
        return (
            Object.values(errors).every((error) => !error) && Object.values(formData).every((value) => value.trim() !== "")
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Mark all fields as touched
        setTouched({ email: true, password: true })

        // Validate all fields
        let newErrors = {}
        Object.entries(formData).forEach(([key, value]) => {
            const error = validateField(key, value)
            if (error) newErrors[key] = error
        })

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) return

        setIsLoading(true)

        try {
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                setErrors({ submit: error.message })
            } else {
                setMessage("Signup successful!");
                navigate("/loan-application")
            }

        } catch (error) {
            console.error("Signup error:", error)
            setErrors({ submit: "Something went wrong. Please try again." })
        } finally {
            setIsLoading(false)
        }
    }

    const getFieldStatus = (fieldName) => {
        if (!touched[fieldName]) return "default"
        if (errors[fieldName]) return "error"
        if (formData[fieldName]) return "success"
        return "default"
    }

    return (
        <div className="flex justify-center items-center mt-11 p-6 bg-white min-h-[70vh]">
            <div>
                <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
                    <CardHeader className="text-center pb-6">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                            <Lock className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Create Your Account
                        </CardTitle>
                        <p className="text-gray-600 mt-2">Join thousands finding better home loan deals</p>
                    </CardHeader>

                    <CardContent className="space-y-6 p-8">
                        {errors.submit && (
                            <Alert className="border-red-200 bg-red-50 flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <AlertDescription className="text-red-800">{errors.submit}</AlertDescription>
                            </Alert>
                        )}
                        {message && (
                            <Alert className="border-red-200 bg-red-50 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <AlertDescription className="text-green-600">{message}</AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <Mail
                                        className={`absolute left-3 top-3 h-5 w-5 transition-colors ${getFieldStatus("email") === "error"
                                            ? "text-red-400"
                                            : getFieldStatus("email") === "success"
                                                ? "text-green-400"
                                                : "text-gray-400"
                                            }`}
                                    />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter your email address"
                                        className={`pl-10 pr-10 h-12 transition-all duration-200 ${getFieldStatus("email") === "error"
                                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                            : getFieldStatus("email") === "success"
                                                ? "border-green-300 focus:border-green-500 focus:ring-green-200"
                                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                                            }`}
                                        disabled={isLoading}
                                    />
                                    {getFieldStatus("email") === "success" && (
                                        <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                                    )}
                                </div>
                                {touched.email && errors.email && (
                                    <p className="text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle className="h-4 w-4" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock
                                        className={`absolute left-3 top-3 h-5 w-5 transition-colors ${getFieldStatus("password") === "error"
                                            ? "text-red-400"
                                            : getFieldStatus("password") === "success"
                                                ? "text-green-400"
                                                : "text-gray-400"
                                            }`}
                                    />
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="Create a secure password"
                                        className={`pl-10 pr-10 h-12 transition-all duration-200 ${getFieldStatus("password") === "error"
                                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                            : getFieldStatus("password") === "success"
                                                ? "border-green-300 focus:border-green-500 focus:ring-green-200"
                                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                                            }`}
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                                        disabled={isLoading}
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                                {touched.password && errors.password && (
                                    <p className="text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle className="h-4 w-4" />
                                        {errors.password}
                                    </p>
                                )}
                                {!errors.password && formData.password && (
                                    <div className="space-y-1">
                                        <div className="flex gap-1">
                                            <div
                                                className={`h-1 w-full rounded ${formData.password.length >= 8 ? "bg-green-400" : "bg-gray-200"}`}
                                            />
                                            <div
                                                className={`h-1 w-full rounded ${/(?=.*[a-z])(?=.*[A-Z])/.test(formData.password) ? "bg-green-400" : "bg-gray-200"}`}
                                            />
                                            <div
                                                className={`h-1 w-full rounded ${/(?=.*\d)/.test(formData.password) ? "bg-green-400" : "bg-gray-200"}`}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Password strength:{" "}
                                            {formData.password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)
                                                ? "Strong"
                                                : formData.password.length >= 6
                                                    ? "Medium"
                                                    : "Weak"}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                  Confirm Password
                                </Label>
                                <div className="relative">
                                    <Lock
                                        className={`absolute left-3 top-3 h-5 w-5 transition-colors ${getFieldStatus("confirmPassword") === "error"
                                            ? "text-red-400"
                                            : getFieldStatus("confirmPassword") === "success"
                                                ? "text-green-400"
                                                : "text-gray-400"
                                            }`}
                                    />
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="Confirm password"
                                        className={`pl-10 pr-10 h-12 transition-all duration-200 ${getFieldStatus("confirmPassword") === "error"
                                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                            : getFieldStatus("confirmPassword") === "success"
                                                ? "border-green-300 focus:border-green-500 focus:ring-green-200"
                                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
                                            }`}
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                                        disabled={isLoading}
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                                {touched.confirmPassword && errors.confirmPassword && (
                                    <p className="text-sm text-red-600 flex items-center gap-1">
                                        <AlertCircle className="h-4 w-4" />
                                        {errors.confirmPassword}
                                    </p>
                                )}
                                {!errors.confirmPassword && formData.confirmPassword && (
                                    <div className="space-y-1">
                                        <div className="flex gap-1">
                                            <div
                                                className={`h-1 w-full rounded ${formData.confirmPassword.length >= 8 ? "bg-green-400" : "bg-gray-200"}`}
                                            />
                                            <div
                                                className={`h-1 w-full rounded ${/(?=.*[a-z])(?=.*[A-Z])/.test(formData.confirmPassword) ? "bg-green-400" : "bg-gray-200"}`}
                                            />
                                            <div
                                                className={`h-1 w-full rounded ${/(?=.*\d)/.test(formData.confirmPassword) ? "bg-green-400" : "bg-gray-200"}`}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Password strength:{" "}
                                            {formData.confirmPassword.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.confirmPassword)
                                                ? "Strong"
                                                : formData.confirmPassword.length >= 6
                                                    ? "Medium"
                                                    : "Weak"}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={!isFormValid() || isLoading}
                                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Creating Account...
                                    </div>
                                ) : (
                                    "Create Account & Continue"
                                )}
                            </Button>
                        </form>

                        <div className="text-center">
                            <p className="text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link to="/login"
                                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Trust Indicators */}
                <div className="mt-6 text-center space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Lock className="h-4 w-4" />
                        <span>Your information is secure and encrypted</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                        <span>✓ No spam</span>
                        <span>✓ Free to use</span>
                        <span>✓ Takes 2 minutes</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
