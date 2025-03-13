import CoummnityList from "@/components/community-list";

export const metadata = {
  title: "커뮤니티",
};

const imageMap = [
  "/test-img1.jpg",
  "/test-img2.jpg",
  "/test-img3.jpg",
  "/test-img4.jpg",
];

export default async function Community() {
  const initialData: string[] = [];
  [...Array(5)].forEach((_) => initialData.push(...imageMap));

  return <CoummnityList initialData={initialData} />;
}
