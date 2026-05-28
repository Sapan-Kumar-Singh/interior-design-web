const HeroSectionSkeleton = () => {
    return (
        <main className="overflow-x-hidden bg-neutral-400 animate-pulse">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden">
                <div
                    className="
                    px-6 sm:px-10 md:px-14 lg:px-20
                    pt-28 md:pt-32 lg:pt-40 pb-12"
                >
                    <div
                        className="
                        grid grid-cols-1
                        lg:grid-cols-[1fr_400px]
                        xl:grid-cols-[1fr_420px]
                        gap-10 lg:gap-16
                        items-center"
                    >

                        {/* LEFT CONTENT */}
                        <div className="space-y-6">

                            {/* small tag */}
                            <div className="h-5 w-32 rounded-full bg-neutral-300" />

                            {/* heading */}
                            <div className="space-y-4">
                                <div className="h-16 w-full rounded-xl bg-neutral-300" />
                                <div className="h-16 w-5/6 rounded-xl bg-neutral-300" />
                            </div>

                            {/* paragraph */}
                            <div className="space-y-3 pt-2">
                                <div className="h-5 w-full rounded bg-neutral-200" />
                                <div className="h-5 w-11/12 rounded bg-neutral-200" />
                                <div className="h-5 w-8/12 rounded bg-neutral-200" />
                            </div>

                            {/* buttons */}
                            <div className="flex flex-wrap gap-4 pt-6">
                                <div className="h-12 w-40 rounded-full bg-neutral-300" />
                                <div className="h-12 w-40 rounded-full bg-neutral-200" />
                            </div>

                        </div>

                        {/* RIGHT IMAGE / CARD */}
                        <div className="hidden lg:block">
                            <div className="h-[500px] w-full rounded-[32px] bg-neutral-300" />
                        </div>

                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="px-6 sm:px-10 md:px-14 lg:px-20 py-20">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div className="h-[450px] rounded-[32px] bg-neutral-300" />

                    <div className="space-y-5">
                        <div className="h-10 w-52 rounded bg-neutral-300" />

                        <div className="space-y-3">
                            <div className="h-5 w-full rounded bg-neutral-200" />
                            <div className="h-5 w-full rounded bg-neutral-200" />
                            <div className="h-5 w-10/12 rounded bg-neutral-200" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="h-24 rounded-2xl bg-neutral-300" />
                            <div className="h-24 rounded-2xl bg-neutral-300" />
                        </div>
                    </div>

                </div>
            </section>

            {/* SERVICES */}
            <section className="px-6 sm:px-10 md:px-14 lg:px-20 py-20">
                <div className="space-y-4 mb-10">
                    <div className="h-10 w-64 rounded bg-neutral-300" />
                    <div className="h-5 w-96 rounded bg-neutral-200" />
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="rounded-[32px] overflow-hidden bg-white"
                        >
                            <div className="h-[240px] bg-neutral-300" />

                            <div className="p-6 space-y-4">
                                <div className="h-6 w-40 rounded bg-neutral-300" />

                                <div className="space-y-2">
                                    <div className="h-4 w-full rounded bg-neutral-200" />
                                    <div className="h-4 w-5/6 rounded bg-neutral-200" />
                                </div>

                                <div className="h-10 w-32 rounded-full bg-neutral-300" />
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* PROJECTS */}
            <section className="px-6 sm:px-10 md:px-14 lg:px-20 py-20">
                <div className="space-y-4 mb-10">
                    <div className="h-10 w-72 rounded bg-neutral-300" />
                    <div className="h-5 w-80 rounded bg-neutral-200" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {[1, 2].map((item) => (
                        <div
                            key={item}
                            className="overflow-hidden rounded-[32px]"
                        >
                            <div className="h-[400px] bg-neutral-300" />

                            <div className="space-y-3 pt-5">
                                <div className="h-6 w-48 rounded bg-neutral-300" />
                                <div className="h-4 w-3/4 rounded bg-neutral-200" />
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </main>
    )
}

export default HeroSectionSkeleton