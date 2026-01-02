export default function HomePage() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 1.5rem",
        background:
          "radial-gradient(circle at top, rgba(212,175,55,0.08), transparent 60%)",
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        {/* ===== LUXURY TITLE ===== */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
            fontWeight: 600,
            letterSpacing: "0.15em",
            marginBottom: "1.2rem",
          }}
        >
          <span style={{ color: "#d4af37" }}>SATHYA</span>JEEVIYAM
        </h1>

        {/* ===== SUBTITLE ===== */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            opacity: 0.85,
            marginBottom: "3rem",
          }}
        >
          A refined spiritual experience designed for clarity, elevation,
          and timeless wisdom. This is not guidance — this is transformation.
        </p>

        {/* ===== LUXURY BUTTON GROUP ===== */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.6rem",
            flexWrap: "wrap",
          }}
        >
          <a href="/schedule" className="btn-luxury">
            Book Premium Session
          </a>

          <a href="/learn-more" className="btn-outline-luxury">
            Explore Wisdom
          </a>
        </div>

        {/* ===== FLOATING POPUP CARD ===== */}
        <div
          style={{
            marginTop: "5rem",
            padding: "2.5rem",
            borderRadius: "18px",
            background:
              "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(8,8,8,0.9))",
            border: "1px solid rgba(212,175,55,0.25)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.7), inset 0 0 30px rgba(212,175,55,0.08)",
          }}
        >
          <h3
            style={{
              color: "#d4af37",
              letterSpacing: "0.12em",
              marginBottom: "1rem",
            }}
          >
            PRIVATE ACCESS
          </h3>

          <p style={{ opacity: 0.75, marginBottom: "1.8rem" }}>
            Limited one-on-one sessions are available for those who seek
            deeper alignment and premium insight.
          </p>

          <a href="/contact" className="btn-luxury">
            Request Invitation
          </a>
        </div>
      </div>
    </section>
  );
}
