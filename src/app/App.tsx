import React, { lazy, Suspense, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"

import { classNames } from "shared/lib/classNames/classNames"

import { routes } from "navigation/routes"

import { config, useSpringRef, useTransition, a } from "@react-spring/web"
import AppModals from "app/AppModals"

function App() {
    const location = useLocation()
    const ref = useSpringRef()

    const transition = useTransition(location, {
        key: location,
        ref,
        from: { opacity: 0, transform: "translate3d(0, 100vh, 0)" },
        enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        leave: { opacity: 0, transform: "translate3d(0, -10vh, 0)" },
        config: { ...config.molasses, duration: 250 }
    })

    useEffect(() => {
        ref.start()
        //throw new Error("test")
    }, [ref, location])

    return (
        <div className={classNames("app", {}, [])}>
            {transition((style, item) => (
                <a.div key={item.key} style={{ ...style, top: 0, left: 0, right: 0, bottom: 0 }} data-absolute>
                    <Routes location={item}>
                        {routes.map(({ path, Component }) => (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <React.Suspense fallback={<></>}>
                                        <Component />
                                    </React.Suspense>
                                }
                            />
                        ))}
                    </Routes>
                </a.div>
            ))}

            <Suspense fallback={<></>}>
                <AppModals />
            </Suspense>
        </div>
    )
}

export default React.memo(App)
