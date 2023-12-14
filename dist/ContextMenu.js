"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnClickOutside = exports["default"] = void 0;
var _react = require("react");
var useOnClickOutside = exports.useOnClickOutside = function useOnClickOutside(ref, handler) {
  (0, _react.useEffect)(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return function () {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
var ContextMenu = function ContextMenu(_ref) {
  var x = _ref.x,
    y = _ref.y,
    closeContextMenu = _ref.closeContextMenu;
  var contextMenuRef = (0, _react.useRef)(null);
  useOnClickOutside(contextMenuRef, closeContextMenu);
  return /*#__PURE__*/React.createElement("div", {
    ref: contextMenuRef,
    onClick: function onClick() {
      return closeContextMenu();
    },
    className: "context-menu-div",
    style: {
      top: "".concat(y, "px"),
      left: "".concat(x, "px"),
      position: "absolute"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "context-menu-button"
  }, "Share"), /*#__PURE__*/React.createElement("button", {
    className: "context-menu-button"
  }, "Print"), /*#__PURE__*/React.createElement("button", {
    className: "context-menu-button"
  }, "Download"));
};
var _default = exports["default"] = ContextMenu;