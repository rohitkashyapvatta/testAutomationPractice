module.exports = require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require',
        'features/step-definitions',
        '--format',
        'json:reports/cucumber.json',
        'features'
    ]
});
module.exports = {
    
        "src_folders" :["features/step-definitions"],
        "output_folder" : "./reports",
        "custom_commands_path" : "",
        "custom_assertions_path" : "",
        "page_objects_path" :'./page-objects',
        "globals_path" : "",
      
        "selenium" : {
          "start_process" : false,
          "server_path" : "bin/selenium-server-standalone-3.13.0.jar",
          "log_path" : "",
          "port" : 4444,
          "cli_args" : {
            "webdriver.chrome.driver" : "./bin/chromedriver.exe",
            "webdriver.gecko.driver" : "",
            "webdriver.edge.driver" : ""
          }
        },
      
        "test_settings" : {
          "default" : {
            "selenium_port"  : 4444,
            "selenium_host"  : "localhost",
            "silent": true,
            "screenshots" : {
              "enabled" : false,
              "path" : ""
            },
            "desiredCapabilities" : {
                "browserName" : "chrome",
                "javascriptEnabled" : true,
                "acceptSslCerts" : true,
                "chromeOptions" : {
                  "args" : ["start-fullscreen"]
                }
              }
          },
        }
};


