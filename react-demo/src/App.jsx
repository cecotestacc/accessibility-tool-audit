import Header from "./components/Header.jsx";
import LoginForm from "./components/LoginForm.tsx";
import ProductCard from "./components/ProductCard.tsx";
import Modal from "./components/Modal.jsx";

export default function App() {
  return (
    <div>
      <Header />

      {/* auto-playing background video, no controls, no track */}
      <video autoPlay muted loop src="/hero.mp4" />

      <main>
        <LoginForm />

        <section>
          {/* skips h1 — page has no h1 at all */}
          <h2>Featured Products</h2>
          <div style={{ display: "flex", gap: 16 }}>
            <ProductCard />
            <ProductCard />
          </div>
        </section>

        {/* positive tabIndex disrupts natural focus order */}
        <button tabIndex={3} onClick={() => {}}>
          Explore
        </button>

        <Modal />
      </main>

      <footer>
        {/* non-descriptive link */}
        <a href="/privacy">click here</a> for our privacy policy.
      </footer>
    </div>
  );
}
