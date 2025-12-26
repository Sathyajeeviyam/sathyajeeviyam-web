import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="container">

      {/* HEADER */}
      <section style={{ marginTop: "50px" }}>
        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.2",
            background: "linear-gradient(135deg, #c6a24d, #e8d9a8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 28px rgba(198,162,77,0.25)",
          }}
        >
          Get In Touch With Sathyajeeviyam
        </h1>

        <p
          style={{
            maxWidth: "850px",
            marginTop: "24px",
            fontSize: "18px",
            color: "#333",
          }}
        >
          Whether you are beginning your financial journey or reassessing
          long-term security decisions, direct communication is the first step
          toward clarity and confidence.
        </p>
      </section>

      {/* WHY CONTACT */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, rgba(198,162,77,0.08), rgba(232,217,168,0.12))",
          padding: "70px",
          borderRadius: "30px",
        }}
      >
        <h2 style={{ fontSize: "40px" }}>Why Reach Out to Us?</h2>

        <p style={{ maxWidth: "900px", marginTop: "20px", fontSize: "18px" }}>
          Financial planning is deeply personal. Every individual’s income,
          responsibilities, and future goals differ. We encourage meaningful
          conversations — not rushed decisions.
        </p>

        <ul style={{ marginTop: "24px", paddingLeft: "22px" }}>
          <li>Clarify retirement and long-term income planning</li>
          <li>Understand life and term insurance coverage needs</li>
          <li>Review existing policies with professional insight</li>
          <li>Make informed, pressure-free decisions</li>
        </ul>
      </section>

      {/* CONTACT DETAILS */}
      <section className="section">
        <h2 style={{ fontSize: "42px" }}>Direct Contact Information</h2>

        <p style={{ maxWidth: "850px", marginTop: "20px", fontSize: "18px" }}>
          We value personal interaction and transparency. You may contact us
          directly using the details below.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            marginTop: "40px",
          }}
        >
          {/* PHONE */}
          <div
            style={{
              background: "#fff",
              padding: "36px",
              borderRadius: "24px",
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow: "0 30px 80px rgba(198,162,77,0.18)",
            }}
          >
            <h3 style={{ fontSize: "24px" }}>Phone</h3>
            <p style={{ marginTop: "14px", fontSize: "18px" }}>
              Speak directly with us for guidance and consultation scheduling.
            </p>
            <p
              style={{
                marginTop: "18px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              9894882436
            </p>
          </div>

          {/* EMAIL */}
          <div
            style={{
              background: "#fff",
              padding: "36px",
              borderRadius: "24px",
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow: "0 30px 80px rgba(198,162,77,0.18)",
            }}
          >
            <h3 style={{ fontSize: "24px" }}>Email</h3>
            <p style={{ marginTop: "14px", fontSize: "18px" }}>
              Reach out via email for detailed queries or document sharing.
            </p>
            <p
              style={{
                marginTop: "18px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              sathyajeeviyam@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL NOTE */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, rgba(232,217,168,0.18), rgba(198,162,77,0.12))",
          padding: "80px",
          borderRadius: "32px",
        }}
      >
        <h2 style={{ fontSize: "40px" }}>Our Commitment</h2>

        <p style={{ maxWidth: "900px", marginTop: "20px", fontSize: "18px" }}>
          Every interaction with Sathyajeeviyam is grounded in integrity,
          confidentiality, and responsibility. We do not promote unnecessary
          products or rushed commitments.
        </p>

        <p style={{ maxWidth: "900px", marginTop: "16px" }}>
          Our objective is simple: help individuals build stable, reliable
          financial protection that stands strong over time.
        </p>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>
          Prefer a Guided Discussion?
        </h2>

        <p style={{ maxWidth: "720px", margin: "20px auto" }}>
          If you would like a structured conversation focused on your goals, we
          invite you to schedule a professional consultation.
        </p>

        <Link className="btn" href="/schedule">
          Schedule a Consultation
        </Link>
      </section>
    </main>
  );
}
