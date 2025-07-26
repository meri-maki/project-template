import { lazy, memo, Suspense } from "react"

const AppModals = memo(() => {
    return <Suspense fallback={<></>}></Suspense>
})

export default AppModals
