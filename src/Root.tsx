import App from "app/App"
import ErrorBoundary from "app/providers/ErrorBoundary"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

/* try {
    if (mode !== Modes.LOCAL) {
        initAnalytics(initData?.user()?.id)
    }
} catch (error) {
    console.error("error in posthog init")
} */
export const Root = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Suspense fallback={<></>}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    )
}
