import "./globals.css";

export const metadata = {
  title: "Sathyajeeviyam",
  description: "Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
