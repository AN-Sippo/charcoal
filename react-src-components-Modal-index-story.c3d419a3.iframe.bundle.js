"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[6130],{"./packages/react/src/components/Modal/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundScroll:()=>BackgroundScroll,BottomSheet:()=>BottomSheet,Default:()=>Default,FullBottomSheet:()=>FullBottomSheet,InternalScroll:()=>InternalScrollStory,NotDismmissableStory:()=>NotDismmissableStory,default:()=>index_story});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal=__webpack_require__("./packages/react/src/components/Modal/index.tsx"),dist_import=__webpack_require__("./node_modules/@react-aria/overlays/dist/import.mjs"),react=__webpack_require__("./node_modules/react/index.js"),utils_dist_import=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");function $fc909762b330b746$export$61c6a8c84e605fb6(props){let[isOpen,setOpen]=(0,utils_dist_import.zk)(props.isOpen,props.defaultOpen||!1,props.onOpenChange);const open=(0,react.useCallback)((()=>{setOpen(!0)}),[setOpen]),close=(0,react.useCallback)((()=>{setOpen(!1)}),[setOpen]),toggle=(0,react.useCallback)((()=>{setOpen(!isOpen)}),[setOpen,isOpen]);return{isOpen,setOpen,open,close,toggle}}var Button=__webpack_require__("./packages/react/src/components/Button/index.tsx"),ModalPlumbing=__webpack_require__("./packages/react/src/components/Modal/ModalPlumbing.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=(0,__webpack_require__("./packages/styled/dist/index.esm.js").jG)(styled_components_browser_esm.ZP),TextField=__webpack_require__("./packages/react/src/components/TextField/index.tsx"),DropdownSelector=__webpack_require__("./packages/react/src/components/DropdownSelector/index.tsx"),DropdownMenuItem=__webpack_require__("./packages/react/src/components/DropdownSelector/DropdownMenuItem.tsx"),dist_index_esm=__webpack_require__("./packages/utils/dist/index.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n      @media "," {\n        max-height: calc(100vh - ","px - ","px);\n      }\n    "]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  overflow: auto;\n  max-height: calc(\n    100vh - ","px - ","px\n  );\n  ","\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  position: relative;\n  &::before {\n    content: '';\n    pointer-events: none;\n    border-top: 1px solid ",";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}var InternalScrollStory=function(args){var state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:function(){return state.open()},children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,_object_spread_props(_object_spread({},args),{isOpen:state.isOpen,onClose:function(){return state.close()},children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsx)(ModalBodyOverflowDiv,{$offset:56,$bottomSheet:args.bottomSheet,children:(0,jsx_runtime.jsx)("div",{style:{height:1e3,background:"linear-gradient(#e66465, #9198e5)"}})}),(0,jsx_runtime.jsx)(TopBorderButtons,{children:(0,jsx_runtime.jsx)(Button.Z,{fullWidth:!0,onClick:function(){return state.close()},children:"Close"})})]})]}))]})},ModalBodyOverflowDiv=styled_components_browser_esm.ZP.div(_templateObject1(),184,(function(param){return param.$offset}),(function(param){var $bottomSheet=param.$bottomSheet,$offset=param.$offset;return(!0===$bottomSheet||"full"===$bottomSheet)&&(0,styled_components_browser_esm.iv)(_templateObject(),(function(param){var theme=param.theme;return(0,dist_index_esm.kk)(theme.breakpoint.screen1)}),88,$offset)})),TopBorderButtons=(0,styled_components_browser_esm.ZP)(ModalPlumbing.Zf)(_templateObject2(),(function(param){return param.theme.border.default.color}));function index_story_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function index_story_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){index_story_define_property(target,key,source[key])}))}return target}function index_story_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function index_story_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function index_story_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function index_story_templateObject(){var data=index_story_tagged_template_literal(["\n  display: grid;\n  gap: 24px;\n"]);return index_story_templateObject=function _templateObject(){return data},data}function index_story_templateObject1(){var data=index_story_tagged_template_literal(["\n  ","\n"]);return index_story_templateObject1=function _templateObject(){return data},data}InternalScrollStory.__docgenInfo={description:"",methods:[],displayName:"InternalScrollStory",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'S' | 'M' | 'L'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:""},bottomSheet:{required:!1,tsType:{name:"union",raw:"boolean | 'full'",elements:[{name:"boolean"},{name:"literal",value:"'full'"}]},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},portalContainer:{required:!1,tsType:{name:"HTMLElement"},description:"https://github.com/adobe/react-spectrum/issues/3787\nNext.jsで使用する際に発生するエラーの一時的な回避策でdocument.bodyを指定する必要がある"}}};const index_story={title:"react/Modal",component:Modal.ZP,args:{title:"react/Title"},argTypes:{size:{options:["S","M","L"],control:{type:"inline-radio"},defaultValue:"M"},bottomSheet:{options:["full","true","false"],mapping:{full:"full",true:!0,false:!1},control:{type:"inline-radio"},defaultValue:!1}},render:function Render(args){var state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:function(){return state.open()},children:"Open Modal"}),(0,jsx_runtime.jsx)(M,index_story_object_spread_props(index_story_object_spread({},args),{isDismissable:!0,isOpen:state.isOpen,onClose:function(){return state.close()}}))]})}};var M=function(props){return(0,jsx_runtime.jsxs)(Modal.ZP,index_story_object_spread_props(index_story_object_spread({},props),{children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsxs)(ModalVStack,{children:[(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.ZP,{showLabel:!0,label:"Name",placeholder:"Nagisa"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.ZP,{autoFocus:!0,showLabel:!0,label:"Country",placeholder:"Tokyo"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsxs)(DropdownSelector.Z,{onChange:function(){return null},value:"10",showLabel:!0,label:"Fruits",placeholder:"Apple",children:[(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"10",children:"Apple"}),(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"20",children:"Banana"}),(0,jsx_runtime.jsx)(DropdownMenuItem.Z,{value:"30",children:"Orange"})]})})]}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Primary",onClick:function(){return props.onClose()},fullWidth:!0,children:"Apply"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:function(){return props.onClose()},fullWidth:!0,children:"Cancel"})]})]})]}))},ModalVStack=styled_components_browser_esm.ZP.div(index_story_templateObject()),StyledModalText=(0,styled_components_browser_esm.ZP)(ModalPlumbing.BT)(index_story_templateObject1(),theme((function(o){return[o.font.text2,o.typography(14)]}))),Default={},FullBottomSheet={args:{bottomSheet:"full"},render:function Render(args){var state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:function(){return state.open()},children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,index_story_object_spread_props(index_story_object_spread({},args),{isDismissable:!0,isOpen:state.isOpen,onClose:function(){return state.close()},children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsxs)(ModalVStack,{children:[(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.ZP,{showLabel:!0,label:"Name",placeholder:"Nagisa"})}),(0,jsx_runtime.jsx)(ModalPlumbing.BT,{children:(0,jsx_runtime.jsx)(TextField.ZP,{showLabel:!0,label:"Country",placeholder:"Tokyo"})})]}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Primary",onClick:function(){return state.close()},fullWidth:!0,children:"Apply"}),(0,jsx_runtime.jsx)(Button.Z,{onClick:function(){return state.close()},fullWidth:!0,children:"Cancel"})]})]})]}))]})}},BottomSheet={render:function Render(args){var state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:function(){return state.open()},children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,index_story_object_spread_props(index_story_object_spread({},args),{isOpen:state.isOpen,onClose:function(){return state.close()},bottomSheet:!0,isDismissable:!0,children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsx)(ModalVStack,{children:(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."})}),(0,jsx_runtime.jsxs)(ModalPlumbing.Zf,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"Danger",onClick:function(){return state.close()},fullWidth:!0,children:"削除する"}),(0,jsx_runtime.jsx)(Modal.t5,{children:"キャンセル"})]})]})]}))]})}},NotDismmissableStory={render:function Render(args){var state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:function(){return state.open()},children:"Open Modal"}),(0,jsx_runtime.jsxs)(Modal.ZP,index_story_object_spread_props(index_story_object_spread({},args),{isOpen:state.isOpen,onClose:function(){return state.close()},children:[(0,jsx_runtime.jsx)(ModalPlumbing.xB,{}),(0,jsx_runtime.jsxs)(ModalPlumbing.fe,{children:[(0,jsx_runtime.jsx)(ModalVStack,{children:(0,jsx_runtime.jsx)(StyledModalText,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat tenetur, necessitatibus laudantium cumque exercitationem provident. Quaerat iure enim, eveniet dolores earum odio quo possimus fugiat aspernatur, numquam, commodi repellat."})}),(0,jsx_runtime.jsx)(ModalPlumbing.Zf,{children:(0,jsx_runtime.jsx)(Button.Z,{variant:"Primary",onClick:function(){return state.close()},fullWidth:!0,children:"OK"})})]})]}))]})}},BackgroundScroll={render:function Render(args){var state=$fc909762b330b746$export$61c6a8c84e605fb6({});return(0,jsx_runtime.jsxs)(dist_import.N3,{children:[(0,jsx_runtime.jsx)("div",{style:{height:1024},children:(0,jsx_runtime.jsx)(Button.Z,{onClick:function(){return state.open()},children:"Open Modal"})}),(0,jsx_runtime.jsx)(M,index_story_object_spread_props(index_story_object_spread({},args),{isDismissable:!0,isOpen:state.isOpen,onClose:function(){return state.close()}}))]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},FullBottomSheet.parameters={...FullBottomSheet.parameters,docs:{...FullBottomSheet.parameters?.docs,source:{originalSource:'{\n  args: {\n    bottomSheet: \'full\'\n  },\n  render: function Render(args) {\n    const state = useOverlayTriggerState({});\n    return (\n      // Application must be wrapped in an OverlayProvider so that it can be\n      // hidden from screen readers when a modal opens.\n      <OverlayProvider>\n        <Button onClick={() => state.open()}>Open Modal</Button>\n\n        <Modal {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()}>\n          <ModalHeader />\n          <ModalBody>\n            <ModalVStack>\n              <StyledModalText>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod\n                placeat tenetur, necessitatibus laudantium cumque exercitationem\n                provident. Quaerat iure enim, eveniet dolores earum odio quo\n                possimus fugiat aspernatur, numquam, commodi repellat.\n              </StyledModalText>\n              <ModalAlign>\n                <TextField showLabel label="Name" placeholder="Nagisa"></TextField>\n              </ModalAlign>\n              <ModalAlign>\n                <TextField showLabel label="Country" placeholder="Tokyo"></TextField>\n              </ModalAlign>\n            </ModalVStack>\n            <ModalButtons>\n              <Button variant="Primary" onClick={() => state.close()} fullWidth>\n                Apply\n              </Button>\n              <Button onClick={() => state.close()} fullWidth>\n                Cancel\n              </Button>\n            </ModalButtons>\n          </ModalBody>\n        </Modal>\n      </OverlayProvider>\n    );\n  }\n}',...FullBottomSheet.parameters?.docs?.source}}},BottomSheet.parameters={...BottomSheet.parameters,docs:{...BottomSheet.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const state = useOverlayTriggerState({});\n    return (\n      // Application must be wrapped in an OverlayProvider so that it can be\n      // hidden from screen readers when a modal opens.\n      <OverlayProvider>\n        <Button onClick={() => state.open()}>Open Modal</Button>\n\n        <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()} bottomSheet isDismissable>\n          <ModalHeader />\n          <ModalBody>\n            <ModalVStack>\n              <StyledModalText>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod\n                placeat tenetur, necessitatibus laudantium cumque exercitationem\n                provident. Quaerat iure enim, eveniet dolores earum odio quo\n                possimus fugiat aspernatur, numquam, commodi repellat.\n              </StyledModalText>\n            </ModalVStack>\n            <ModalButtons>\n              <Button variant="Danger" onClick={() => state.close()} fullWidth>\n                削除する\n              </Button>\n              <ModalDismissButton>キャンセル</ModalDismissButton>\n            </ModalButtons>\n          </ModalBody>\n        </Modal>\n      </OverlayProvider>\n    );\n  }\n}',...BottomSheet.parameters?.docs?.source}}},NotDismmissableStory.parameters={...NotDismmissableStory.parameters,docs:{...NotDismmissableStory.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const state = useOverlayTriggerState({});\n    return <OverlayProvider>\n        <Button onClick={() => state.open()}>Open Modal</Button>\n\n        <Modal {...args} isOpen={state.isOpen} onClose={() => state.close()}>\n          <ModalHeader />\n          <ModalBody>\n            <ModalVStack>\n              <StyledModalText>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod\n                placeat tenetur, necessitatibus laudantium cumque exercitationem\n                provident. Quaerat iure enim, eveniet dolores earum odio quo\n                possimus fugiat aspernatur, numquam, commodi repellat.\n              </StyledModalText>\n            </ModalVStack>\n            <ModalButtons>\n              <Button variant="Primary" onClick={() => state.close()} fullWidth>\n                OK\n              </Button>\n            </ModalButtons>\n          </ModalBody>\n        </Modal>\n      </OverlayProvider>;\n  }\n}',...NotDismmissableStory.parameters?.docs?.source}}},BackgroundScroll.parameters={...BackgroundScroll.parameters,docs:{...BackgroundScroll.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const state = useOverlayTriggerState({});\n    return <OverlayProvider>\n        <div style={{\n        height: 1024\n      }}>\n          <Button onClick={() => state.open()}>Open Modal</Button>\n        </div>\n        <M {...args} isDismissable isOpen={state.isOpen} onClose={() => state.close()} />\n      </OverlayProvider>;\n  }\n}",...BackgroundScroll.parameters?.docs?.source}}}}}]);