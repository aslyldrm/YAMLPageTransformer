$(document).ready(function () {
    fetch("config/actions.yaml")
        .then(response => response.text())
        .then(actions => {
            const data = jsyaml.load(actions);
            console.log(data.actions);
            applyActions(data.actions);

        })
        .catch(error => console.error(error));
    
});

function applyActions(actions) {
    actions.forEach(element => {
        switch (element.type.toLowerCase().trim()) {
            case "insert":
                insertElement(element);
                break;
            case "remove":
                removeElement(element);
                break;
            case "replace":
                replaceElement(element);
                break;
            default:
                console.warn(`Action couldn't be find`);
        }
      
    });
}

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