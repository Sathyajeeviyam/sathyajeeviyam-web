import Link from "next/link";

export default function LearnMore() {
  return (
    <main className="container">

      {/* HEADER */}
      <section style={{ marginTop: "40px" }}>
        <h1
          style={{
            fontSize: "56px",
            maxWidth: "900px",
            lineHeight: "1.2",
            background: "linear-gradient(135deg, #c6a24d, #e8d9a8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 28px rgba(198,162,77,0.25)",
          }}
        >
          Financial Planning With Purpose,
          <br />
          Protection With Integrity
        </h1>

        <p
          style={{
            maxWidth: "820px",
            marginTop: "26px",
            fontSize: "18px",
            color: "#333",
          }}
        >
          At Sathyajeeviyam, financial planning is not a product — it is a
          responsibility. We focus exclusively on areas that directly impact
          long-term security, income protection, and retirement stability.
        </p>
      </section>

      {/* WHY WE EXIST */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, rgba(198,162,77,0.08), rgba(232,217,168,0.12))",
          padding: "70px",
          borderRadius: "30px",
        }}
      >
        <h2 style={{ fontSize: "40px" }}>Why Sathyajeeviyam Exists</h2>

        <p style={{ maxWidth: "860px", marginTop: "20px", fontSize: "18px" }}>
          Many individuals purchase financial products without fully
          understanding their long-term impact. Our purpose is to eliminate
          confusion and replace it with structured clarity.
        </p>

        <p style={{ maxWidth: "860px", marginTop: "16px" }}>
          We guide clients through disciplined decisions that remain reliable
          across decades — not just market cycles.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2 style={{ fontSize: "44px" }}>What We Specialize In</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            marginTop: "40px",
          }}
        >
          {/* RETIREMENT */}
          <div
            style={{
              background: "#fff",
              padding: "36px",
              borderRadius: "24px",
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow: "0 30px 80px rgba(198,162,77,0.18)",
            }}
          >
            <h3 style={{ fontSize: "26px" }}>Retirement Planning</h3>

            <p style={{ marginTop: "16px" }}>
              Retirement is not a single goal — it is a phase that requires
              income continuity, inflation protection, and capital safety.
            </p>

            <ul style={{ marginTop: "16px", paddingLeft: "20px" }}>
              <li>Structured retirement income planning</li>
              <li>Long-term capital preservation</li>
              <li>Risk-managed allocation strategies</li>
              <li>Predictable post-retirement cash flow</li>
            </ul>
          </div>

          {/* LIFE INSURANCE */}
          <div
            style={{
              background: "#fff",
              padding: "36px",
              borderRadius: "24px",
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow: "0 30px 80px rgba(198,162,77,0.18)",
            }}
          >
            <h3 style={{ fontSize: "26px" }}>Life Insurance Advisory</h3>

            <p style={{ marginTop: "16px" }}>
              Life insurance is about responsibility, not returns. We ensure
              that coverage decisions align with real financial dependency.
            </p>

            <ul style={{ marginTop: "16px", paddingLeft: "20px" }}>
              <li>Family income protection planning</li>
              <li>Coverage aligned to life stage needs</li>
              <li>Transparent policy structure guidance</li>
              <li>Ethical, need-based recommendations</li>
            </ul>
          </div>

          {/* TERM INSURANCE */}
          <div
            style={{
              background: "#fff",
              padding: "36px",
              borderRadius: "24px",
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow: "0 30px 80px rgba(198,162,77,0.18)",
            }}
          >
            <h3 style={{ fontSize: "26px" }}>Term Insurance</h3>

            <p style={{ marginTop: "16px" }}>
              Term insurance forms the foundation of financial security during
              income-generating years.
            </p>

            <ul style={{ marginTop: "16px", paddingLeft: "20px" }}>
              <li>High coverage at efficient cost</li>
              <li>Risk protection during earning years</li>
              <li>Policy duration aligned to liabilities</li>
              <li>Clear claim and benefit understanding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, rgba(232,217,168,0.18), rgba(198,162,77,0.12))",
          padding: "80px",
          borderRadius: "32px",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Our Approach</h2>

        <p style={{ maxWidth: "900px", marginTop: "20px", fontSize: "18px" }}>
          We believe strong financial decisions are built through conversation,
          not pressure. Our process is slow, deliberate, and focused on
          sustainability.
        </p>

        <p style={{ maxWidth: "900px", marginTop: "16px" }}>
          Clients work directly with us — no intermediaries, no confusion, no
          unnecessary complexity.
        </p>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>
          Take the Next Step With Confidence
        </h2>

        <p style={{ maxWidth: "720px", margin: "20px auto" }}>
          If you value clarity, structure, and responsibility in financial
          planning, we invite you to begin with a professional consultation.
        </p>

        <Link className="btn" href="/schedule">
          Schedule a Consultation
        </Link>
      </section>
    </main>
  );
}
