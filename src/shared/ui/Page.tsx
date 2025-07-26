import React, { PropsWithChildren } from "react"
import { SpringValue, a } from "@react-spring/web"

export function Page({
    children,
    back = false,
    className,
    style
}: PropsWithChildren<{
    /**
     * True if it is allowed to go back from this page.
     */
    back?: boolean
    className?: string
    style?: React.CSSProperties | { opacity: SpringValue<number> }
}>) {
    return (
        <a.section className={className ?? ""} style={style}>
            {children}
        </a.section>
    )
}
