import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) setError("Email is required");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* error not linked to the field via aria-describedby */}
      {error && <span style={{ color: "red" }}>{error}</span>}

      {/* inputs have no associated <label> elements */}
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* required field not indicated to assistive tech */}
      <input type="text" placeholder="Full name" required />

      {/* div acting as submit button — not keyboard accessible */}
      <div
        style={{ background: "#4a90e2", color: "#fff", padding: "8px 16px", cursor: "pointer" }}
        onClick={handleSubmit as any}
      >
        Log In
      </div>

      <a href="/forgot">Click here to reset password</a>
    </form>
  );
}
