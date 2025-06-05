function insertElement(element) {
    const $target = $(element.target);
    if ($target.length === 0) {
        console.warn('Target element not found:', element.target);
        return;
    }

    switch (element.position) {
        case "before":
            $target.before(element.element);
            break;
        case "after":
            $target.after(element.element);
            break;
        case "prepend":
            $target.prepend(element.element);
            break;
        case "append":
            $target.append(element.element);
            break;
        default:
            console.warn(`Unknown position: ${element.position}`);
    }


}

function removeElement(element) {
    const $selector = $(element.selector);
    if ($selector.length === 0) {
        console.warn('Element to remove not found:', element.selector);
        return;
    }
    $selector.remove();
}

function replaceElement(element) {
    const $selector = $(element.selector);
    if ($selector.length === 0) {
        console.warn('Element to replace not found:', element.selector);
        return;
    }
    const $newElement = $(element.newElement);
    $selector.replaceWith($newElement);
    if ($newElement.length === 0) {
        console.warn('New element to replace with is empty:', element.newElement);
        return;
    }
}

function alterElement(element) {
    const oldText = element.oldValue;
    const newText = element.newValue;

    if (oldText.length === 0) {
        console.warn('Element to alter not found');
        return;
    }
 
    if (newText.length === 0) {
        console.warn('New value to alter is empty');
        return;
    }
    const html = $("body").html();
    const newHtml = html.replace(new RegExp(oldText, 'g'), newText);
    $("body").html(newHtml);
 

}

export { removeElement, insertElement, replaceElement, alterElement };