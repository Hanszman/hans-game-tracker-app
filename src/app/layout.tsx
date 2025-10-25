import { ClientRoot } from "@/components/ClientRoot/ClientRoot";
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
        TESTE: <ClientRoot />
        {children}
      </body>
    </html>
  );
}
