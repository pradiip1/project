import {
  LayoutDashboard,
  Grid2X2,
  ShoppingBag,
  Heart,
  Scale,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ open, onClose, user }) {
  const menus = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "About", icon: <Heart size={20} />, path: "/" },
    { name: "Settings", icon: <Settings size={20} />, path: "/help" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay ${open ? "sidebar-overlay--open" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div>
            <h1 className="sidebar-title">
              Price<span className="sidebar-title-accent">Nepal</span>
            </h1>
            <p className="sidebar-subtitle">Compare Prices</p>
          </div>

          <button onClick={onClose} className="sidebar-close-btn">
            <Menu />
          </button>
        </div>

        {/* User */}
        <div className="sidebar-user-card">
          <div className="sidebar-user-row">
            <div className="sidebar-user-avatar">
              {user?.name?.charAt(0) || "G"}
            </div>

            <div>
              <h3 className="sidebar-user-name">{user?.name || "Guest"}</h3>
              <p className="sidebar-user-email">
                {user?.email || "Not Logged In"}
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="sidebar-menu">
          {menus.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-menu-link ${isActive ? "sidebar-menu-link--active" : ""}`
              }
            >
              {item.icon}
              <span className="sidebar-menu-link-label">{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <button className="sidebar-logout-btn">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
