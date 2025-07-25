import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Signup from './pages/authpages/Signup';
import Login from './pages/authpages/Login';
import ForgotPassword from './pages/authpages/ForgotPassword';
import ResetPassword from './pages/authpages/ResetPassword';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="min-h-screen">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                        <Route path="/apply" element={<Apply />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
