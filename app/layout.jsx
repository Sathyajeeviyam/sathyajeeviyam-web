import "./globals.css";

export const metadata = {
  title: "Sathyajeeviyam – Official Website",
  description:
    "Sathyajeeviyam Official Website — Luxury spiritual guidance & premium sessions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="luxury-root">
          <div className="golden-glow-top"></div>

          <main className="luxury-container">
            {children}
          </main>

          <div className="golden-glow-bottom"></div>
        </div>
      </body>
    </html>
  );
}
