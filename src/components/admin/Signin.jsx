import React, { useState, useContext } from 'react';
import styles from "../../styles/admin/Signin.module.css";
import { AuthContext } from "../../context/AuthContext";

function Signin() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Email:", email, "Password:", password);
    login(email, password); // Call login function
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="string"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="User ID"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;