$(document).ready(function () {
    fetch("config/actions.yaml")
        .then(response => response.text())
        .then(actions => {
            const data = jsyaml.load(actions);
            console.log(data);
        })
        .catch(error => console.error('Error loading actions:', error));


});