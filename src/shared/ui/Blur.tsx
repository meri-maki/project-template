import { classNames } from "shared/lib/classNames/classNames"
import { useSpring, a } from "@react-spring/web"
import { SpringOpacity } from "shared/lib/springs"
interface BlurProps {
    className?: string
    color: string
}
export enum BlurColor {
    PURPLE = "#332E81",
    ORANGE = "#7A330D",
    RED = "#88132D",
    GREEN = "#14532B",
    GREY = "#134E49",
    BLUEVIOLET = "#1E1B4B",
    BLUEVIOLET800 = "#3730A3",
    BLUERIBBON = "rgb(30, 64, 138)",
    PICTON800 = "rgba(0, 90, 141, 1)",
    ZINK600 = "#52525B",
    REDVIOLET900 = "#7C1F5F",
    VIOLET400 = "#B48BFA"
}

export const Blur = ({ className, color }: BlurProps) => {
    const springs = useSpring({ ...SpringOpacity, delay: 200 })

    return (
        <a.div
            data-blur
            className={classNames("blur", {}, [className])}
            style={{
                width: "200px",
                height: "200px",
                backgroundColor: color,
                borderRadius: "50%",
                filter: "blur(70px)",
                top: "-100px",
                transition: "background-color 0.2s linear",
                ...springs
            }}
        ></a.div>
    )
}

export const BlurElipse = ({ className, color }: BlurProps) => {
    return (
        <svg
            data-blur
            width="473"
            height="299"
            viewBox="0 0 473 299"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("blur", {}, [className])}
        >
            <g filter="url(#filter0_f_4458_17503)">
                <ellipse cx="236.456" cy="41.205" rx="56" ry="200" transform="rotate(40 236.456 41.205)" fill={color} />
            </g>
            <defs>
                <filter
                    id="filter0_f_4458_17503"
                    x="0.893555"
                    y="-216.211"
                    width="471.126"
                    height="514.832"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_4458_17503" />
                </filter>
            </defs>
        </svg>
    )
}
