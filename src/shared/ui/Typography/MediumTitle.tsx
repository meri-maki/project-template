import cls from "./Typography.module.scss"
import { TypographyColor, TypographyWeight } from "./lib/typographyHelpers"
import { ReactNode } from "react"
import { a, useSpring } from "@react-spring/web"
import { SpringOpacity } from "shared/lib/springs"
import { classNames } from "shared/lib/classNames/classNames"

interface MediumTitleProps {
    className?: string
    type?: TypographyWeight
    children: ReactNode
    div?: boolean
    isAnimated?: boolean
    springs?: any
    align?: "center" | "left" | "right"
    color?: TypographyColor
}

export const MediumTitle = (props: MediumTitleProps) => {
    const {
        className,
        type = "bold",
        children,
        div = false,
        isAnimated = false,
        springs,
        align = "center",
        color = "ZINK_50",
        ...otherProps
    } = props

    const animation = useSpring(SpringOpacity)

    if (!div && !isAnimated)
        return (
            <h3
                className={classNames(cls.MediumTitle, { [cls[type]]: true, [cls[align]]: true, [cls[color]]: true }, [
                    className
                ])}
                {...otherProps}
            >
                {children}
            </h3>
        )
    if (!div && isAnimated)
        return (
            <a.h3
                className={classNames(cls.MediumTitle, { [cls[type]]: true, [cls[align]]: true, [cls[color]]: true }, [
                    className
                ])}
                style={{ ...(springs || animation) }}
                {...otherProps}
            >
                {children}
            </a.h3>
        )

    if (div && !isAnimated)
        return (
            <div
                className={classNames(cls.MediumTitle, { [cls[type]]: true, [cls[align]]: true, [cls[color]]: true }, [
                    className
                ])}
                {...otherProps}
            >
                {children}
            </div>
        )

    if (div && isAnimated)
        return (
            <a.div
                className={classNames(cls.MediumTitle, { [cls[type]]: true, [cls[align]]: true, [cls[color]]: true }, [
                    className
                ])}
                style={{ ...(springs || animation) }}
                {...otherProps}
            >
                {children}
            </a.div>
        )
}
