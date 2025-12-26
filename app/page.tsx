import Link from "next/link";

export default function Home() {
  return (
    <main className="container">

      {/* HERO */}
      <section style={{ marginTop: "40px" }}>
        <h1
          style={{
            fontSize: "64px",
            maxWidth: "900px",
            lineHeight: "1.15",
            background: "linear-gradient(135deg, #c6a24d, #e8d9a8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(198,162,77,0.25)",
          }}
        >
          Where Financial Clarity
          <br />
          Meets Long-Term Security
        </h1>

        <p
          style={{
            maxWidth: "780px",
            marginTop: "28px",
            fontSize: "19px",
            color: "#333",
          }}
        >
          Sathyajeeviyam is a focused financial advisory practice dedicated to
          retirement planning, life insurance, and term insurance — designed to
          protect your income, your family, and your future with absolute
          clarity and discipline.
        </p>

        <div style={{ marginTop: "36px" }}>
          <Link className="btn" href="/schedule">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section
        className="section"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "24px",
        }}
      >
        {[
          "Focused Advisory Model",
          "Ethical & Need-Based Planning",
          "Long-Term Financial Vision",
          "Professional One-to-One Guidance",
        ].map((text) => (
          <div
            key={text}
            style={{
              background: "linear-gradient(135deg,#fff,#fdf9f0)",
              border: "1px solid rgba(198,162,77,0.25)",
              padding: "28px",
              borderRadius: "18px",
              boxShadow:
                "0 0 30px rgba(198,162,77,0.15), inset 0 0 12px rgba(198,162,77,0.08)",
              fontWeight: 600,
            }}
          >
            {text}
          </div>
        ))}
      </section>

      {/* WHAT WE SPECIALIZE IN */}
      <section className="section">
        <h2 style={{ fontSize: "44px" }}>Our Core Specializations</h2>

        <p style={{ maxWidth: "760px", marginTop: "16px" }}>
          We do not dilute our focus. Every recommendation we make aligns with
          long-term stability, disciplined protection, and retirement readiness.
        </p>

        <div className="card-grid" style={{ marginTop: "40px" }}>
          <div
            className="card"
            style={{
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow:
                "0 20px 60px rgba(198,162,77,0.18)",
            }}
          >
            <h3>Retirement Planning</h3>
            <p>
              Structured retirement strategies that ensure predictable income,
              capital protection, and peace of mind after active working years.
            </p>
          </div>

          <div
            className="card"
            style={{
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow:
                "0 20px 60px rgba(198,162,77,0.18)",
            }}
          >
            <h3>Life Insurance Advisory</h3>
            <p>
              Protection-first planning designed to secure your family’s
              financial future without over-commitment or mis-selling.
            </p>
          </div>

          <div
            className="card"
            style={{
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow:
                "0 20px 60px rgba(198,162,77,0.18)",
            }}
          >
            <h3>Term Insurance</h3>
            <p>
              High-coverage, cost-efficient term insurance solutions that
              safeguard against unforeseen life risks during critical years.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, rgba(198,162,77,0.08), rgba(232,217,168,0.15))",
          padding: "80px",
          borderRadius: "32px",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>
          Our Advisory Philosophy
        </h2>

        <p style={{ maxWidth: "820px", marginTop: "24px", fontSize: "18px" }}>
          Financial planning is not about chasing returns — it is about
          eliminating uncertainty. At Sathyajeeviyam, we believe in disciplined
          planning, transparent guidance, and decisions that remain strong even
          decades into the future.
        </p>

        <p style={{ maxWidth: "820px", marginTop: "16px" }}>
          Every consultation is personal. Every plan is intentional. Every
          recommendation is grounded in responsibility.
        </p>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>
          Begin With a Professional Conversation
        </h2>

        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          If you value clarity, discipline, and long-term security, we invite
          you to begin your journey with a focused consultation.
        </p>

        <Link className="btn" href="/schedule">
          Book Your Consultation
        </Link>
      </section>

    </main>
  );
}
