import { removeElement, insertElement, replaceElement, alterElement } from './js/actions.js';
import { loadConfig } from './js/yamlLoader.js';

$(document).ready(async function () {
    const config = await loadConfig("config/specific_configuration.yaml");
    gettingTargetPage(config.datasource, "pages");
});

function gettingTargetPage(datasource, fake) {

    if (datasource[fake]) {
        const actions = datasource[fake];
        for (const [key, value] of Object.entries(actions)) {
            
            if (Array.isArray(value)) {
                for (const yamlFile of value) {
                    loadConfig("config/"+yamlFile)
                        .then(config => {
                            if (config && config.actions) {
                                applyActions(config.actions);
                            } else {
                                console.warn("No actions found in YAML:", yamlFile);
                            }
                        })
                        .catch(error => {
                            console.error("Error loading YAML file:", yamlFile, error);
                        });
                }
            } else {
                loadConfig("config/"+value)
                    .then(config => {
                        if (config && config.actions) {
                            applyActions(config.actions);
                        } else {
                            console.warn("No actions found in YAML:", value);
                        }
                    })
                    .catch(error => {
                        console.error("Error loading YAML file:", value, error);
                    });
            }
        }

    }
}

function applyActions(actions) {
    const grouped_actions = {
        remove: [],
        replace: [],
        insert: [],
        alter: []
    };

    actions.forEach(action => {
        const type = action.type.toLowerCase().trim();
        if (grouped_actions[type]) {
            grouped_actions[type].push(action);
        } else {
            console.warn("Unknown action type:", type);
        }
    });

    grouped_actions.remove.forEach(removeElement);
    grouped_actions.replace.forEach(replaceElement);
    grouped_actions.insert.forEach(insertElement);
    grouped_actions.alter.forEach(alterElement);
}

