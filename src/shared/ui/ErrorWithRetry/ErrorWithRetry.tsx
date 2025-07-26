import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ErrorWithRetry.module.scss"
import { Button } from "shared/ui/Button/Button"

import { Trans, useTranslation } from "react-i18next"
import { Icon } from "../Icon"
//import { analytics } from "shared/lib/analytics/posthog"
import { MediumTitle } from "../Typography/MediumTitle"
import { Text } from "../Typography/Text"

interface ErrorWithRetryProps {
    className?: string
    handleRetry?: () => void
    hasPlay?: boolean
}

export const ErrorWithRetry = ({ className, handleRetry, hasPlay = false }: ErrorWithRetryProps) => {
    const { t } = useTranslation()

    return (
        <div data-column-16 data-w100 data-center-flex className={classNames(cls.ErrorWithRetry, {}, [className])}>
            <div data-column-8 data-w100>
                <MediumTitle>
                    <Trans i18nKey="home_error_text">Uh-oh! We couldn't load the data.</Trans>
                </MediumTitle>

                <Text color="WHITE-60" align="center" type="regular">
                    {t("home_error_text_2")}
                </Text>
            </div>
            <div data-column-8 data-w100>
                {handleRetry && (
                    <Button size="l" onClick={handleRetry}>
                        <span>{t("try_again")}</span>
                    </Button>
                )}
            </div>
        </div>
    )
}
