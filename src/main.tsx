import ReactDOM from "react-dom/client"
import "./index.scss"
import "styles/resetNew.scss"
import "styles/helpers.scss"
import "styles/ui.scss"
import "react-tooltip/dist/react-tooltip.css"
import "swiper/css"

import { preloadAllTranslations } from "./i18n.ts"
import { Root } from "Root.tsx"

function main() {
    preloadAllTranslations().then(() => {
        ReactDOM.createRoot(document.getElementById("root")!).render(<Root />)
    })
}

main()
