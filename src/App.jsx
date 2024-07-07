import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import PrivateRoutes from './utils/protectedRoutes';
import Dashboard from './pages/Dashboard';
import Layout from './Layouts/Layout';
import FamilyList from './pages/Families';

export default function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
          <Route
                path="/dashboard"
                element={
                  <Layout>
                    <Dashboard />
                  </Layout>
                }
              />
              <Route
                path="/family-list"
                element={
                  <Layout>
                    <FamilyList />
                  </Layout>
                }
              />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
