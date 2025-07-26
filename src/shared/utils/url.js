export function webpFallback(imageUrl) {
    if (!imageUrl || !imageUrl.match(/(\.webp)/gi)) {
        return imageUrl
    }

    let match = window.navigator.userAgent.match(/(iPhone|iPad).* OS ([0-9]+)/)

    if (match && match.length == 3 && match[2] < 14) {
        const fallbackUrl = new URL("https://tooncoin-png.photo-cdn.net")
        const url = new URL(imageUrl)
        url.protocol = fallbackUrl.protocol
        url.host = fallbackUrl.host
        url.pathname = url.pathname.replace(/\.webp$/i, ".png")

        return url.toString()
    }

    return imageUrl
}
