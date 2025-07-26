// svgo.config.js

let prefixCounter = 0
export default {
    multipass: true,
    plugins: [
        "removeXMLNS",
        {
            name: "prefixIds",
            params: {
                delim: "",
                prefix: () => prefixCounter++
            }
        }
    ]
}
