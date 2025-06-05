# YAML Page Transformer
This project provides a JavaScript-based solution for modifying the content of web pages based on configurations defined in YAML files. It allows for actions like inserting, removing, replacing, and altering HTML elements or text content.

## How to Set Up and Run the Application
- Clone/Download the repository to your local machine
- Serve the files via a local server (e.g., `Live Server` in VSCode)
- Open `index.html` in your browser.

## File and Code Structure
 ```
    YAMLPageTransformer/
    ├── index.html              # Main HTML file
    ├── main.js                 # Main JavaScript code
    │     ├── gettingTargetPage(datasource, fake) method
    │     └── applyActions(actions) method
    │     
    │
    ├── style.css
    ├── js/
    │   ├── actions.js          # Contains all action types methods
    │   │       ├── insertElement(element) method
    │   │       ├── removeElement(element) method
    │   │       ├── replaceElement(element) method
    │   │       └── alterElement(element) method
    │   │
    │   └── yamlLoader.js       # YAML Configuration Loader
    │          └── loadConfig(specificConfigPath) method
    │        
    ├── config/
    │    ├── specific_configuration.yaml  # Main configuration file
    │    ├── A.yaml     # Example action file 
    │    └── B.yaml    # Example action file 
    │
    └── README.md
 ```

## Assumptions and Limitations
- The application assumes YAML files are correctly formatted and accessible via HTTP(S) or served through a local server.
- The code assumes jQuery is loaded and available globally
- Assumes js-yaml library is available for parsing YAML files
- Priority handling between conflicting actions are applied in the order of loading. Therefore, performance problems may occur when the action is repeated.

## Dependencies
The following libraries are automatically loaded via CDN:
- jQuery v3.7.1
- js-yaml v4.1.0
