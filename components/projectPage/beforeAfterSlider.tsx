import { useState } from "react";
import Image from "next/image";
import { BackwardTriangleIcon, ForwardTriangleIcon } from "../icons/customIcons";

const BeforeAfterSlider = () => {
    const [position, setPosition] = useState(50)

    return (
        <div
            className="relative w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-2xl">
            {/* AFTER IMAGE (FULL) */}
            <div className="absolute inset-0">
                <Image
                    src="/images/projects/after_transformation.jpg"
                    alt="After"
                    fill
                    className="object-cover"
                />
            </div>

            {/* BEFORE IMAGE (CLIPPED) */}
            <div
                className="absolute inset-0"
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
            >
                <Image
                    src="/images/projects/before_transformation.jpg"
                    alt="Before"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-obsidian/40" />
            </div>

            {/* DIVIDER LINE */}
            <div
                className="absolute top-0 bottom-0  w-[3px] bg-cream z-20"
                style={{ left: `${position}%` }}
            />

            {/* DRAG BUTTON */}
            <div
                className="absolute top-1/2 -translate-y-1/2 z-30  h-10 w-10 rounded-full
          bg-gold border-2 border-transparent shadow-lg
          flex items-center justify-center pointer-events-none"
                style={{ left: `calc(${position}% - 20px)` }}
            >
                <BackwardTriangleIcon size={22} className='text-cream' />
                <ForwardTriangleIcon size={22} className='text-cream' />
            </div>

            {/* LABELS */}
            <div
                className="absolute top-4 left-4 z-30  text-white px-4 py-1 rounded-full text-sm font-semibold">
                Before
            </div>

            <div className="absolute top-4 right-4 z-30  text-white px-4 py-1 rounded-full text-sm font-semibold">
                After
            </div>

            {/* RANGE INPUT */}
            <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40" />
        </div>
    )
}

export default BeforeAfterSlider;