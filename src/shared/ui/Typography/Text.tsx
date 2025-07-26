import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Typography.module.scss"

import { TypographyColor, TypographyWeight } from "./lib/typographyHelpers"
import { ReactNode } from "react"
import { a, useSpring } from "@react-spring/web"
import { SpringOpacity } from "shared/lib/springs"

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    type?: TypographyWeight
    children: ReactNode
    div?: boolean
    isAnimated?: boolean
    align?: "center" | "left" | "right"
    springs?: any
    color?: TypographyColor
    onClick?: any
}

export const Text = (props: TextProps) => {
    const {
        className,
        type = "bold",
        children,
        div = false,
        isAnimated = false,
        align = "left",
        springs,
        color = "ZINK_50",
        onClick,
        ...otherProps
    } = props

    const animation = useSpring(SpringOpacity)

    if (!div && !isAnimated)
        return (
            <h3
                className={classNames(cls.Text, { [cls[type]]: true, [cls[align]]: true, [cls[color]]: true }, [
                    className
                ])}
                onClick={onClick}
                {...otherProps}
            >
                {children}
            </h3>
        )
    if (!div && isAnimated)
        return (
            <a.h3
                className={classNames(cls.Text, { [cls[type]]: true, [cls[align]]: true, [cls[color]]: true }, [
                    className
                ])}
                onClick={onClick}
                style={{ ...(springs || animation) }}
                {...otherProps}
            >
                {children}
            </a.h3>
        )

    if (div && !isAnimated)
        return (
            <div
                className={classNames(cls.Text, { [cls[type]]: true, [cls[align]]: true, [cls[color]]: true }, [
                    className
                ])}
                onClick={onClick}
                {...otherProps}
            >
                {children}
            </div>
        )

    if (div && isAnimated)
        return (
            <a.div
                className={classNames(cls.Text, { [cls[type]]: true, [cls[align]]: true, [cls[color]]: true }, [
                    className
                ])}
                style={{ ...(springs || animation) }}
                onClick={onClick}
                {...otherProps}
            >
                {children}
            </a.div>
        )
}
