import { mode, Modes } from "config"

export const numberWithSpaces = (x?: number): string => {
    if (x === undefined) return "1"

    let formattedNumber: string

    if (x < 10) {
        if (x % 1 !== 0) {
            formattedNumber = x.toFixed(1)
        } else {
            formattedNumber = x.toFixed(0)
        }
    } else {
        formattedNumber = x.toFixed(0)
    }

    return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const numberWithSpacesPercent = (x: number): string => {
    // Truncate to two decimal places without rounding
    const truncated = Math.floor(x * 100) / 100

    // Create an instance of Intl.NumberFormat for formatting with space as thousand separator
    const formatter = new Intl.NumberFormat("fr-FR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    })

    // Format the truncated number
    let formattedNumber = formatter.format(truncated)

    // Replace comma with dot for decimal separator if necessary
    if (x % 1 !== 0) {
        const parts = formattedNumber.split(",")
        if (parts[1] && parts[1].length > 1 && parts[1].endsWith("0")) {
            parts[1] = parts[1].slice(0, -1) // Remove the last character if it's a zero
        }
        formattedNumber = parts.join(".")
    }

    return formattedNumber
}

function formatUnit(value, unit, decimals) {
    const multiplier = Math.pow(10, decimals)
    const flooredValue = Math.floor(value * multiplier) / multiplier
    if (flooredValue % 1 === 0) {
        return flooredValue.toString().split(".")[0] + unit
    } else {
        return flooredValue.toString() + unit
    }
}

export function formatNumberK(number) {
    if (!number) return number

    const absNum = Math.abs(number)
    const sign = number < 0 ? "-" : ""

    if (absNum >= 1e18) {
        // Quintillion
        const value = absNum / 1e18
        return sign + formatUnit(value, "Qi", 4)
    } else if (absNum >= 1e15) {
        // Quadrillion
        const value = absNum / 1e15
        return sign + formatUnit(value, "Q", 3)
    } else if (absNum >= 1e12) {
        // Trillion
        const value = absNum / 1e12
        return sign + formatUnit(value, "T", 2)
    } else if (absNum >= 1e9) {
        // Billion
        const value = absNum / 1e9
        return sign + formatUnit(value, "B", 1)
    } else if (absNum >= 1e8) {
        // Hundreds of Millions
        const millions = Math.floor(absNum / 1e6)
        const formattedMillions = millions.toLocaleString("en").replace(/,/g, " ")
        return sign + formattedMillions + "M"
    } else if (absNum >= 1e6) {
        // Millions
        const value = absNum / 1e6
        return sign + formatUnit(value, "M", 1)
    } else if (absNum >= 1e3) {
        // Thousands
        const value = absNum / 1e3
        return sign + formatUnit(value, "K", 1)
    } else {
        // <1000
        let formattedNumber
        if (absNum > 0 && absNum < 0.00001) {
            formattedNumber = "0.00001"
        } else {
            // number with up to 5 decimal
            formattedNumber = number?.toFixed(5).replace(/\.?0+$/, "")
        }
        return sign + formattedNumber
    }
}

export function formatNumberKMM(number) {
    const absNum = Math.abs(number)
    const sign = number < 0 ? "-" : ""
    if (absNum >= 1e12) {
        // Trillion
        const value = absNum / 1e12
        return sign + formatUnit(value, "T", 2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    } else if (absNum >= 1e9) {
        // Billion
        const value = absNum / 1e9
        return sign + formatUnit(value, "B", 1).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    } else if (absNum >= 1e8) {
        // Hundreds of Millions
        const millions = Math.floor(absNum / 1e6)
        const formattedMillions = millions.toLocaleString("en").replace(/,/g, " ")
        return sign + formattedMillions + "M"
    } else if (absNum >= 1e6) {
        // Millions
        const value = absNum / 1e6
        return sign + formatUnit(value, "M", 1)
    } else if (absNum >= 1e3) {
        // Thousands
        const value = absNum / 1e3
        return sign + formatUnit(value, "K", 1)
    } else {
        // <1000
        let formattedNumber
        if (absNum > 0 && absNum < 0.00001) {
            formattedNumber = "0.00001"
        } else {
            // number with up to 5 decimal
            formattedNumber = number?.toFixed(5).replace(/\.?0+$/, "")
        }
        return sign + formattedNumber
    }
}

export const cropString = (inputString: string): string => {
    if (inputString?.length > 10) {
        return inputString.slice(0, 18) + "..."
    }
    return inputString
}

export const fallbackCopyTextToClipboard = (text: string): boolean => {
    const textArea = document.createElement("textarea")
    textArea.value = text

    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
        const successful = document.execCommand("copy")
        const msg = successful ? "successful" : "unsuccessful"
        safeLog(`Fallback: Copying text command was ${msg}`)
        if (successful) {
            return true
        }
    } catch (err) {
        console.error("Fallback: Oops, unable to copy", err)
    } finally {
        document.body.removeChild(textArea)
    }

    return false
}

export const safeLog = (...args) => {
    if (mode !== Modes.PROD) {
        console.log(...args)
    }
}

export const trimQuestionMark = (str: string): string => {
    if (typeof str !== "string") {
        return ""
    }

    return str.replace(/\?/g, "")
}

export const getPluralKey = (baseKey: string, count: number | undefined): string => {
    if (!count) return `${baseKey}_0`

    const lastDigit = count % 10
    const lastTwoDigits = count % 100

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${baseKey}_0`
    }
    if (lastDigit === 1) {
        return `${baseKey}_1`
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return `${baseKey}_2`
    }
    return `${baseKey}_0`
}
