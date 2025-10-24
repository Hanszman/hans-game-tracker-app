import { ClientButton } from "@/components/ClientButton/ClientButton";
import "hans-ui-design-lib/style.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="combination1">
      <body>
        TESTE: <ClientButton label="Button" />
        {children}
      </body>
    </html>
  );
}
