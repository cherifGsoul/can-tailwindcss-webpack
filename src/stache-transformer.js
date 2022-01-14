const path = require('path');
const stache = require('can-stache');
var mustacheCore = require( "can-stache/src/mustache_core" );
var parse = require("can-stache-ast").parse;
const { transform } = require("@babel/core");
require('can-view-import');
require('can-stache-bindings');


module.exports = {
    process(src, filename, config, options) {
        var ast = parse(filename, src);
        var intermediate = JSON.stringify(ast.intermediate);
        return 'module.exports = ' + JSON.stringify(stache(filename, intermediate)) + ';';
    },
};