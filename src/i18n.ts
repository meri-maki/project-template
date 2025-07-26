/* eslint-disable no-undef */

import { initReactI18next } from "react-i18next"
import Backend from "i18next-chained-backend"
//import LocizeBackend from "i18next-locize-backend"
import { isLocalMode, mode, Modes } from "config"
import resourcesToBackend from "i18next-resources-to-backend"
import i18n from "i18next"

export const languages = ["en", "ru"] as const
export const namespaces = ["translation"] as const

export const preloadAllTranslations = async () => {
    const loadingPromises = languages.flatMap((lng) =>
        namespaces.map((ns) =>
            import(`./locales/${lng}/${ns}.json`).then(({ default: resources }) => {
                return i18n.addResourceBundle(lng, ns, resources, true, true)
            })
        )
    )

    await Promise.all(loadingPromises)
    console.log("All translations loaded")
}
i18n.use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: isLocalMode ? "en" : "en",
        debug: mode !== Modes.PROD,
        interpolation: {
            escapeValue: false
        },
        saveMissing: mode !== Modes.PROD,
        backend: {
            backends: [resourcesToBackend((lng, ns) => import(`./locales/${lng}/${ns}.json`))]
        }
    })

export default i18n
