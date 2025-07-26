import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Typography.module.scss"

import { TypographyWeight } from "./lib/typographyHelpers"
import { ReactNode } from "react"
import { a, useSpring } from "@react-spring/web"
import { SpringOpacity } from "shared/lib/springs"

interface LargeTitleProps {
    className?: string
    type?: TypographyWeight
    children: ReactNode
    div?: boolean
    isAnimated?: boolean
    springs?: any
    align?: "center" | "left" | "right"
}

export const LargeTitle = (props: LargeTitleProps) => {
    const {
        className,
        type = "bold",
        children,
        div = false,
        isAnimated = false,
        springs,
        align = "center",
        ...otherProps
    } = props

    const animation = useSpring(SpringOpacity)

    if (!div && !isAnimated)
        return (
            <h1
                className={classNames(cls.LargeTitle, { [cls[align]]: true, [cls[type]]: true }, [className])}
                {...otherProps}
            >
                {children}
            </h1>
        )
    if (!div && isAnimated)
        return (
            <a.h1
                className={classNames(cls.LargeTitle, { [cls[align]]: true, [cls[type]]: true }, [className])}
                style={{ ...(springs || animation) }}
                {...otherProps}
            >
                {children}
            </a.h1>
        )

    if (div && !isAnimated)
        return (
            <div
                className={classNames(cls.LargeTitle, { [cls[align]]: true, [cls[type]]: true }, [className])}
                {...otherProps}
            >
                {children}
            </div>
        )

    if (div && isAnimated)
        return (
            <a.div
                className={classNames(cls.LargeTitle, { [cls[align]]: true, [cls[type]]: true }, [className])}
                style={{ ...(springs || animation) }}
                {...otherProps}
            >
                {children}
            </a.div>
        )
}
