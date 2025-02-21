import React, { createContext, useState, useEffect } from "react";
import { db } from "../Firebase";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Create Context
export const AuthContext = createContext();

// Fetch admin credentials from Firestore
async function fetchAdminCredentials() {
  const querySnapshot = await getDocs(collection(db, "adminAccess"));
  const credentials = [];
  querySnapshot.forEach((doc) => {
    credentials.push({
      email: doc.data().userid, // Assuming Firestore stores "userid" as email
      password: doc.data().password, // Firestore stores "password"
    });
  });
  return credentials;
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("isAuthenticated");
    if (user) {
      setIsAuthenticated(true);
    }

    // Fetch credentials from Firestore
    fetchAdminCredentials().then((data) => setAdminData(data));
  }, []);

  const login = async (email, password) => {
    const isValidUser = adminData.some(
      (admin) => admin.email === email && admin.password === password
    );

    if (isValidUser) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/admin");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
