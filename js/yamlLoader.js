async function loadConfig(specificConfigPath) {
    try {
        const response = await fetch(specificConfigPath);
        const text = await response.text();
        const configurations = jsyaml.load(text);
        //console.log(configurations.datasource);
        return configurations;
    } catch (error) {
        console.error("YAML file could not load:", error);
        return null;
    }
}

export { loadConfig };