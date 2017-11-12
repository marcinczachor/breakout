//Function that retreive DOM element by querySelector method
export default function qs(element, context) {
    return (context !== undefined) ? context.querySelector(element) : document.querySelector(element);
}