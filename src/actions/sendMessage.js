export default function sendMessage() {
    window.parent.postMessage({
        message: "requestParentOpenTab",
        link: 'https://albatalk.github.io/#team'
    }, '*')
}