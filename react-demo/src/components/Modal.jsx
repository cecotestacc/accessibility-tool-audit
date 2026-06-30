import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>

      {open && (
        // dialog element missing role="dialog", aria-modal, aria-labelledby
        // focus is not trapped inside — screen reader can reach background content
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <div style={{ background: "#fff", padding: 24, width: 360 }}>
            {/* no heading / title announced to assistive technology */}

            <p>Are you sure you want to continue?</p>

            {/* close button has no accessible label */}
            <button
              onClick={() => setOpen(false)}
              style={{ position: "absolute", top: 8, right: 8, border: "none", background: "none" }}
            >
              ✕
            </button>

            <button onClick={() => setOpen(false)}>Yes</button>
            <button onClick={() => setOpen(false)}>No</button>
          </div>
        </div>
      )}
    </>
  );
}
