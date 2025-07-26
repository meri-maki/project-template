import React, { ReactNode, Suspense } from "react"
import { safeLog } from "shared/lib/helpers"
import { Error } from "shared/ui/Error/Error"
interface ErrorBoundaryState {
    hasError: boolean
    errorMessage: string
}

interface ErrorBoundaryProps {
    children: ReactNode
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, errorMessage: "" }
    }

    static getDerivedStateFromError(error: Error) {
        safeLog(error)

        return { hasError: true, errorMessage: error?.message }
    }

    componentDidCatch(error, errorInfo) {
        safeLog(error, errorInfo)
    }

    render() {
        const { hasError, errorMessage } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <Suspense fallback="">
                    <Error message={errorMessage} />
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary
