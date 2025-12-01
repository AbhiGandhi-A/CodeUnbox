"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import styles from "./register.module.css";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  const [mode, setMode] = useState<"register" | "login">("register");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  // REGISTER FORM DATA
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // LOGIN FORM DATA
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // REGISTER submit
  async function handleRegister(e: any) {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const data = await res.json();
      if (!res.ok) return toast.error(data.error || "Registration failed");

      toast.success("Account created!");
      setMode("login"); // Auto switch to login page
    } finally {
      setLoading(false);
    }
  }

  // LOGIN submit
  async function handleLogin(e: any) {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      email: loginEmail,
      password: loginPassword,
      redirect: false,
    });

    if (result?.error) toast.error(result.error);
    else window.location.href = "/";

    setLoading(false);
  }

  if (!isMounted) return null;

  return (
    <div className={styles.container}>
      
      {/* Animated background particles */}
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>

      {/* LEFT SIDE CONTENT (Desktop only) */}
      <div className={styles.content}>
        <h2>Build. Analyze. Share. Faster Than Ever.</h2>
        <p>
          Create your workspace account to upload ZIP projects, explore structured folders,
          preview code instantly, share selective files using a secure PIN, and save your
          workspaces in the cloud.
        </p>

        <ul className={styles.featureList}>
          <li>Instant ZIP Extraction & Preview</li>
          <li>VS Code style folder explorer</li>
          <li>Smart PIN-Based File Sharing</li>
          <li>Save & continue projects anytime</li>
          <li>Premium features with flexible plans</li>
        </ul>

        <div className={styles.graphic}></div>
      </div>

      {/* RIGHT SIDE — BOTH FORMS STACKED */}
      <div className={styles.formWrapper}>

        {/* REGISTER FORM */}
        <form
          onSubmit={handleRegister}
          className={`${styles.form} ${
            mode === "register" ? styles.formActive : styles.formHiddenUp
          }`}
        >
          <h1 className={styles.title}>Create Your Account</h1>

          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input
              type="text"
              required
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input
              type="email"
              required
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              required
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              required
              value={registerData.confirmPassword}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          <button className={styles.button} disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <p className={styles.footer}>
            Already have an account?{" "}
            <span onClick={() => setMode("login")}>Sign In</span>
          </p>
        </form>

        {/* LOGIN FORM */}
        <form
          onSubmit={handleLogin}
          className={`${styles.form} ${
            mode === "login" ? styles.formActive : styles.formHiddenDown
          }`}
        >
          <h1 className={styles.title}>Welcome Back</h1>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <button className={styles.button} disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className={styles.footer}>
            New here? <span onClick={() => setMode("register")}>Create account</span>
          </p>
        </form>
      </div>
    </div>
  );
}
