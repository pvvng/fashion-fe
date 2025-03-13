import CoummunityFooter from "@/components/community-footer";
import CommunityNavbar from "@/components/community-navbar";

export default function CommunityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="@container grid lg:grid-cols-2 grid-cols-1 gap-0">
      <CommunityNavbar />
      <div>
        {children}
        <CoummunityFooter />
      </div>
    </div>
  );
}
