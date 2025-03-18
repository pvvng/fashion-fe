export default function Loading() {
  return (
    <div className="p-5 flex flex-col gap-5 *:animate-pulse min-h-screen">
      <div className="aspect-square overflow-hidden rounded-xl bg-neutral-400"></div>
      <div className="w-48 h-8 rounded-md bg-neutral-400" />
      <div className="w-36 h-6 rounded-md bg-neutral-400" />
      <div className="flex gap-5 justify-end">
        <div className="w-12 h-6 rounded-md bg-neutral-400" />
        <div className="w-12 h-6 rounded-md bg-neutral-400" />
      </div>
    </div>
  );
}
