import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Sathyajeeviyam",
  description: "Financial & Insurance Advisory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="nav">
            <div className="brand">SATHYAJEEVIYAM</div>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/learn-more">Learn More</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/schedule">Schedule</Link>
            </div>
          </div>
        </header>

        {children}

        <footer>
          <h3>SATHYAJEEVIYAM</h3>
          <p>
            Professional financial guidance focused on retirement planning,
            life insurance, and long-term wealth protection.
          </p>
        </footer>
      </body>
    </html>
  );
}
