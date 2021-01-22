module.exports = {
    roots: ["<rootDir>"],
    transform: { "^.+\\.tsx?$": "babel-jest" },
    testPathIgnorePatterns: [
        "<rootDir>/.next/",
        "<rootDir>/node_modules/"
    ],
    moduleFileExtensions: [
        "ts", "tsx", "js", "jsx", "json", "node"
    ],
    presets: ["@babel/preset-env", "@babel/preset-react"],
    testMatch: ["**/tests/**/*.(test|spec).(ts|tsx|js)"],
    setupFiles: ['./jest.setup.js'],
}