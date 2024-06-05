export default function AnimeCardSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`my-order-list-${i}-shimmer`}
          className="flex flex-col bg-primary rounded-xl shadow-lg overflow-hidden animate-shimmer"
        >
          <div className="flex flex-col items-center gap-6 text-sm">
            <div className="h-[180px] w-full bg-[#212121] animate-pulse"></div>
            <div className="h-[24px] w-4/5 mb-6 rounded-full bg-[#212121] animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
