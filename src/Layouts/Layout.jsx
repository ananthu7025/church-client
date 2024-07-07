// Layout.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';



const Layout = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };
  return (
    <div className={`g-sidenav-show bg-gray-200 ${isSidebarVisible ? 'g-sidenav-pinned' : ''}`}>
  <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg">
        <Navbar toggleSidebar={toggleSidebar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;