import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/admin/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>Admin Panel</h2>
      <nav className={styles.nav}>
        <NavLink
          to="/admin/dashboard/inbox"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          📩 Inbox
        </NavLink>
        <NavLink
          to="/admin/dashboard/services"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          🛠️ Services
        </NavLink>
        <NavLink
          to="/admin/dashboard/projects"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          📂 Projects
        </NavLink>
        <NavLink
          to="/admin/dashboard/reviews"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          ⭐ Reviews
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
