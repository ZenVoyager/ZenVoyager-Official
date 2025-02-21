import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styles from "../../styles/admin/Sidebar.module.css";

function Sidebar() {
  const { logout } = useContext(AuthContext);

  return (
    <div className={styles.sidebar}>
      <div>
        <h2 className={styles.logo}>Admin Panel</h2>
        <nav className={styles.nav}>
          <NavLink
            to="/admin/dashboard/inbox"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            📩 Inbox
          </NavLink>
          <NavLink
            to="/admin/dashboard/services"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            🛠️ Services
          </NavLink>
          <NavLink
            to="/admin/dashboard/projects"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            📂 Projects
          </NavLink>
          <NavLink
            to="/admin/dashboard/reviews"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            ⭐ Reviews
          </NavLink>
        </nav>
      </div>
      <button className={styles.logoutButton} onClick={logout}>Logout</button>
    </div>
  );
}

export default Sidebar;
