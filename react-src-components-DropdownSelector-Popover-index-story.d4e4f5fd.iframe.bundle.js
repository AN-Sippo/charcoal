"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6695],{"./node_modules/@react-aria/visually-hidden/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>$5c3e21d68f1c4674$export$a966af930f325cab,T:()=>$5c3e21d68f1c4674$export$439d29a4e110a164});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs");const $5c3e21d68f1c4674$var$styles={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function $5c3e21d68f1c4674$export$a966af930f325cab(props={}){let{style,isFocusable}=props,[isFocused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{focusWithinProps}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.L_)({isDisabled:!isFocusable,onFocusWithinChange:val=>setFocused(val)});return{visuallyHiddenProps:{...focusWithinProps,style:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>isFocused?style:style?{...$5c3e21d68f1c4674$var$styles,...style}:$5c3e21d68f1c4674$var$styles),[isFocused])}}}function $5c3e21d68f1c4674$export$439d29a4e110a164(props){let{children,elementType:Element="div",isFocusable,style,...otherProps}=props,{visuallyHiddenProps}=$5c3e21d68f1c4674$export$a966af930f325cab(props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Element,(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.dG)(otherProps,visuallyHiddenProps),children)}},"./node_modules/@react-stately/utils/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uZ:()=>$9446cca9a3875146$export$7d15b64cf5a3a4c4,zk:()=>$458b0a5536c1a7cf$export$40bfa8c7b0832715});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value,defaultValue,onChange){let[stateValue,setStateValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value||defaultValue),isControlledRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0!==value),isControlled=void 0!==value;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let wasControlled=isControlledRef.current;wasControlled!==isControlled&&console.warn(`WARN: A component changed from ${wasControlled?"controlled":"uncontrolled"} to ${isControlled?"controlled":"uncontrolled"}.`),isControlledRef.current=isControlled}),[isControlled]);let currentValue=isControlled?value:stateValue,setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value,...args)=>{let onChangeCaller=(value,...onChangeArgs)=>{onChange&&(Object.is(currentValue,value)||onChange(value,...onChangeArgs)),isControlled||(currentValue=value)};if("function"==typeof value){console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),setStateValue(((oldValue,...functionArgs)=>{let interceptedValue=value(isControlled?currentValue:oldValue,...functionArgs);return onChangeCaller(interceptedValue,...args),isControlled?oldValue:interceptedValue}))}else isControlled||setStateValue(value),onChangeCaller(value,...args)}),[isControlled,currentValue,onChange]);return[currentValue,setValue]}function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value,min=-1/0,max=1/0){return Math.min(Math.max(value,min),max)}},"./packages/react/src/_lib/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unreachable(value){throw new Error(0===arguments.length?"unreachable":"unreachable (".concat(JSON.stringify(value),")"))}function mergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(value){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=refs[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var ref=_step.value;"function"==typeof ref?ref(value):null!==ref&&(ref.current=value)}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}}function countCodePointsInString(string){return Array.from(string).length}__webpack_require__.d(__webpack_exports__,{$j:()=>countCodePointsInString,lq:()=>mergeRefs,t1:()=>unreachable})},"./packages/react/src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),_lib=__webpack_require__("./packages/react/src/_lib/index.ts");function variantToFont(variant){switch(variant){case"Overlay":case"Primary":case"Navigation":case"Danger":return"text5";case"Default":return"text2";default:return(0,_lib.t1)(variant)}}function variantToBackground(variant){switch(variant){case"Overlay":return"surface4";case"Default":return"surface3";case"Primary":return"brand";case"Navigation":return"surface6";case"Danger":return"assertive";default:return(0,_lib.t1)(variant)}}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Clickable=__webpack_require__("./packages/react/src/components/Clickable/index.tsx"),index_esm=__webpack_require__("./packages/styled/dist/index.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  padding-right: 16px;\n  padding-left: 16px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  padding-right: 24px;\n  padding-left: 24px;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n            color: var(--charcoal-","-press);\n            background-color: var(--charcoal-","-press);\n          "]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n            &:hover {\n              color: var(--charcoal-","-hover);\n              background-color: var(--charcoal-","-hover);\n            }\n            &:active {\n              color: var(--charcoal-","-press);\n              background-color: var(--charcoal-","-press);\n            }\n          "]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  width: ",";\n  display: inline-grid;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n  white-space: nowrap;\n  border-radius: 999999px;\n  font-size: 14px;\n  line-height: 22px;\n  font-weight: bold;\n\n  ","\n  color: var(--charcoal-",");\n  background-color: var(--charcoal-",");\n  transition: 0.2s color, 0.2s background-color, 0.2s box-shadow;\n\n  &:not(:disabled):not([aria-disabled]),\n  &[aria-disabled='false'] {\n    ","\n\n    ","\n  }\n\n  &:disabled,\n  &[aria-disabled]:not([aria-disabled='false']) {\n    opacity: 0.32;\n  }\n  height: ","px;\n"]);return _templateObject4=function _templateObject(){return data},data}var horizontalPaddingSmall=(0,styled_components_browser_esm.iv)(_templateObject()),horizontalPaddingMedium=(0,styled_components_browser_esm.iv)(_templateObject1()),StyledButton=(0,styled_components_browser_esm.ZP)(Clickable.Z)(_templateObject4(),(function(p){return p.$fullWidth?"stretch":"min-content"}),(function(p){return"M"===p.$size?horizontalPaddingMedium:horizontalPaddingSmall}),(function(p){return p.$color}),(function(p){return p.$background}),index_esm.L_,(function(param){var $active=param.$isActive,$color=param.$color,$background=param.$background;return $active?(0,styled_components_browser_esm.iv)(_templateObject2(),$color,$background):(0,styled_components_browser_esm.iv)(_templateObject3(),$color,$background,$color,$background)}),(function(p){return"M"===p.$size?40:32}));function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=(0,react.forwardRef)((function Button(_param,ref){var children=_param.children,_param_variant=_param.variant,variant=void 0===_param_variant?"Default":_param_variant,_param_size=_param.size,size=void 0===_param_size?"M":_param_size,tmp=_param.fullWidth,fixed=void 0!==tmp&&tmp,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_isActive=_param.isActive,isActive=void 0!==_param_isActive&&_param_isActive,rest=_object_without_properties(_param,["children","variant","size","fullWidth","disabled","isActive"]);return(0,jsx_runtime.jsx)(StyledButton,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},rest),{disabled,$background:variantToBackground(variant),$color:variantToFont(variant),$size:size,$fullWidth:fixed,$isActive:isActive,ref,children}))}));const components_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'Default'",computed:!1},required:!1},size:{defaultValue:{value:"'M'",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},isActive:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/react/src/components/Clickable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Clickable});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var DefaultLink=react.forwardRef((function DefaultLink(_param,ref){var to=_param.to,children=_param.children,rest=_object_without_properties(_param,["to","children"]);return(0,jsx_runtime.jsx)("a",_object_spread_props(_object_spread({href:to,ref},rest),{children}))})),DefaultValue={Link:DefaultLink},ComponentAbstractionContext=react.createContext(DefaultValue);DefaultLink.__docgenInfo={description:"",methods:[],displayName:"DefaultLink"};var index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");function Clickable_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Clickable_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function Clickable_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Clickable_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function Clickable_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  cursor: pointer;\n\n  "," {\n    cursor: default;\n  }\n\n  /* Reset button appearance */\n  appearance: none;\n  background: transparent;\n  padding: 0;\n  border-style: none;\n  outline: none;\n  color: inherit;\n  text-rendering: inherit;\n  letter-spacing: inherit;\n  word-spacing: inherit;\n  text-decoration: none;\n\n  &:focus {\n    outline: none;\n  }\n\n  /* Change the font styles in all browsers. */\n  font: inherit;\n\n  /* Remove the margin in Firefox and Safari. */\n  margin: 0;\n\n  /* Show the overflow in Edge. */\n  overflow: visible;\n\n  /* Remove the inheritance of text transform in Firefox. */\n  text-transform: none;\n\n  /* Remove the inner border and padding in Firefox. */\n  &::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Clickable=react.forwardRef((function Clickable(props,ref){var Link=function useComponentAbstraction(){return(0,react.useContext)(ComponentAbstractionContext)}().Link,isLink="to"in props,as=isLink?Link:"button",ariaDisabled=!(!isLink||!0!==props.disabled)||void 0,rest=props;if(isLink){props.disabled;rest=Clickable_object_without_properties(props,["disabled"])}return(0,jsx_runtime.jsx)(StyledClickableDiv,Clickable_object_spread_props(function Clickable_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Clickable_define_property(target,key,source[key])}))}return target}({},rest),{ref,as,"aria-disabled":ariaDisabled}))}));const components_Clickable=Clickable;var StyledClickableDiv=styled_components_browser_esm.ZP.div(_templateObject(),index_esm.t0);Clickable.__docgenInfo={description:"",methods:[],displayName:"Clickable"}},"./packages/react/src/components/DropdownSelector/Popover/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Popover});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Modal_ModalBackgroundContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Modal/ModalBackgroundContext.tsx"),_usePreventScroll__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/components/DropdownSelector/Popover/usePreventScroll.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  margin: 4px 0;\n  list-style: none;\n  overflow: auto;\n  max-height: inherit;\n  background-color: var(--charcoal-background1);\n  border: solid 1px var(--charcoal-border-default);\n  border-radius: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n"]);return _templateObject=function _templateObject(){return data},data}var _empty=function(){return null};function Popover(props){var _popoverProps_style,defaultPopoverRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),finalPopoverRef=void 0===props.popoverRef?defaultPopoverRef:props.popoverRef,_usePopover=(0,_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.Sv)({triggerRef:props.triggerRef,popoverRef:finalPopoverRef,containerPadding:16},{close:props.onClose,isOpen:props.isOpen,open:_empty,setOpen:_empty,toggle:_empty}),popoverProps=_usePopover.popoverProps,underlayProps=_usePopover.underlayProps,modalBackground=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Modal_ModalBackgroundContext__WEBPACK_IMPORTED_MODULE_3__.C);return(0,_usePreventScroll__WEBPACK_IMPORTED_MODULE_4__.t)(modalBackground,props.isOpen),props.isOpen?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.aV,{portalContainer:document.body,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_object_spread_props(_object_spread({},underlayProps),{style:{position:"fixed",zIndex:"number"==typeof(null===(_popoverProps_style=popoverProps.style)||void 0===_popoverProps_style?void 0:_popoverProps_style.zIndex)?popoverProps.style.zIndex-1:99999,inset:0}})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropdownPopoverDiv,_object_spread_props(_object_spread({},popoverProps),{ref:finalPopoverRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.U4,{onDismiss:function(){return props.onClose()}}),props.children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.U4,{onDismiss:function(){return props.onClose()}})]}))]}):null}var DropdownPopoverDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(_templateObject());Popover.__docgenInfo={description:"画面の全面に動的に開くことができるコンテナ要素\n外の要素をクリックしたり、内部からフォーカスを移動した場合に自動的に閉じる\n\ntriggerRefの付近に画面内に収まるように表示される",methods:[],displayName:"Popover",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},triggerRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"Element"}],raw:"RefObject<Element>"},description:""},popoverRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLDivElement"}],raw:"RefObject<HTMLDivElement>"},description:""}}}},"./packages/react/src/components/DropdownSelector/Popover/usePreventScroll.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>usePreventScroll});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePreventScroll(element,isOpen){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(isOpen&&element){var defaultPaddingRight=element.style.paddingRight,defaultOverflow=element.style.overflow;return element.style.paddingRight="".concat(window.innerWidth-element.clientWidth,"px"),element.style.overflow="hidden",function(){element.style.paddingRight=defaultPaddingRight,element.style.overflow=defaultOverflow}}}),[element,isOpen])}},"./packages/react/src/components/Modal/ModalBackgroundContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ModalBackgroundContext});var ModalBackgroundContext=__webpack_require__("./node_modules/react/index.js").createContext(null)},"./packages/react/src/components/DropdownSelector/Popover/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/src/components/DropdownSelector/Popover/index.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/react/src/components/Button/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={title:"DropdownSelector/Popover",component:___WEBPACK_IMPORTED_MODULE_2__.Z};function Base(props){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],triggerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:function(){setIsOpen(!0)},style:props.style,ref:triggerRef,children:"button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{isOpen,onClose:function(){return setIsOpen(!1)},triggerRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{margin:"8px 16px"},children:"Hello"})})]})}var Basic={render:function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{style:{position:"absolute"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{style:{position:"absolute",right:8}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{style:{position:"absolute",bottom:8}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{style:{position:"absolute",right:8,bottom:8}})]})}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: () => <>\n      <Base style={{\n      position: 'absolute'\n    }} />\n      <Base style={{\n      position: 'absolute',\n      right: 8\n    }} />\n      <Base style={{\n      position: 'absolute',\n      bottom: 8\n    }} />\n      <Base style={{\n      position: 'absolute',\n      right: 8,\n      bottom: 8\n    }} />\n    </>\n}",...Basic.parameters?.docs?.source}}}}}]);