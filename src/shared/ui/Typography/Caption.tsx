import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Typography.module.scss"
import { TypographyColor, TypographyWeight } from "./lib/typographyHelpers"
import { HTMLAttributes, ReactNode } from "react"
import { a, useSpring } from "@react-spring/web"
import { SpringOpacity } from "shared/lib/springs"

interface CaptionProps {
    className?: string
    type?: TypographyWeight
    children: ReactNode
    div?: boolean
    center?: boolean
    isAnimated?: boolean
    align?: "center" | "left" | "right"
    springs?: any
    color?: TypographyColor
    style?: any
    onClick?: any
}

export const Caption = (props: CaptionProps) => {
    const {
        className,
        type = "regular",
        children,
        div = false,
        isAnimated = false,
        center = false,
        align = "left",
        springs,
        color = "ZINK_50",
        onClick,
        ...otherProps
    } = props

    const animation = useSpring(SpringOpacity)

    if (!div && !isAnimated)
        return (
            <h5
                className={classNames(
                    cls.Caption,
                    { [cls[type]]: true, [cls.center]: center, [cls[align]]: true, [cls[color]]: true },
                    [className]
                )}
                {...otherProps}
            >
                {children}
            </h5>
        )
    if (!div && isAnimated)
        return (
            <a.h5
                className={classNames(
                    cls.Caption,
                    { [cls[type]]: true, [cls.center]: center, [cls[align]]: true, [cls[color]]: true },
                    [className]
                )}
                style={{ ...(springs || animation) }}
                {...otherProps}
            >
                {children}
            </a.h5>
        )

    if (div && !isAnimated)
        return (
            <div
                className={classNames(
                    cls.Caption,
                    { [cls[type]]: true, [cls.center]: center, [cls[align]]: true, [cls[color]]: true },
                    [className]
                )}
                onClick={onClick}
                {...otherProps}
            >
                {children}
            </div>
        )

    if (div && isAnimated)
        return (
            <a.div
                className={classNames(
                    cls.Caption,
                    { [cls[type]]: true, [cls.center]: center, [cls[align]]: true, [cls[color]]: true },
                    [className]
                )}
                style={{ ...(springs || animation) }}
                onClick={onClick}
                {...otherProps}
            >
                {children}
            </a.div>
        )
}
