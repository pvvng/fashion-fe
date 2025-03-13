import CoummunityFooter from "@/components/community-footer";
import CommunityNavbar from "@/components/community-navbar";

export default function CommunityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-2 gap-0">
      <CommunityNavbar />
      <div>
        {children}
        <CoummunityFooter />
      </div>
    </div>
  );
}
