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

function Sidebar({ open, onClose, user }) {
  const menus = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Categories", icon: <Grid2X2 size={20} />, path: "/" },
    { name: "Products", icon: <ShoppingBag size={20} />, path: "/" },
    { name: "Compare", icon: <Scale size={20} />, path: "/" },
    { name: "Wishlist", icon: <Heart size={20} />, path: "/" },
    { name: "Settings", icon: <Settings size={20} />, path: "/help" },
  ];

  return (
    <>
      {/* Mobile Overlay */}

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-2xl transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h1 className="text-3xl font-bold">
              Price<span className="text-blue-600">Nepal</span>
            </h1>

            <p className="text-sm text-gray-500">
              Compare Prices
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <Menu />
          </button>

        </div>

        {/* User */}

        <div className="m-5 rounded-3xl bg-blue-50 p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              {user?.name?.charAt(0) || "G"}
            </div>

            <div>

              <h3 className="font-bold">
                {user?.name || "Guest"}
              </h3>

              <p className="text-sm text-gray-500">
                {user?.email || "Not Logged In"}
              </p>

            </div>

          </div>

        </div>

        {/* Menu */}

        <div className="px-4">

          {menus.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-50"
                }`
              }
            >
              {item.icon}

              <span className="font-medium">
                {item.name}
              </span>

            </NavLink>
          ))}

        </div>

        {/* Footer */}

        <div className="absolute bottom-8 left-0 w-full px-5">

          <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-4 font-semibold text-white transition hover:bg-red-600">

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;
