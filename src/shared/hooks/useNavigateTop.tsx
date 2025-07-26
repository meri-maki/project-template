import { NavigateOptions, useNavigate } from "react-router-dom"

export const useNavigateToTop = () => {
    const navigate = useNavigate()

    const navigateAndReset = (to, options: NavigateOptions = { state: {} }) => {
        navigate(to, options)
        /* window.scrollTo({
            top: 0,
            behavior: "smooth"
        }) */
    }

    return navigateAndReset
}
