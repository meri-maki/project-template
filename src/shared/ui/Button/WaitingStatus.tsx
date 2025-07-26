import { useTranslation } from "react-i18next"
interface WaitingStatusProps {
    height?: number | "auto"
    isChecking?: boolean
    isReconnecting?: boolean
    isCreating?: boolean
    invert?: boolean
    noIcon?: boolean

    color?: string
}
export const WaitingStatus = ({
    isChecking = false,
    isReconnecting = false,
    isCreating = false,
    noIcon = false,
    height = undefined,
    invert = false,
    color
}: WaitingStatusProps) => {
    const { t } = useTranslation()
    return (
        <>
            {!noIcon && <></>}
            {t(
                isReconnecting
                    ? "reconnecting_button"
                    : isChecking
                      ? "checking_button"
                      : isCreating
                        ? "creating_button"
                        : "waiting_button"
            )}
            ...
        </>
    )
}
