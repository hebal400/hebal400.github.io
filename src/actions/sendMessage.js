export default function sendMessage() {
    console.log('test');
    window.parent.postMessage({
        message: "requestParentOpenTab",
        link: 'https://hebal400.github.io/albatalk/#teaminfo'
    }, '*')
}