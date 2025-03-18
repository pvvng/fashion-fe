export default function Loading() {
  return <div className="min-h-screen" />;
}

export function StoreMapLoading() {
  return (
    <div className="animate-pulse">
      <div className="aspect-video bg-neutral-400 rounded-2xl" />
      <div className="flex flex-col gap-5 pt-5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="bg-neutral-400 w-20 h-5 rounded-md" />
              <div className="bg-neutral-400 w-40 h-5 rounded-md" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-neutral-400 w-40 h-5 rounded-md" />
              <div className="bg-neutral-400 w-24 h-5 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
