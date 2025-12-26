import Link from "next/link";

export default function SchedulePage() {
  return (
    <main className="container">

      {/* HEADER */}
      <section style={{ marginTop: "60px" }}>
        <h1
          style={{
            fontSize: "58px",
            lineHeight: "1.15",
            background: "linear-gradient(135deg, #c6a24d, #f2e7bf)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(198,162,77,0.3)",
          }}
        >
          Schedule a Professional Consultation
        </h1>

        <p
          style={{
            maxWidth: "900px",
            marginTop: "26px",
            fontSize: "18px",
            color: "#333",
          }}
        >
          Financial decisions shape the quality of life you experience today
          and the security you enjoy tomorrow. A structured consultation helps
          bring clarity, confidence, and direction.
        </p>
      </section>

      {/* PURPOSE */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, rgba(198,162,77,0.1), rgba(242,231,191,0.15))",
          padding: "80px",
          borderRadius: "32px",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>
          What to Expect From the Consultation
        </h2>

        <p style={{ maxWidth: "900px", marginTop: "20px", fontSize: "18px" }}>
          This is a focused, one-on-one discussion designed to understand your
          long-term financial priorities and provide guidance aligned with your
          life goals.
        </p>

        <ul style={{ marginTop: "28px", paddingLeft: "22px" }}>
          <li>Understanding your retirement planning needs</li>
          <li>Evaluating life and term insurance coverage</li>
          <li>Reviewing existing financial protections</li>
          <li>Identifying long-term stability opportunities</li>
          <li>Clear explanation without pressure or obligation</li>
        </ul>
      </section>

      {/* HOW TO BOOK */}
      <section className="section">
        <h2 style={{ fontSize: "44px" }}>
          How to Schedule Your Consultation
        </h2>

        <p style={{ maxWidth: "900px", marginTop: "20px", fontSize: "18px" }}>
          To maintain personalized attention and professional quality, all
          consultations are scheduled directly.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            marginTop: "44px",
          }}
        >
          {/* PHONE */}
          <div
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "26px",
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow: "0 40px 90px rgba(198,162,77,0.2)",
            }}
          >
            <h3 style={{ fontSize: "26px" }}>Call Us Directly</h3>
            <p style={{ marginTop: "16px", fontSize: "18px" }}>
              Speak with us to discuss your availability and consultation
              requirements.
            </p>

            <p
              style={{
                marginTop: "20px",
                fontSize: "22px",
                fontWeight: "600",
                color: "#b38b2d",
              }}
            >
              9894882436
            </p>
          </div>

          {/* EMAIL */}
          <div
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "26px",
              border: "1px solid rgba(198,162,77,0.35)",
              boxShadow: "0 40px 90px rgba(198,162,77,0.2)",
            }}
          >
            <h3 style={{ fontSize: "26px" }}>Email Your Request</h3>
            <p style={{ marginTop: "16px", fontSize: "18px" }}>
              Send us your preferred time and brief details about your goals.
            </p>

            <p
              style={{
                marginTop: "20px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              sathyajeeviyam@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL ASSURANCE */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, rgba(242,231,191,0.2), rgba(198,162,77,0.12))",
          padding: "90px",
          borderRadius: "36px",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Our Professional Assurance</h2>

        <p style={{ maxWidth: "920px", marginTop: "20px", fontSize: "18px" }}>
          Consultations are conducted with complete confidentiality, ethical
          responsibility, and respect for your individual circumstances.
        </p>

        <p style={{ maxWidth: "920px", marginTop: "16px" }}>
          There is no obligation to proceed with any recommendation. Our role
          is to educate, guide, and support informed decision-making.
        </p>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>
          Ready to Begin?
        </h2>

        <p style={{ maxWidth: "740px", margin: "20px auto" }}>
          Take the first step toward long-term financial clarity by reaching
          out today.
        </p>

        <Link className="btn" href="/contact">
          Contact Us
        </Link>
      </section>
    </main>
  );
}
