import { WebApp } from "telegram-webapps"

declare global {
    const Miniapp: WebApp | undefined
}

declare namespace JSX {
    interface IntrinsicElements {
        div: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement> & {
                "data-flex"?: boolean
                "data-column"?: boolean
                "data-al-c"?: boolean
                "data-rel"?: boolean
                "data-absolute"?: boolean
                "data-num"?: boolean
                "data-w100"?: boolean
                "data-j-sb"?: boolean
                "data-j-c"?: boolean
                "data-wrap"?: boolean
                "data-invert"?: boolean
                "data-bold"?: boolean
                "data-object"?: boolean
                "data-center-flex"?: boolean
            } & Partial<Record<`data-flex-${2 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 34 | 36 | 40 | 48}`, boolean>> &
                Partial<Record<`data-b-${4 | 6 | 8 | 12 | 16 | 20 | 24 | 32 | 34 | 50}`, boolean>> &
                Partial<Record<`data-column-${2 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 34 | 36 | 40 | 48}`, boolean>>,
            HTMLDivElement
        >

        img: React.DetailedHTMLProps<
            React.ImgHTMLAttributes<HTMLImageElement> & {
                "data-rel"?: boolean
                "data-absolute"?: boolean
                "data-invert"?: boolean
                "data-b-50"?: boolean
                "data-object"?: boolean
            },
            HTMLImageElement
        >

        span: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLSpanElement> & {
                "data-num"?: boolean
                "data-wrap"?: boolean
                "data-invert"?: boolean
                "data-bold"?: boolean
                "data-object"?: boolean
            },
            HTMLSpanElement
        >

        b: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLBElement> & {
                "data-num"?: boolean
                "data-wrap"?: boolean
                "data-invert"?: boolean
                "data-bold"?: boolean
                "data-object"?: boolean
            },
            HTMLBElement
        >
    }
}
