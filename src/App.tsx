import { useEffect, useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={`launch-page ${loaded ? "is-loaded" : ""}`}>
      <picture className="hero-art" aria-hidden="true">
        <source
          media="(max-width: 700px)"
          srcSet="/images/alya-mobile.webp"
        />
        <source
          media="(max-width: 1100px)"
          srcSet="/images/alya-tablet.webp"
        />
        <img
          src="/images/alya-desktop.webp"
          alt=""
          fetchPriority="high"
        />
      </picture>

      <div className="soft-vignette" />

      <section className="launch-card" aria-label="Alya Pages launch message">
        <span className="ornament">✽</span>
        <p className="eyebrow">A NEW CHAPTER IS BEING WRITTEN</p>
        <h1>Something beautiful<br />is coming.</h1>
        <p className="description">
          A quiet little corner for stories, thoughts, and books.
        </p>

        <div className="rule">
          <span />
          <i>♡</i>
          <span />
        </div>

        <p className="coming">alya pages · launching soon</p>
      </section>

      <footer className="footer">
        <span>✽</span>
        <span>a little space for words</span>
      </footer>
    </main>
  );
}

export default App;
