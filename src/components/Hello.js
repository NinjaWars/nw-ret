"use strict";
// From: https://github.com/Microsoft/TypeScript-React-Starter
exports.__esModule = true;
var React = require("react");
require("./css/Hello.css");
function Hello(_a) {
    var name = _a.name, _b = _a.enthusiasmLevel, enthusiasmLevel = _b === void 0 ? 1 : _b;
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    return (<div className="hello">
			<div className="greeting">
				Hello {name + getExclamationMarks(enthusiasmLevel)}
			</div>
		</div>);
}
exports["default"] = Hello;
// helpers
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
