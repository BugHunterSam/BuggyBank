module.exports = {
    "roots": [
        "APITests"
    ],
    "testMatch": [
        "tests/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
}
