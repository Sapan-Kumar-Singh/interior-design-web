"use client";

const PageHeroSkeleton = () => {
  return (
    <section
      className="
        relative
        min-h-[60vh]
        md:min-h-[70vh]
        lg:min-h-[80vh]
        overflow-hidden
        flex flex-col
        animate-pulse
        bg-neutral-300
      "
    >
      {/* Background Skeleton */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neutral-300" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Skeleton */}
      <div
        className="
          relative z-10 flex-1
          flex flex-col items-center justify-center
          text-center
          px-6
        "
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-5">
          <div className="h-4 w-20 rounded-full bg-neutral-200/80" />
          <div className="h-4 w-4 rounded-full bg-neutral-200/80" />
          <div className="h-4 w-24 rounded-full bg-neutral-200/80" />
        </div>

        {/* Title */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="h-12 w-[260px] md:w-[420px] rounded-2xl bg-neutral-200/80" />

          <div className="h-12 w-[180px] md:w-[300px] rounded-2xl bg-neutral-200/70" />
        </div>
      </div>
    </section>
  );
};

export default PageHeroSkeleton;