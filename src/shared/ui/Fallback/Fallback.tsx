interface Props {
    className?: string
    style?: React.CSSProperties
    noBack?: boolean
    width?: string
    height?: string
}

export const Fallback = ({
    className = "",
    style,
    noBack,
    width,
    height,
    ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            style={{ width: width, height: height, background: noBack ? "none" : "#ffffff19", ...style }}
            className={className}
            {...rest}
        />
    )
}
