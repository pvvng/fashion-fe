import MainFooter from "@/components/main-footer";
import MainNavbar from "@/components/main-navbar";

export default function CommunityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-0">
      <MainNavbar />
      <div>
        {children}
        <MainFooter />
      </div>
    </div>
  );
}
