import React from 'react';
import './AdminFooter.css';

const AdminFooter = () => {
  return (
    <footer className="bg-white sticky-footer">
      <div className="container my-auto">
        <div className="text-center my-auto copyright">
          <span>Copyright &copy; Palace Cinema {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
