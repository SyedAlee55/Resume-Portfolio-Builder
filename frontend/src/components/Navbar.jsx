import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { token, logout } = useContext(AuthContext);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate("/");
  };

  return (
    <nav className="w-full py-4 px-6 lg:px-16 fixed top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="text-2xl font-bold text-green-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            EnhanCV
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200">
          <a className="hover:underline" href="#resume">Resume</a>
          <a className="hover:underline" href="#cover">Cover Letter</a>
          <a className="hover:underline" href="#blog">Blog</a>
          <a className="hover:underline" href="#pricing">Pricing</a>
          <a className="hover:underline" href="#orgs">For Organizations</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>

          {token ? (
            // Logged in - show profile dropdown
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                <FaUser />
                <span>Profile</span>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                  <button
                    onClick={goToDashboard}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-gray-700 dark:text-gray-200"
                  >
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                  </button>
                  <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-red-600"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Not logged in - show login and get started buttons
            <>
              <button onClick={goToLogin} className="text-gray-700 dark:text-gray-200">
                Log in
              </button>
              <button
                onClick={goToSignup}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Get Started
              </button>
            </>
          )}
        </div>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            aria-label="toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          {/* very simple mobile menu trigger (replace with drawer if desired) */}
          <label htmlFor="nav-toggle" className="text-2xl cursor-pointer text-gray-700 dark:text-gray-200">
            ☰
          </label>
        </div>
      </div>

      {/* mobile menu (checkbox hack) */}
      <input id="nav-toggle" type="checkbox" className="hidden peer" />
      <div className="peer-checked:block hidden md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="px-6 py-4 flex flex-col gap-3 text-gray-700 dark:text-gray-200">
          <a href="#resume">Resume</a>
          <a href="#cover">Cover Letter</a>
          <a href="#blog">Blog</a>
          <a href="#pricing">Pricing</a>
          <a href="#orgs">For Organizations</a>

          {token ? (
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={goToDashboard}
                className="border border-gray-300 dark:border-gray-700 rounded-md py-2 flex items-center justify-center gap-2"
              >
                <FaTachometerAlt />
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white rounded-md py-2 flex items-center justify-center gap-2"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2 mt-2">
              <button
                onClick={goToLogin}
                className="flex-1 border border-gray-300 dark:border-gray-700 rounded-md py-2"
              >
                Sign in
              </button>
              <button
                onClick={goToSignup}
                className="flex-1 bg-green-600 text-white rounded-md py-2"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

