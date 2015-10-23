#### This file contains the project structure

|-- lottoApp
    |-- .gitignore
    |-- .jsbeautifyrc
    |-- README.md
    |-- package.json
    |-- app
    |   |-- server.js
    |   |-- bin
    |   |   |-- init
    |   |-- config
    |   |   |-- config.js
    |   |   |-- db.js
    |   |   |-- storage.js
    |   |   |-- xray.js
    |   |-- helpers
    |   |   |-- globalHelper.js
    |   |   |-- preHelpers.js
    |   |   |-- schemaHelper.js
    |   |-- instances
    |   |   |-- bono.js
    |   |   |-- bonoWinner.js
    |   |   |-- euro.js
    |   |   |-- euroWinner.js
    |   |   |-- primi.js
    |   |   |-- primiWinner.js
    |   |-- lottoXray
    |   |   |-- bonoWinnerXray.js
    |   |   |-- bonoXray.js
    |   |   |-- euroWinnerXray.js
    |   |   |-- euroXray.js
    |   |   |-- primiWinnerXray.js
    |   |   |-- primiXray.js
    |   |-- model
    |       |-- lottoSchema.js
    |       |-- winnerSchema.js
    |-- docs
    |   |-- api.md
    |   |-- lottoApp.js
    |   |-- structure.md
    |-- test
        |-- configSpec.js
        |-- globalHelperSpec.js
        |-- helperOfHelperSpec.js
        |-- mocha.opts
        |-- sampleData.js
        |-- schemaHelperSpec.js
        |-- schemaSpec.js
