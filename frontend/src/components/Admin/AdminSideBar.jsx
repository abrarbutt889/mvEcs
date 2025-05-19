import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/slices/authSlices";
import { clearCart } from "../../redux/slices/cartSlices";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen w-64 p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-xl text-white flex flex-col">
      <div className="mb-10 text-center">
        <Link
          to="/admin"
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
        >
          E-Commerce
        </Link>
      </div>

      <h2 className="text-lg text-center font-semibold text-gray-300 mb-6 border-b pb-3 border-gray-700 uppercase">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-3">
        {[
          { to: "/admin/users", icon: <FaUser />, label: "Users" },
          { to: "/admin/products", icon: <FaBoxOpen />, label: "Products" },
          { to: "/admin/orders", icon: <FaClipboardList />, label: "Orders" },
          { to: "/", icon: <FaStore />, label: "Shop" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transform transition-all duration-300
               ${
                 isActive
                   ? "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg scale-105"
                   : "bg-gray-800 hover:shadow-xl hover:scale-105 hover:bg-gray-700"
               }`
            }
          >
            {icon}
            <span className="text-sm font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-10">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 w-full py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
