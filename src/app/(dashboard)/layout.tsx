import { ProtectedRoute } from "@/app/(auth)/components/protected-route";
import { AdsProvider } from "@/domains/ads-gen/context/AdsContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProtectedRoute>
        <AdsProvider>{children}</AdsProvider>
      </ProtectedRoute>
    </>
  );
}
