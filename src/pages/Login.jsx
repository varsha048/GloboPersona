import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Zap } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusField, setFocusField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    localStorage.setItem("loggedIn", "true");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "11px 14px 11px 42px",
    border: `1.5px solid ${focusField === field ? "#4f46e5" : "#e2e8f0"}`,
    borderRadius: 10,
    fontSize: 14,
    color: "#0f172a",
    background: "white",
    outline: "none",
    boxShadow:
      focusField === field ? "0 0 0 3px rgba(79,70,229,0.08)" : "none",
    transition: "all 0.15s",
    fontFamily: "'DM Sans', sans-serif",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#f8fafc",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* ── Left branding panel ── */}
      <div
        style={{
          width: "48%",
          background: "linear-gradient(145deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          position: "relative",
          overflow: "hidden",
        }}
        className="auth-left-panel"
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(139,92,246,0.2)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(59,130,246,0.15)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            right: "15%",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(167,139,250,0.12)",
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <Zap size={20} color="#4f46e5" />
          </div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "white",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            360Airo
          </span>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "6px 14px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ade80",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.85)",
                fontWeight: 500,
              }}
            >
              Trusted by 8,000+ marketing teams
            </span>
          </div>

          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "white",
              fontFamily: "'Syne', sans-serif",
              lineHeight: 1.25,
              marginBottom: 16,
            }}
          >
            Reach the right
            <br />people, every time.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: 360,
            }}
          >
            All-in-one platform for email marketing and automation. Build campaigns, manage contacts, and grow your audience.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
            position: "relative",
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {[
            { value: "94K+", label: "Emails sent" },
            { value: "28.6%", label: "Avg open rate" },
            { value: "148", label: "Active campaigns" },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "white",
                  fontFamily: "'Syne', sans-serif",
                  margin: 0,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  margin: "3px 0 0",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 40px",
          background: "white",
        }}
      >
        <div style={{ width: "100%", maxWidth: 400 }}>
          <div style={{ marginBottom: 36 }}>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: "#0f172a",
                margin: "0 0 8px",
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Welcome back
            </h1>
            <p style={{ fontSize: 14, color: "#94a3b8", margin: 0 }}>
              Sign in to your 360Airo account
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              width: "100%",
              padding: "11px 16px",
              border: "1.5px solid #e2e8f0",
              borderRadius: 10,
              background: "white",
              color: "#374151",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 24,
              transition: "all 0.15s",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05" />
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
            <span style={{ fontSize: 12, color: "#cbd5e1", fontWeight: 500 }}>
              or sign in with email
            </span>
            <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
          </div>

          {error && (
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 9,
                marginBottom: 16,
                background: "#fef2f2",
                border: "1px solid #fecaca",
                fontSize: 13,
                color: "#dc2626",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                  marginBottom: 6,
                }}
              >
                Email address
              </label>
              <div style={{ position: "relative" }}>
                <Mail size={18} style={{ position: "absolute", left: 14, top: 12, color: "#94a3b8" }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusField("email")}
                  onBlur={() => setFocusField("")}
                  style={inputStyle("email")}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#374151",
                  marginBottom: 6,
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock size={18} style={{ position: "absolute", left: 14, top: 12, color: "#94a3b8" }} />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusField("password")}
                  onBlur={() => setFocusField("")}
                  style={inputStyle("password")}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: "absolute",
                    right: 14,
                    top: 12,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    padding: 0,
                    color: "#64748b",
                  }}
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#475569" }}>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/" style={{ fontSize: 13, color: "#4f46e5", fontWeight: 600 }}>
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "13px 16px",
                borderRadius: 12,
                border: "none",
                background: "#4f46e5",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 16px 24px rgba(79,70,229,0.12)",
              }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 22, textAlign: "center" }}>
            Don’t have an account?{' '}
            <Link to="/register" style={{ color: "#4f46e5", fontWeight: 700 }}>
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
