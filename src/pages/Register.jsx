import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User, Building2, Zap, Check } from "lucide-react";

const PLANS = [
  { id: "free", label: "Free", price: "$0", desc: "Up to 500 contacts" },
  { id: "pro", label: "Pro", price: "$29", desc: "Up to 25,000 contacts", popular: true },
  { id: "scale", label: "Scale", price: "$79", desc: "Unlimited contacts" },
];

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [focusField, setFocusField] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [form, setForm] = useState({ name: "", email: "", company: "", password: "" });
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validateStep1 = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8) e.password = "Minimum 8 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep1()) setStep(2);
  };

  const handleFinish = () => {
    localStorage.setItem("loggedIn", "true");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1400);
  };

  const passwordStrength = () => {
    const p = form.password;
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  };

  const strength = passwordStrength();
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["", "#ef4444", "#f59e0b", "#3b82f6", "#22c55e"][strength];

  const inputStyle = (field) => ({
    width: "100%",
    padding: "11px 14px 11px 42px",
    border: `1.5px solid ${errors[field] ? "#fca5a5" : focusField === field ? "#4f46e5" : "#e2e8f0"}`,
    borderRadius: 10,
    fontSize: 14,
    color: "#0f172a",
    background: errors[field] ? "#fff5f5" : "white",
    outline: "none",
    boxShadow: focusField === field && !errors[field] ? "0 0 0 3px rgba(79,70,229,0.08)" : "none",
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
      <div
        style={{
          width: "48%",
          background: "linear-gradient(145deg, #0c4a6e 0%, #0369a1 45%, #0ea5e9 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          position: "relative",
          overflow: "hidden",
        }}
        className="auth-left-panel"
      >
        <div style={{ position: "absolute", top: -100, right: -60, width: 340, height: 340, borderRadius: "50%", background: "rgba(14,165,233,0.2)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 280, height: 280, borderRadius: "50%", background: "rgba(3,105,161,0.25)", pointerEvents: "none" }} />

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
            <Zap size={20} color="#0369a1" />
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, color: "white", fontFamily: "'Syne', sans-serif" }}>
            360Airo
          </span>
        </div>

        <div style={{ position: "relative" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "white", fontFamily: "'Syne', sans-serif", lineHeight: 1.25, marginBottom: 16 }}>
            Start sending smarter campaigns today.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36 }}>
            Join thousands of teams who use 360Airo to automate outreach and grow their audience.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Drag-and-drop campaign builder",
              "Smart audience segmentation",
              "LinkedIn + email automation",
              "Real-time analytics & reporting",
            ].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={12} color="white" strokeWidth={3} />
                </div>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            "360Airo cut our campaign setup time by 70%. The automation is incredibly powerful."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "white" }}>
              P
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "white", margin: 0 }}>Priya Sharma</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "2px 0 0" }}>Head of Marketing, TechWave</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 40px", background: "white" }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
            {[1, 2].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: step >= s ? "#4f46e5" : "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: step >= s ? "white" : "#94a3b8", transition: "all 0.2s" }}>
                  {step > s ? <Check size={13} strokeWidth={3} /> : s}
                </div>
                <span style={{ fontSize: 12, color: step >= s ? "#4f46e5" : "#94a3b8", fontWeight: 500 }}>
                  {s === 1 ? "Your details" : "Choose plan"}
                </span>
                {s < 2 && <div style={{ width: 32, height: 1.5, background: step > s ? "#4f46e5" : "#e2e8f0", borderRadius: 2, transition: "all 0.2s" }} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <>
              <div style={{ marginBottom: 28 }}>
                <h1 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", margin: "0 0 6px", fontFamily: "'Syne', sans-serif" }}>
                  Create your account
                </h1>
                <p style={{ fontSize: 14, color: "#94a3b8", margin: 0 }}>Free to start. No credit card required.</p>
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
                  marginBottom: 22,
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
                Sign up with Google
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
                <span style={{ fontSize: 12, color: "#cbd5e1", fontWeight: 500 }}>or continue with email</span>
                <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
              </div>

              <form onSubmit={handleNext} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full name</label>
                  <div style={{ position: "relative" }}>
                    <User size={15} color={focusField === "name" ? "#4f46e5" : "#cbd5e1"} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      placeholder="Arjun Singh"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      onFocus={() => setFocusField("name")}
                      onBlur={() => setFocusField("")}
                      style={inputStyle("name")}
                    />
                  </div>
                  {errors.name && <p style={{ fontSize: 12, color: "#ef4444", margin: "4px 0 0" }}>{errors.name}</p>}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Work email</label>
                  <div style={{ position: "relative" }}>
                    <Mail size={15} color={focusField === "email" ? "#4f46e5" : "#cbd5e1"} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      onFocus={() => setFocusField("email")}
                      onBlur={() => setFocusField("")}
                      style={inputStyle("email")}
                    />
                  </div>
                  {errors.email && <p style={{ fontSize: 12, color: "#ef4444", margin: "4px 0 0" }}>{errors.email}</p>}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                    Company <span style={{ color: "#cbd5e1", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <Building2 size={15} color={focusField === "company" ? "#4f46e5" : "#cbd5e1"} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      placeholder="Your company name"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      onFocus={() => setFocusField("company")}
                      onBlur={() => setFocusField("")}
                      style={inputStyle("company")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Password</label>
                  <div style={{ position: "relative" }}>
                    <Lock size={15} color={focusField === "password" ? "#4f46e5" : "#cbd5e1"} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Min. 8 characters"
                      value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                      onFocus={() => setFocusField("password")}
                      onBlur={() => setFocusField("")}
                      style={{ ...inputStyle("password"), paddingRight: 42 }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass((v) => !v)}
                      style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#94a3b8", display: "flex", alignItems: "center" }}
                    >
                      {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {form.password && (
                    <div style={{ marginTop: 8 }}>
                      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= strength ? strengthColor : "#f1f5f9", transition: "all 0.2s" }} />
                        ))}
                      </div>
                      <p style={{ fontSize: 11, color: strengthColor, margin: 0, fontWeight: 500 }}>{strengthLabel}</p>
                    </div>
                  )}
                  {errors.password && <p style={{ fontSize: 12, color: "#ef4444", margin: "4px 0 0" }}>{errors.password}</p>}
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#4f46e5",
                    border: "none",
                    borderRadius: 10,
                    color: "white",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    fontFamily: "'DM Sans', sans-serif",
                    marginTop: 4,
                    boxShadow: "0 4px 14px rgba(79,70,229,0.35)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#4338ca")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#4f46e5")}
                >
                  Continue →
                </button>
              </form>

              <p style={{ textAlign: "center", fontSize: 13, color: "#94a3b8", marginTop: 24 }}>
                Already have an account?{' '}
                <Link to="/login" style={{ color: "#4f46e5", fontWeight: 600, textDecoration: "none" }}>
                  Sign in
                </Link>
              </p>

              <p style={{ textAlign: "center", fontSize: 11, color: "#cbd5e1", marginTop: 16, lineHeight: 1.6 }}>
                By signing up, you agree to our{' '}
                <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Terms of Service</a>{' '}
                and{' '}
                <a href="#" style={{ color: "#94a3b8", textDecoration: "none" }}>Privacy Policy</a>.
              </p>
            </>
          )}

          {step === 2 && (
            <>
              <div style={{ marginBottom: 28 }}>
                <h1 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", margin: "0 0 6px", fontFamily: "'Syne', sans-serif" }}>
                  Choose your plan
                </h1>
                <p style={{ fontSize: 14, color: "#94a3b8", margin: 0 }}>Start free, upgrade anytime. No surprises.</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px",
                      borderRadius: 12,
                      cursor: "pointer",
                      border: selectedPlan === plan.id ? "2px solid #4f46e5" : "1.5px solid #e2e8f0",
                      background: selectedPlan === plan.id ? "#eef2ff" : "white",
                      transition: "all 0.15s",
                      textAlign: "left",
                      position: "relative",
                    }}
                  >
                    {plan.popular && (
                      <span style={{ position: "absolute", top: -10, right: 14, background: "#4f46e5", color: "white", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>
                        POPULAR
                      </span>
                    )}
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: 0 }}>{plan.label}</p>
                      <p style={{ fontSize: 12, color: "#94a3b8", margin: "3px 0 0" }}>{plan.desc}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 18, fontWeight: 800, color: selectedPlan === plan.id ? "#4f46e5" : "#0f172a", fontFamily: "'Syne', sans-serif" }}>
                        {plan.price}
                        <span style={{ fontSize: 12, fontWeight: 500, color: "#94a3b8" }}>/mo</span>
                      </span>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", border: selectedPlan === plan.id ? "none" : "2px solid #e2e8f0", background: selectedPlan === plan.id ? "#4f46e5" : "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {selectedPlan === plan.id && <Check size={10} color="white" strokeWidth={3} />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={handleFinish}
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: loading ? "#a5b4fc" : "#4f46e5",
                  border: "none",
                  borderRadius: 10,
                  color: "white",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: loading ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "all 0.15s",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: loading ? "none" : "0 4px 14px rgba(79,70,229,0.35)",
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.background = "#4338ca";
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.currentTarget.style.background = "#4f46e5";
                }}
              >
                {loading ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Creating your account...
                  </>
                ) : `Get started with ${PLANS.find((p) => p.id === selectedPlan)?.label}`}
              </button>

              <button
                onClick={() => setStep(1)}
                style={{ display: "block", margin: "14px auto 0", fontSize: 13, color: "#94a3b8", background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
              >
                ← Back
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .auth-left-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
}
