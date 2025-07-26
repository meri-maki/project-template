import { HomePage } from "pages/HomePage"

export enum RouteLocations {
    DEV = "/dev",
    HOME = "/",
    ALL = "*"
}

interface Route {
    path: string
    Component: React.LazyExoticComponent<React.ComponentType<any>> | React.MemoExoticComponent<React.ComponentType<any>>

    title?: string
    icon?: JSX.Element
}

export const routes: Route[] = [
    { path: RouteLocations.HOME, Component: HomePage },

    { path: RouteLocations.ALL, Component: HomePage }
]

// Dev route conditionally based on the mode
/* if (mode !== Modes.PROD) {
    routes.unshift({
        path: RouteLocations.DEV,
        Component: DevPage,
        title: "Dev"
    })
} */

// fallback route to handle unknown paths
/* routes.push({
    path: "*",
    Component: Home,
    title: "Home"
}) */
