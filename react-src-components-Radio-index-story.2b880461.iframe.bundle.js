"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6258],{"./packages/react/src/components/Radio/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,PartialDisabled:()=>PartialDisabled,Readonly:()=>Readonly,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),warning=__webpack_require__("./node_modules/warning/warning.js"),warning_default=__webpack_require__.n(warning),index_esm=__webpack_require__("./packages/styled/dist/index.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 4px;\n  align-items: center;\n  cursor: pointer;\n\n  &[aria-disabled]:not([aria-disabled='false']) {\n    opacity: 0.32;\n    cursor: default;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  /** Make prior to browser default style */\n  &[type='radio'] {\n    appearance: none;\n    display: block;\n    box-sizing: border-box;\n\n    margin: 0;\n    padding: 6px;\n\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    border-radius: 999999px;\n    background-color: var(--charcoal-surface1);\n    transition: 0.2s background-color, 0.2s box-shadow;\n\n    :disabled {\n      cursor: default;\n    }\n\n    &:not(:disabled):not([aria-disabled]),\n    &[aria-disabled='false'] {\n      &:hover {\n        background-color: var(--charcoal-surface1-hover);\n      }\n      &:active {\n        background-color: var(--charcoal-surface1-press);\n      }\n      ","\n      &[aria-invalid='true'] {\n        box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n        &:focus {\n          box-shadow: 0 0 0 4px rgba(255, 43, 0, 0.32);\n        }\n      }\n    }\n\n    &:not(:checked) {\n      border-width: 2px;\n      border-style: solid;\n      border-color: var(--charcoal-text3);\n    }\n\n    &:checked {\n      background-color: var(--charcoal-brand);\n      &::after {\n        content: '';\n        display: block;\n        width: 8px;\n        height: 8px;\n        pointer-events: none;\n        background-color: var(--charcoal-text5);\n        border-radius: 999999px;\n        transition: 0.2s background-color, 0.2s box-shadow;\n      }\n\n      &:not(:disabled):not([aria-disabled]),\n      &[aria-disabled='false'] {\n        &:hover {\n          background-color: var(--charcoal-brand-hover);\n          &::after {\n            background-color: var(--charcoal-text5-hover);\n          }\n        }\n        &:active {\n          background-color: var(--charcoal-brand-press);\n          &::after {\n            background-color: var(--charcoal-text5-press);\n          }\n        }\n      }\n    }\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  font-size: 14px;\n  line-height: 22px;\n  display: flow-root;\n  color: var(--charcoal-text2);\n\n  &::before {\n    display: block;\n    width: 0;\n    height: 0;\n    content: '';\n    margin-top: -4px;\n  }\n  &::after {\n    display: block;\n    width: 0;\n    height: 0;\n    content: '';\n    margin-bottom: -4px;\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 8px;\n"]);return _templateObject3=function _templateObject(){return data},data}var Radio=(0,react.forwardRef)((function RadioInner(param,ref){var value=param.value,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,children=param.children,className=param.className,_useContext=(0,react.useContext)(RadioGroupContext),name=_useContext.name,selected=_useContext.selected,isParentDisabled=_useContext.disabled,readonly=_useContext.readonly,invalid=_useContext.invalid,onChange=_useContext.onChange;warning_default()(void 0!==name,'"name" is not Provided for <Radio>. Perhaps you forgot to wrap with <RadioGroup> ?');var isSelected=value===selected,isDisabled=disabled||isParentDisabled,isReadonly=readonly&&!isSelected,handleChange=(0,react.useCallback)((function(e){onChange(e.currentTarget.value)}),[onChange]);return(0,jsx_runtime.jsxs)(RadioRoot,{"aria-disabled":isDisabled||isReadonly,className,children:[(0,jsx_runtime.jsx)(RadioInput,{name,value,checked:isSelected,"aria-invalid":invalid,onChange:handleChange,disabled:isDisabled||isReadonly,ref}),null!=children&&(0,jsx_runtime.jsx)(RadioLabel,{children})]})}));const components_Radio=(0,react.memo)(Radio);var RadioRoot=styled_components_browser_esm.ZP.label(_templateObject()),RadioInput=styled_components_browser_esm.ZP.input.attrs({type:"radio"})(_templateObject1(),index_esm.L_),RadioLabel=styled_components_browser_esm.ZP.div(_templateObject2()),StyledRadioGroup=styled_components_browser_esm.ZP.div(_templateObject3()),RadioGroupContext=react.createContext({name:void 0,selected:void 0,disabled:!1,readonly:!1,invalid:!1,onChange:function onChange(){throw new Error("Cannot find onChange() handler. Perhaps you forgot to wrap with <RadioGroup> ?")}});function RadioGroup(param){var className=param.className,value=param.value,label=param.label,name=param.name,onChange=param.onChange,disabled=param.disabled,readonly=param.readonly,invalid=param.invalid,children=param.children,handleChange=(0,react.useCallback)((function(next){onChange(next)}),[onChange]);return(0,jsx_runtime.jsx)(RadioGroupContext.Provider,{value:{name,selected:value,disabled:null!=disabled&&disabled,readonly:null!=readonly&&readonly,invalid:null!=invalid&&invalid,onChange:handleChange},children:(0,jsx_runtime.jsx)(StyledRadioGroup,{role:"radiogroup","aria-orientation":"vertical","aria-label":label,"aria-invalid":invalid,className,children})})}Radio.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1}}},RadioGroup.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};var dist_index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_story_templateObject(){var data=function index_story_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"]);return index_story_templateObject=function _templateObject(){return data},data}const index_story={title:"Radio",component:components_Radio,parameters:{layout:"centered"}};var LayoutDiv=styled_components_browser_esm.ZP.div(index_story_templateObject(),(function(param){var theme=param.theme;return(0,dist_index_esm.px)(theme.spacing[24])})),Default={render:function Render(args){var options=["1","2","3"],_useState=_sliced_to_array((0,react.useState)(options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,_object_spread_props(_object_spread({label:"label",name:"name"},args),{value,onChange:setValue,children:options.map((function(option){return(0,jsx_runtime.jsxs)(components_Radio,{value:option,children:["Value ",option]},option)}))}))})}},Disabled={render:function Render(){var options=["1","2","3"],_useState=_sliced_to_array((0,react.useState)(options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,disabled:!0,children:options.map((function(option){return(0,jsx_runtime.jsxs)(components_Radio,{value:option,disabled:!0,children:["Value ",option]},option)}))})})}},PartialDisabled={render:function Render(){var options=["1","2","3"],_useState=_sliced_to_array((0,react.useState)(options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,children:options.map((function(option){return(0,jsx_runtime.jsxs)(components_Radio,{value:option,disabled:"2"===option,children:["Value ",option]},option)}))})})}},Readonly={render:function Render(){var options=["1","2","3"],_useState=_sliced_to_array((0,react.useState)(options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,readonly:!0,children:options.map((function(option){return(0,jsx_runtime.jsxs)(components_Radio,{value:option,children:["Value ",option]},option)}))})})}},Invalid={render:function Render(){var options=["1","2","3"],_useState=_sliced_to_array((0,react.useState)(options[0]),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(LayoutDiv,{children:(0,jsx_runtime.jsx)(RadioGroup,{label:"label",name:"name",value,onChange:setValue,invalid:!0,children:options.map((function(option){return(0,jsx_runtime.jsxs)(components_Radio,{value:option,children:["Value ",option]},option)}))})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} {...args} value={value} onChange={setValue}>\n          {options.map(option => <Radio key={option} value={option}>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue} disabled>\n          {options.map(option => <Radio key={option} value={option} disabled>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...Disabled.parameters?.docs?.source}}},PartialDisabled.parameters={...PartialDisabled.parameters,docs:{...PartialDisabled.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue}>\n          {options.map(option => <Radio key={option} value={option} disabled={option === '2'}>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...PartialDisabled.parameters?.docs?.source}}},Readonly.parameters={...Readonly.parameters,docs:{...Readonly.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue} readonly>\n          {options.map(option => <Radio key={option} value={option}>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...Readonly.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const options = ['1', '2', '3'];\n    const [value, setValue] = useState(options[0]);\n    return <LayoutDiv>\n        <RadioGroup label={'label'} name={'name'} value={value} onChange={setValue} invalid>\n          {options.map(option => <Radio key={option} value={option}>\n              Value {option}\n            </Radio>)}\n        </RadioGroup>\n      </LayoutDiv>;\n  }\n}",...Invalid.parameters?.docs?.source}}}}}]);