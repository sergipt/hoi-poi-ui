(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),lib=__webpack_require__(72),lib_default=__webpack_require__.n(lib);function Button(_ref){var classes=_ref.classes,onClick=_ref.onClick,children=_ref.children;return react_default.a.createElement("button",{className:classes.button,onClick:onClick},react_default.a.createElement("span",{className:classes.label},children))}Button.propTypes={onClick:prop_types_default.a.func,children:prop_types_default.a.node.isRequired};__webpack_exports__.a=react_default.a.memo(lib_default()(function(theme){return{button:{background:theme.primary},label:{color:"white"}}})(Button));Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{type:{name:"func"},required:!1,description:""},children:{type:{name:"node"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/Button/index.jsx"})},262:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),lib=__webpack_require__(111),react_jss_lib=__webpack_require__(72),jss_preset_default_lib=__webpack_require__(170),jss_preset_default_lib_default=__webpack_require__.n(jss_preset_default_lib),jss_isolate_lib=__webpack_require__(261),jss_isolate_lib_default=__webpack_require__.n(jss_isolate_lib),defaultTheme={primary:"teal"},jss=Object(lib.create)(jss_preset_default_lib_default()());jss.use(jss_isolate_lib_default()({reset:"all"}));__webpack_exports__.a=function(_ref){var children=_ref.children,_ref$theme=_ref.theme,theme=void 0===_ref$theme?defaultTheme:_ref$theme;return react_default.a.createElement(react_jss_lib.ThemeProvider,{theme:theme},react_default.a.createElement(react_jss_lib.JssProvider,{jss:jss,classNamePrefix:"HoiPoi-"},children))}},263:function(module,exports,__webpack_require__){__webpack_require__(264),__webpack_require__(343),module.exports=__webpack_require__(344)},344:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(5),__webpack_require__(4);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(258),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(259),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(260),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_6__),_src_utils_styles_HoiPoiProvider__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(262);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.setAddon)(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_6___default.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__.withInfo)({header:!1})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__.withOptions)({name:"HoiPoi Storybook"})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(function(storyFn){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_utils_styles_HoiPoiProvider__WEBPACK_IMPORTED_MODULE_7__.a,null,storyFn())});var req=__webpack_require__(614);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(191)(module))},451:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":226,"./nestedObjectAssign.js":226};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=451},614:function(module,exports,__webpack_require__){var map={"./Button/button.stories.js":615};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=614},615:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(171);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,"Hello Button")}).add("with some emoji",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))})}.call(this,__webpack_require__(191)(module))}},[[263,1,2]]]);
//# sourceMappingURL=main.e0d45c91676690196458.bundle.js.map