
// import Footer from "@/domains/external/components/footer";

import { ProtectedRoute } from "@/app/(auth)/components/protected-route";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <ProtectedRoute>
    {children}
  </ProtectedRoute>
  </>;
}
