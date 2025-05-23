import type { Metadata } from "next";
import "./globals.css";
import "../styles/components.css";
import { ApolloProvider } from "../components/organisms/ApolloProvider";

export const metadata: Metadata = {
  title: "Weather App",
  description: "Search for weather information by location",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
