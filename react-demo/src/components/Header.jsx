export default function Header() {
  return (
    // nav landmark with no aria-label — two navs on same page would be indistinguishable
    <nav>
      {/* logo image, no alt */}
      <img src="/logo.png" />

      <ul>
        {/* anchor used purely for JS action — should be a button */}
        <li><a href="#" onClick={(e) => { e.preventDefault(); }}>Home</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); }}>About</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); }}>Contact</a></li>
      </ul>

      {/* icon-only button with no accessible label */}
      <button style={{ background: "none", border: "none" }}>
        <img src="/menu-icon.png" />
      </button>

      {/* low-contrast text in inline style */}
      <span style={{ color: "#c0c0c0", backgroundColor: "#ffffff" }}>
        BETA
      </span>
    </nav>
  );
}
