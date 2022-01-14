
module.exports = function (api) {
    api.cache(true);
    return {
        "plugins": ["@babel/syntax-dynamic-import"],
        "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
    }
}
