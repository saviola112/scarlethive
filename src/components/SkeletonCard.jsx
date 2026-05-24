function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-72 rounded-[30px]"></div>

      <div className="mt-5 space-y-3">
        <div className="bg-gray-200 h-6 rounded w-3/4"></div>

        <div className="bg-gray-200 h-4 rounded"></div>

        <div className="bg-gray-200 h-4 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
