import CoummnityList from "@/components/community-list";

export const metadata = {
  title: "커뮤니티",
};

export type CommunityData = {
  id: number;
  image: string;
}[];

const imageMap = [
  { id: 1, image: "/test-img1.jpg" },
  { id: 2, image: "/test-img2.jpg" },
  { id: 3, image: "/test-img3.jpg" },
  { id: 4, image: "/test-img4.jpg" },
];

export default async function Community() {
  const initialData: CommunityData = [];
  [...Array(5)].forEach((_) => initialData.push(...imageMap));

  return <CoummnityList initialData={initialData} />;
}
