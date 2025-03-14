export default function Loading() {
  return (
    <div className="py-3 pr-3">
      <div className="w-full grid sm:grid-cols-2 gap-3 *:animate-pulse">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="relative w-full aspect-square rounded-xl 
          overflow-hidden mx-auto bg-neutral-400"
          />
        ))}
      </div>
    </div>
  );
}
