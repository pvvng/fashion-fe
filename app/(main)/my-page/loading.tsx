export default function Loading() {
  return (
    <div className="@container p-5 flex flex-col gap-5 *:animate-pulse">
      <div className="mx-auto size-52 rounded-full bg-neutral-400" />
      <div className="p-5 rounded-md bg-neutral-400 h-48" />
      <div className="p-5 rounded-md bg-neutral-400 @xs:h-20 h-48" />
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex justify-between items-center p-3">
          <div className="flex gap-3 items-center">
            <div className="size-5 rounded-full bg-neutral-400" />
            <div className="w-20 h-5 bg-neutral-400 rounded-md" />
          </div>
          <div className="size-5 rounded-full bg-neutral-400" />
        </div>
      ))}
    </div>
  );
}
