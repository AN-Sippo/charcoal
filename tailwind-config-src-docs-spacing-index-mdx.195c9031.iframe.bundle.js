"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[9361],{"./packages/tailwind-config/src/docs/spacing/index.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var _config_theme_spacing,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),spacing=null!==(_config_theme_spacing=__webpack_require__("./packages/tailwind-config/src/index.ts").v.theme.spacing)&&void 0!==_config_theme_spacing?_config_theme_spacing:{},Spacing=function(){return(0,jsx_runtime.jsx)("div",{className:"space-y-40",children:Object.keys(spacing).map((function(space){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("p",{className:"typography-14 text-text2",children:["p-",space]}),(0,jsx_runtime.jsx)("div",{className:"bg-surface3 p-".concat(space," w-[min-content]"),children:(0,jsx_runtime.jsx)("div",{className:"bg-brand h-40",style:{width:"40px"}})})]},space)}))})};function _createMdxContent(props){const _components={h1:"h1",...(0,lib.a)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"tailwind-config/Spacing",component:[Spacing]}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"spacing",children:"Spacing"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(Spacing,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.a)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}Spacing.__docgenInfo={description:"",methods:[],displayName:"Spacing"}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}}}]);