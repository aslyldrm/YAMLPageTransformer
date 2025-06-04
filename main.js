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
        switch (element.type) {
            case "insert":
                insertElement(element);
                break;
            default:
                console.warn(`Action couldn't find`);
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