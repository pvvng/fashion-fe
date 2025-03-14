export default function Loading() {
  return (
    <div className="p-5 flex flex-col gap-5 *:animate-pulse">
      <div className="aspect-square overflow-hidden rounded-xl bg-neutral-400"></div>
      <div className="w-48 h-8 rounded-md bg-neutral-400" />
      <div className="w-36 h-6 rounded-md bg-neutral-400" />
      <div className="flex gap-5 justify-end">
        <div className="w-12 h-6 rounded-md bg-neutral-400" />
        <div className="w-12 h-6 rounded-md bg-neutral-400" />
      </div>
      {[...Array(5)].map((_, i) => (
        <LoadingComment key={i} />
      ))}
    </div>
  );
}

function LoadingComment() {
  return (
    <>
      <div className="border-b border-neutral-200" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <div className="flex gap-2 items-center">
            {/* user-profile-image */}
            <div className="size-10 rounded-full bg-neutral-400" />
            <div className="rounded-md bg-neutral-400 w-16 h-5" />
          </div>
        </div>
      </div>
      <div className="w-36 h-6 rounded-md bg-neutral-400" />
      <div className="flex gap-5 justify-end">
        <div className="w-12 h-6 rounded-md bg-neutral-400" />
      </div>
    </>
  );
}
