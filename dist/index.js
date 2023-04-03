(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.b8ui = {}, global.PropTypes, global.React));
})(this, (function (exports, PropTypes, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    const Select = props => {
      const {
        label,
        labelSelector,
        options,
        selectHeight,
        onSelect = () => null
      } = props;
      const [inEdit, setInEdit] = React.useState(false);
      const defaultValue = options && Object.entries(options).length > 0 ? Object.entries(options)[0][1] : "";
      const defaultKey = options && Object.entries(options).length > 0 ? Object.entries(options)[0][0] : null;
      const [value, setValue] = React.useState(defaultValue);
      const [selectedKey, setSelectedKey] = React.useState(defaultKey);
      const onItemClick = (key, value) => {
        onSelect(value);
        setValue(value);
        setSelectedKey(key);
        setInEdit(false);
      };
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, " ", /*#__PURE__*/React__default["default"].createElement("div", {
        className: "select-container",
        "data-testid": "selectContainer",
        "data-testopened": inEdit
      }, /*#__PURE__*/React__default["default"].createElement("label", {
        className: "select-label",
        htmlFor: `${label}`
      }, label), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "select-border"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: `select-ui ${selectHeight}`
      }, /*#__PURE__*/React__default["default"].createElement("button", {
        className: "selector",
        onClick: () => setInEdit(!inEdit)
      }, selectedKey), /*#__PURE__*/React__default["default"].createElement("input", {
        value: value,
        type: "hidden",
        name: `${labelSelector}`
      }), /*#__PURE__*/React__default["default"].createElement(Arrow, {
        onClick: () => setInEdit(!inEdit)
      })), inEdit && /*#__PURE__*/React__default["default"].createElement("div", {
        className: "select-list"
      }, /*#__PURE__*/React__default["default"].createElement("ul", {
        className: "list"
      }, " ", Object.entries(options).map(([key, value], index) => /*#__PURE__*/React__default["default"].createElement("li", {
        className: "option-item",
        label: `${key}`,
        key: `${key}-${index}`,
        onClick: () => onItemClick(key, value)
      }, key)))))));
    };
    Select.propTypes = {
      label: PropTypes__default["default"].string,
      labelSelector: PropTypes__default["default"].string,
      options: PropTypes__default["default"].object,
      selectHeight: PropTypes__default["default"].string,
      onSelect: PropTypes__default["default"].func
    };
    const Arrow = props => /*#__PURE__*/React__default["default"].createElement("svg", {
      width: "15",
      onClick: props.onClick,
      height: "11",
      viewBox: "0 0 21 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React__default["default"].createElement("path", {
      d: "M10.2819 10.9843C10.213 10.9634 10.1408 10.9491 10.0741 10.9216C9.89304 10.8467 9.86193 10.8038 9.71304 10.6828L0.819902 1.87423C0.727682 1.76309 0.63435 1.64975 0.578794 1.5177C0.383244 1.05114 0.562128 0.462436 0.987675 0.180738C1.35211 -0.0602459 1.85877 -0.0602459 2.22321 0.180738C2.28432 0.220351 2.33542 0.272069 2.39209 0.317185L10.4997 8.34667L18.6062 0.317185L18.7751 0.180738C18.8395 0.146626 18.9006 0.107012 18.9673 0.0795026C19.4373 -0.114165 20.0284 0.057495 20.3173 0.484443C20.5606 0.845368 20.5606 1.34714 20.3173 1.70807C20.2761 1.76749 20.225 1.81921 20.1784 1.87423L11.2852 10.6828C11.2286 10.7279 11.1775 10.7796 11.1163 10.8192C10.9952 10.8996 10.8597 10.9557 10.7164 10.9843C10.5741 11.0118 10.4275 10.9975 10.2819 10.9843Z",
      fill: "#000"
    }));

    const Button = props => {
      const {
        onClick,
        title
      } = props;
      return /*#__PURE__*/React__default["default"].createElement("button", {
        onClick: onClick
      }, title);
    };

    exports.Button = Button;
    exports.Select = Select;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
