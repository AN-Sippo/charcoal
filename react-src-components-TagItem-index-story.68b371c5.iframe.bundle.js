"use strict";(self.webpackChunkcharcoal_ui=self.webpackChunkcharcoal_ui||[]).push([[2612],{"./packages/react/src/components/TagItem/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,BGColor:()=>BGColor,BGImage:()=>BGImage,Default:()=>Default,Disabled:()=>Disabled,InActive:()=>InActive,Small:()=>Small,TranslatedLabel:()=>index_story_TranslatedLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./packages/utils/dist/index.esm.js"),focus_dist_import=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),interactions_dist_import=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs");function $701a24aa0da5b062$export$ea18c227d4417cc3(props,ref){let additionalProps,{elementType="button",isDisabled,onPress,onPressStart,onPressEnd,onPressUp,onPressChange,preventFocusOnPress,allowFocusWhenDisabled,onClick:deprecatedOnClick,href,target,rel,type="button"}=props;additionalProps="button"===elementType?{type,disabled:isDisabled}:{role:"button",tabIndex:isDisabled?void 0:0,href:"a"===elementType&&isDisabled?void 0:href,target:"a"===elementType?target:void 0,type:"input"===elementType?type:void 0,disabled:"input"===elementType?isDisabled:void 0,"aria-disabled":isDisabled&&"input"!==elementType?isDisabled:void 0,rel:"a"===elementType?rel:void 0};let{pressProps,isPressed}=(0,interactions_dist_import.r7)({onPressStart,onPressEnd,onPressChange,onPress,onPressUp,isDisabled,preventFocusOnPress,ref}),{focusableProps}=(0,focus_dist_import.kc)(props,ref);allowFocusWhenDisabled&&(focusableProps.tabIndex=isDisabled?-1:focusableProps.tabIndex);let buttonProps=(0,dist_import.dG)(focusableProps,pressProps,(0,dist_import.zL)(props,{labelable:!0}));return{isPressed,buttonProps:(0,dist_import.dG)(additionalProps,buttonProps,{"aria-haspopup":props["aria-haspopup"],"aria-expanded":props["aria-expanded"],"aria-controls":props["aria-controls"],"aria-pressed":props["aria-pressed"],onClick:e=>{deprecatedOnClick&&(deprecatedOnClick(e),console.warn("onClick is deprecated, please use onPress"))}})}}var Icon=__webpack_require__("./packages/react/src/components/Icon/index.tsx"),dist_index_esm=__webpack_require__("./packages/styled/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const sizeMap={S:32,M:40},TagItem=(0,react.forwardRef)((function TagItemInner({label,translatedLabel,bgColor="#7ACCB1",bgImage,size="M",disabled,status="default",className,...props},_ref){const ref=(0,dist_import.B3)(_ref),ariaButtonProps=(0,react.useMemo)((()=>({elementType:"a",isDisabled:disabled,...props})),[disabled,props]),{buttonProps}=$701a24aa0da5b062$export$ea18c227d4417cc3(ariaButtonProps,ref),hasTranslatedLabel=void 0!==translatedLabel&&translatedLabel.length>0;return(0,jsx_runtime.jsxs)(TagItemRoot,{ref,size:hasTranslatedLabel?"M":size,status,...buttonProps,className,children:[(0,jsx_runtime.jsx)(Background,{bgColor,bgImage,status}),(0,jsx_runtime.jsxs)(Inner,{children:[(0,jsx_runtime.jsxs)(LabelWrapper,{isTranslate:hasTranslatedLabel,children:[hasTranslatedLabel&&(0,jsx_runtime.jsx)(TranslatedLabel,{children:(0,jsx_runtime.jsx)(Label,{children:translatedLabel})}),(0,jsx_runtime.jsx)(Label,{children:label})]}),"active"===status&&(0,jsx_runtime.jsx)(Icon.Z,{name:"16/Remove"})]})]})})),components_TagItem=(0,react.memo)(TagItem),horizontalPadding=({left,right})=>styled_components_browser_esm.iv`
  padding-right: ${(0,index_esm.px)(right)};
  padding-left: ${(0,index_esm.px)(left)};
`,activeTagItemRoot=horizontalPadding({left:16,right:8}),TagItemRoot=styled_components_browser_esm.ZP.a`
  isolation: isolate;
  position: relative;
  height: ${({size})=>sizeMap[size]}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  ${({size,status})=>"active"!==status&&(size=>{switch(size){case"M":return horizontalPadding({left:24,right:24});case"S":return horizontalPadding({left:16,right:16})}})(size)}
  ${({status})=>"active"===status&&activeTagItemRoot}
  color: ${({status})=>"inactive"===status?"var(--charcoal-text2)":"var(--charcoal-text5)"};

  transition: 0.2s box-shadow;

  &:not(:disabled):not([aria-disabled]),
  &[aria-disabled='false'] {
    ${dist_index_esm.L_}
  }

  &:disabled,
  &[aria-disabled]:not([aria-disabled='false']) {
    opacity: 0.32;
    cursor: default;
  }
`,Background=styled_components_browser_esm.ZP.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({bgColor})=>bgColor};
  ${({status})=>"inactive"===status&&styled_components_browser_esm.iv`
      background-color: var(--charcoal-surface3);
    `}

  ${({bgImage})=>void 0!==bgImage&&styled_components_browser_esm.iv`
      background-color: var(--charcoal-surface4);

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-image: url(${bgImage});
        mix-blend-mode: overlay;
      }
    `}
`,Inner=styled_components_browser_esm.ZP.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  z-index: 2;
`,labelCSS=styled_components_browser_esm.iv`
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  display: flow-root;

  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`,translateLabelCSS=styled_components_browser_esm.iv`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
`,LabelWrapper=styled_components_browser_esm.ZP.div`
  ${({isTranslate})=>isTranslate?translateLabelCSS:labelCSS}
`,Label=styled_components_browser_esm.ZP.span`
  max-width: 152px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`,TranslatedLabel=styled_components_browser_esm.ZP.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  display: flow-root;
  &::before {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-top: -4px;
  }
  &::after {
    display: block;
    width: 0;
    height: 0;
    content: '';
    margin-bottom: -4px;
  }
`;try{TagItem.displayName="TagItem",TagItem.__docgenInfo={description:"",displayName:"TagItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},translatedLabel:{defaultValue:null,description:"",name:"translatedLabel",required:!1,type:{name:"string"}},bgColor:{defaultValue:{value:"#7ACCB1"},description:"",name:"bgColor",required:!1,type:{name:"string"}},bgImage:{defaultValue:null,description:"",name:"bgImage",required:!1,type:{name:"string"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"active"'},{value:'"inactive"'}]}},size:{defaultValue:{value:"M"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"M"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/TagItem/index.tsx#TagItem"]={docgenInfo:TagItem.__docgenInfo,name:"TagItem",path:"packages/react/src/components/TagItem/index.tsx#TagItem"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"TagItem",component:components_TagItem,parameters:{layout:"centered"}},Default={args:{label:"#女の子"},render:function Render(args){return(0,jsx_runtime.jsx)(components_TagItem,{...args})}},index_story_TranslatedLabel={render:function Render(){return(0,jsx_runtime.jsx)(components_TagItem,{label:"#女の子",translatedLabel:"girl"})}},BGColor={render:function Render(){return(0,jsx_runtime.jsx)(components_TagItem,{label:"女の子",bgColor:"var(--charcoal-brand)"})}},BGImage={render:function Render(){return(0,jsx_runtime.jsx)(components_TagItem,{label:"#女の子",bgImage:"https://charcoal-web.pixiv.design/charcoal-ogp.jpg"})}},Active={render:function Render(){return(0,jsx_runtime.jsx)(components_TagItem,{label:"#女の子",status:"active"})}},InActive={render:function Render(){return(0,jsx_runtime.jsx)(components_TagItem,{label:"#女の子",status:"inactive"})}},Small={render:function Render(){return(0,jsx_runtime.jsx)(components_TagItem,{label:"#女の子",size:"S"})}},Disabled={render:function Render(){return(0,jsx_runtime.jsx)(components_TagItem,{label:"#女の子",disabled:!0})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: '#女の子'\n  },\n  render: function Render(args) {\n    return <TagItem {...args} />;\n  }\n}",...Default.parameters?.docs?.source}}},index_story_TranslatedLabel.parameters={...index_story_TranslatedLabel.parameters,docs:{...index_story_TranslatedLabel.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    return <TagItem label="#女の子" translatedLabel="girl" />;\n  }\n}',...index_story_TranslatedLabel.parameters?.docs?.source}}},BGColor.parameters={...BGColor.parameters,docs:{...BGColor.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    return <TagItem label="女の子" bgColor="var(--charcoal-brand)" />;\n  }\n}',...BGColor.parameters?.docs?.source}}},BGImage.parameters={...BGImage.parameters,docs:{...BGImage.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    return <TagItem label="#女の子" bgImage="https://charcoal-web.pixiv.design/charcoal-ogp.jpg" />;\n  }\n}',...BGImage.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    return <TagItem label="#女の子" status="active" />;\n  }\n}',...Active.parameters?.docs?.source}}},InActive.parameters={...InActive.parameters,docs:{...InActive.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    return <TagItem label="#女の子" status="inactive" />;\n  }\n}',...InActive.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    return <TagItem label="#女の子" size="S" />;\n  }\n}',...Small.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    return <TagItem label="#女の子" disabled />;\n  }\n}',...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","TranslatedLabel","BGColor","BGImage","Active","InActive","Small","Disabled"]},"./packages/react/src/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./packages/icons/dist/index.esm.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Icon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function IconInner({name,scale,unsafeNonGuidelineScale,className,...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pixiv-icon",{ref,name,scale,"unsafe-non-guideline-scale":unsafeNonGuidelineScale,class:className,...rest})})),__WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{unsafeNonGuidelineScale:{defaultValue:null,description:"",name:"unsafeNonGuidelineScale",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"16/Add"'},{value:'"16/Archive"'},{value:'"16/ArrowDown"'},{value:'"16/Artwork"'},{value:'"16/Back"'},{value:'"16/Book"'},{value:'"16/BookmarkOff"'},{value:'"16/BookmarkOn"'},{value:'"16/Check"'},{value:'"16/Comment"'},{value:'"16/Dot"'},{value:'"16/Error"'},{value:'"16/Filter"'},{value:'"16/ImageResponse"'},{value:'"16/Info"'},{value:'"16/Like"'},{value:'"16/Menu"'},{value:'"16/More"'},{value:'"16/Nextworks"'},{value:'"16/Pencil"'},{value:'"16/Question"'},{value:'"16/Ranking"'},{value:'"16/Remove"'},{value:'"16/Search"'},{value:'"16/Smile"'},{value:'"16/Speaker"'},{value:'"16/View"'},{value:'"16/Warning"'},{value:'"24/Add"'},{value:'"24/AddImage"'},{value:'"24/AddModel"'},{value:'"24/AddPeople"'},{value:'"24/AddRubi"'},{value:'"24/AddText"'},{value:'"24/Alart"'},{value:'"24/Announcement"'},{value:'"24/Ar"'},{value:'"24/Archive"'},{value:'"24/ArrowDown"'},{value:'"24/ArrowUp"'},{value:'"24/Binet"'},{value:'"24/Body"'},{value:'"24/BodyEdit"'},{value:'"24/Book"'},{value:'"24/BringBackward"'},{value:'"24/BringForward"'},{value:'"24/Calendar"'},{value:'"24/Camera"'},{value:'"24/CameraVideo"'},{value:'"24/ChangeCharactor"'},{value:'"24/ChatBot"'},{value:'"24/Check"'},{value:'"24/ChromaticAberration"'},{value:'"24/Click"'},{value:'"24/Close"'},{value:'"24/Codes"'},{value:'"24/Collapse"'},{value:'"24/CommentFill"'},{value:'"24/CommentOutline"'},{value:'"24/Contest"'},{value:'"24/Contrast"'},{value:'"24/Description"'},{value:'"24/DeviceRotation"'},{value:'"24/Discovery"'},{value:'"24/Dot"'},{value:'"24/DotAlt"'},{value:'"24/Down"'},{value:'"24/DownloadAlt"'},{value:'"24/Duplicate"'},{value:'"24/Dust"'},{value:'"24/Emoji"'},{value:'"24/Error"'},{value:'"24/ErrorOctagon"'},{value:'"24/Events"'},{value:'"24/Expand"'},{value:'"24/FaceEdit"'},{value:'"24/Fashion"'},{value:'"24/Feed"'},{value:'"24/File"'},{value:'"24/Filter"'},{value:'"24/Flare"'},{value:'"24/FormatAlignCenter"'},{value:'"24/FormatAlignLeft"'},{value:'"24/FormatAlignRight"'},{value:'"24/FormatColorFill"'},{value:'"24/FormatColorFillNoColor"'},{value:'"24/FormatFontFamily"'},{value:'"24/FormatFontSize"'},{value:'"24/FormatLetterSpacing"'},{value:'"24/FormatLineSpacing"'},{value:'"24/Fov"'},{value:'"24/FrameEffect"'},{value:'"24/FrameSize"'},{value:'"24/Gift"'},{value:'"24/Glow"'},{value:'"24/Groups"'},{value:'"24/HairEdit"'},{value:'"24/Hashtag"'},{value:'"24/Hide"'},{value:'"24/Home"'},{value:'"24/Hue"'},{value:'"24/Idea"'},{value:'"24/Image"'},{value:'"24/ImageAlt"'},{value:'"24/ImageHidden"'},{value:'"24/ImageReplace"'},{value:'"24/Images"'},{value:'"24/ImgContain"'},{value:'"24/ImgCover"'},{value:'"24/Index"'},{value:'"24/Info"'},{value:'"24/Invalid"'},{value:'"24/Invoice"'},{value:'"24/ItemRemove"'},{value:'"24/LatestWorks"'},{value:'"24/LikeOff"'},{value:'"24/LikeOn"'},{value:'"24/Link"'},{value:'"24/List"'},{value:'"24/LockLock"'},{value:'"24/LockUnlock"'},{value:'"24/Logout"'},{value:'"24/Manga"'},{value:'"24/Menu"'},{value:'"24/Message"'},{value:'"24/Microphone"'},{value:'"24/MobilePhone"'},{value:'"24/Move1"'},{value:'"24/Next"'},{value:'"24/NoImage"'},{value:'"24/Notification"'},{value:'"24/NotificationOff"'},{value:'"24/Novels"'},{value:'"24/OpenInNew"'},{value:'"24/Options"'},{value:'"24/OptionsAlt"'},{value:'"24/Overlay"'},{value:'"24/Palette"'},{value:'"24/Pause"'},{value:'"24/PauseAlt"'},{value:'"24/Pencil"'},{value:'"24/PencilDraw"'},{value:'"24/PencilLive"'},{value:'"24/PencilText"'},{value:'"24/Person"'},{value:'"24/Play"'},{value:'"24/Pose"'},{value:'"24/Prev"'},{value:'"24/Projects"'},{value:'"24/PullDown"'},{value:'"24/PullUp"'},{value:'"24/Question"'},{value:'"24/QuestionOutline"'},{value:'"24/Ranking"'},{value:'"24/ReadHorizontalLeft"'},{value:'"24/ReadHorizontalRight"'},{value:'"24/ReadVertical"'},{value:'"24/Reload"'},{value:'"24/ReloadLoop"'},{value:'"24/Reorder"'},{value:'"24/Roll"'},{value:'"24/Rotate90DegreesC"'},{value:'"24/Rotate90DegreesCc"'},{value:'"24/RotateRight"'},{value:'"24/Saturation"'},{value:'"24/Save"'},{value:'"24/Search"'},{value:'"24/Send"'},{value:'"24/Services"'},{value:'"24/Set"'},{value:'"24/Settings"'},{value:'"24/ShareAndroid"'},{value:'"24/ShareIos"'},{value:'"24/Shopping"'},{value:'"24/Show"'},{value:'"24/ShowOutline"'},{value:'"24/Shutter"'},{value:'"24/Star"'},{value:'"24/Subtract"'},{value:'"24/Sun"'},{value:'"24/Temperature"'},{value:'"24/Text"'},{value:'"24/Trash"'},{value:'"24/TrashAlt"'},{value:'"24/Up"'},{value:'"24/Upload"'},{value:'"24/UploadAlt"'},{value:'"24/Usagi"'},{value:'"24/UsagiAlt"'},{value:'"24/Users"'},{value:'"24/Video"'},{value:'"24/ViewGrid2Columns"'},{value:'"24/ViewGrid3Columns"'},{value:'"24/ViewList"'},{value:'"24/Warning"'},{value:'"32/BookmarkOff"'},{value:'"32/BookmarkOn"'},{value:'"32/Camera"'},{value:'"32/Close"'},{value:'"32/Collapse"'},{value:'"32/CommentOff"'},{value:'"32/CommentOn"'},{value:'"32/Delete"'},{value:'"32/Dot"'},{value:'"32/Edit"'},{value:'"32/Expand"'},{value:'"32/Gift"'},{value:'"32/Home"'},{value:'"32/HorizontalWriting"'},{value:'"32/Index"'},{value:'"32/LikeOff"'},{value:'"32/LikeOn"'},{value:'"32/LikeOnPrivate"'},{value:'"32/Message"'},{value:'"32/Next"'},{value:'"32/Notification"'},{value:'"32/NotificationOff"'},{value:'"32/NovelViewerSettings"'},{value:'"32/Pan"'},{value:'"32/Prev"'},{value:'"32/PullDown"'},{value:'"32/PullUp"'},{value:'"32/ReadHorizontalLeft"'},{value:'"32/ReadHorizontalRight"'},{value:'"32/ReadVertical"'},{value:'"32/RollHorizontal"'},{value:'"32/RollVertical"'},{value:'"32/SansSerif"'},{value:'"32/Serif"'},{value:'"32/ShareAndroid"'},{value:'"32/ShareIos"'},{value:'"32/Shopping"'},{value:'"32/Upload"'},{value:'"32/User"'},{value:'"32/VerticalWriting"'},{value:'"32/ZoomIn"'},{value:'"Inline/Add"'},{value:'"Inline/BookmarkOff"'},{value:'"Inline/BookmarkOn"'},{value:'"Inline/Breadcrumbs"'},{value:'"Inline/Check"'},{value:'"Inline/Comment"'},{value:'"Inline/ContextMenu"'},{value:'"Inline/External"'},{value:'"Inline/Filter"'},{value:'"Inline/Folder"'},{value:'"Inline/ImageResponse"'},{value:'"Inline/Images"'},{value:'"Inline/Like"'},{value:'"Inline/LikeOff"'},{value:'"Inline/List"'},{value:'"Inline/Location"'},{value:'"Inline/Lock"'},{value:'"Inline/More"'},{value:'"Inline/Nextworks"'},{value:'"Inline/OpenInNew"'},{value:'"Inline/Pencil"'},{value:'"Inline/Remove"'},{value:'"Inline/Smile"'},{value:'"Inline/SmileOn"'},{value:'"Inline/Users"'},{value:'"Inline/View"'},{value:'"Inline/ViewOutline"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:'"1"'},{value:'"2"'},{value:'"3"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/react/src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=react-src-components-TagItem-index-story.68b371c5.iframe.bundle.js.map