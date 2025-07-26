import cls from "./Button.module.scss"
import { ButtonHTMLAttributes } from "react"

import { SpringOpacity } from "shared/lib/springs"
import { a } from "@react-spring/web"
import { classNames } from "shared/lib/classNames/classNames"

export enum ButtonTheme {
    WITHICON = "wIcon",
    ONLYICON = "onlyIcon"
}
export type ButtonSize = "s" | "m" | "l"

export enum ButtonColor {
    WHITE = "white",
    BLACK = "black",
    ORANGE = "orange",
    GREEN = "green",
    BLUE = "blue",
    BLUE_RIBBON = "blue_ribbon",
    BLUE_RIBBON_100 = "blue_ribbon_100",
    VIOLET = "violet",
    VIOLET_100 = "violet_100",
    YELLOW_100 = "yellow_100",
    PICTON = "picton",
    AMARANTH_100 = "amaranth_100",
    AMARANTH_950 = "amaranth_950",
    BLACK_OUTLINE = "black_outline",
    YELLOW_BLUR = "yellow_blur",
    BLURRED = "blurred",
    BLURRED_BASE = "blurred_base",
    WHITE_10 = "white_10",
    TRANS = "trans",
    "mainstream" = "mainstream",
    "uncommon" = "uncommon",
    "rare" = "rare",
    "legendary" = "legendary",
    "mythic" = "mythic",
    "master" = "master"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    color?: ButtonColor
    size?: ButtonSize
    full?: boolean
    fit?: boolean
    success?: boolean
    isAnimated?: boolean
    springs?: any
    successText?: string
    minPadding?: boolean
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        onClick,
        theme,
        color,
        fit = false,
        size,
        full = false,
        isAnimated = false,
        minPadding = false,
        springs = SpringOpacity,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls[theme || ""]]: true,
        [cls[color || "white"]]: true,
        [cls[size || ""]]: true,
        [cls.minPadding]: minPadding,
        [cls.full]: full,
        [cls.fit]: fit
    }
    return isAnimated ? (
        <a.button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            onClick={onClick}
            style={{ ...springs }}
            {...otherProps}
        >
            {children}
        </a.button>
    ) : (
        <button type="button" className={classNames(cls.Button, mods, [className])} onClick={onClick} {...otherProps}>
            {children}
        </button>
    )
}
