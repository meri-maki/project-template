import { create } from "zustand"
import { createSelectors } from "./lib/createSelectors"

interface DataState {
    someFn: () => void
}

export const useDataStoreBase = create<DataState>((set, get) => ({
    someFn: () => {
        console.log("someFn")
    }
}))

export const useMainDataStore = createSelectors(useDataStoreBase)
