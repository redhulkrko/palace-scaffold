import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import Topbar from '../components/admin/Topbar';
import DashboardCards from '../components/admin/DashboardCards';
import ChartsSection from '../components/admin/ChartsSection';
import ProjectsSection from '../components/admin/ProjectsSection';
import ColorPalette from '../components/admin/ColorPalette';
import AdminFooter from '../components/admin/AdminFooter';
import Films from '../components/admin/Films';
import '../components/admin/admin-theme.css';
import './AdminDashboard.css';

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 className="text-dark mb-0">Dashboard</h3>
        <a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#">
          <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report
        </a>
      </div>
      <DashboardCards />
      <ChartsSection />
      <div className="row">
        <ProjectsSection />
        <ColorPalette />
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/films" element={<Films />} />
          </Routes>
        </div>
        <AdminFooter />
      </div>
      <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default AdminDashboard;
