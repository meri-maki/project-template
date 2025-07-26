import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Error.module.scss"

import { memo, useEffect } from "react"
import { ErrorWithRetry } from "../ErrorWithRetry/ErrorWithRetry"
import { Caption } from "../Typography/Caption"

import { useTranslation } from "react-i18next"

interface HomeErrorProps {
    className?: string
    message?: string
}

export const Error = memo(({ className, message }: HomeErrorProps) => {
    const { t } = useTranslation()

    const handleRetryClick = () => {
        //navigate("/")
        try {
            document.location.pathname = "/index.html?" + Date.now()
        } catch (error) {
            window.location.reload()
        }
    }

    return (
        <section
            className={classNames(cls.HomeError, {}, [className])}
            data-center-flex
            style={{ background: `url(${""})` }}
        >
            <ErrorWithRetry handleRetry={handleRetryClick} />
            {message && typeof message === "string" && (
                <Caption data-w100 color="ZINK_400" align="center">
                    {message}
                </Caption>
            )}
        </section>
    )
})
