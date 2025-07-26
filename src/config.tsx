export const mode: Modes = import.meta.env.VITE_NODE_ENV

export enum Modes {
    DEV = "development",
    LOCAL = "local",
    PROD = "production"
}

export const isLocalMode = mode === Modes.LOCAL
