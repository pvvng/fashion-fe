export default function Loading() {
  return null;
}

export function MapLoading() {
  return <div className="aspect-video bg-neutral-400 rounded-2xl" />;
}

export function PostLoading() {
  return (
    <div className="flex flex-col gap-5 py-5 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-3 items-center">
          <div className="size-28 rounded-xl bg-neutral-400" />
          <div className="flex flex-col gap-1">
            <div className="bg-neutral-400 w-28 h-5 rounded-md" />
            <div className="bg-neutral-400 w-20 h-5 rounded-md" />
            <div className="bg-neutral-400 w-10 h-5 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
