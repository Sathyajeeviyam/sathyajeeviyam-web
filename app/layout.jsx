import "./globals.css";

export const metadata = {
  title: "Sathyajeeviyam – Official Website",
  description: "Luxury spiritual guidance & premium personal sessions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ================= LUXURY HEADER ================= */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backdropFilter: "blur(14px)",
            background: "rgba(5,5,5,0.75)",
            borderBottom: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "72px",
            }}
          >
            <h2 style={{ letterSpacing: "0.12em" }}>
              <span style={{ color: "#d4af37" }}>SATHYA</span>JEEVIYAM
            </h2>

            <nav style={{ display: "flex", gap: "1.4rem" }}>
              <a href="/" className="btn-outline-luxury">Home</a>
              <a href="/learn-more" className="btn-outline-luxury">Learn</a>
              <a href="/contact" className="btn-outline-luxury">Contact</a>
              <a href="/schedule" className="btn-luxury">Schedule</a>
            </nav>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main>{children}</main>

        {/* ================= LUXURY POPUP BUTTON ================= */}
        <div
          className="btn-floating-luxury"
          title="Book a Premium Session"
          onClick={() => {
            window.location.href = "/schedule";
          }}
        >
          ✦
        </div>

        {/* ================= FOOTER ================= */}
        <footer
          style={{
            marginTop: "6rem",
            padding: "3rem 1.5rem",
            textAlign: "center",
            borderTop: "1px solid rgba(212,175,55,0.2)",
            background: "linear-gradient(to top, #050505, #0b0b0b)",
          }}
        >
          <p style={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Sathyajeeviyam. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
