webpackJsonp([30],{"/6hN":function(t,i,e){var n=e("aJG8");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("4cf6ab78",n,!0)},"4mrK":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("BO1k"),s=e.n(n),a=e("DAYN"),l={name:"DndList",components:{draggable:e.n(a).a},computed:{filterList2:function(){var t=this;return this.list2.filter(function(i){return!!t.isNotInList1(i)&&i})}},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every(function(i){return t.id!==i.id})},isNotInList2:function(t){return this.list2.every(function(i){return t.id!==i.id})},deleteEle:function(t){var i=!0,e=!1,n=void 0;try{for(var a,l=s()(this.list1);!(i=(a=l.next()).done);i=!0){var r=a.value;if(r.id===t.id){var d=this.list1.indexOf(r);this.list1.splice(d,1);break}}}catch(t){e=!0,n=t}finally{try{!i&&l.return&&l.return()}finally{if(e)throw n}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){this.list1.push(t)}}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dndList"},[e("div",{staticClass:"dndList-list",style:{width:t.width1}},[e("h3",[t._v(t._s(t.list1Title))]),t._v(" "),e("draggable",{staticClass:"dragArea",attrs:{list:t.list1,options:{group:"article"}}},t._l(t.list1,function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle"},[t._v("["+t._s(i.author)+"] "+t._s(i.title))]),t._v(" "),e("div",{staticStyle:{position:"absolute",right:"0px"}},[e("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(e){t.deleteEle(i)}}},[e("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])}))],1),t._v(" "),e("div",{staticClass:"dndList-list",style:{width:t.width2}},[e("h3",[t._v(t._s(t.list2Title))]),t._v(" "),e("draggable",{staticClass:"dragArea",attrs:{list:t.filterList2,options:{group:"article"}}},t._l(t.filterList2,function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle2",on:{click:function(e){t.pushEle(i)}}},[t._v(" ["+t._s(i.author)+"] "+t._s(i.title))])])}))],1)])},staticRenderFns:[]};var d=e("VU/8")(l,r,!1,function(t){e("/6hN")},"data-v-d881272e",null).exports,o=e("viA7"),c={name:"dndList-demo",components:{DndList:d},data:function(){return{list1:[],list2:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.listLoading=!0,Object(o.c)().then(function(i){t.list1=i.data.items.splice(0,5),t.list2=i.data.items})}}},p={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"components-container"},[this._m(0),this._v(" "),i("div",{staticClass:"editor-container"},[i("dnd-list",{attrs:{list1:this.list1,list2:this.list2,list1Title:"List",list2Title:"Article pool"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("code",[this._v("drag-list base on\n    "),i("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[this._v("Vue.Draggable")])])}]},u=e("VU/8")(c,p,!1,null,null,null);i.default=u.exports},aJG8:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,'\n.dndList[data-v-d881272e] {\n  background: #fff;\n  padding-bottom: 40px;\n}\n.dndList[data-v-d881272e]:after {\n    content: "";\n    display: table;\n    clear: both;\n}\n.dndList .dndList-list[data-v-d881272e] {\n    float: left;\n    padding-bottom: 30px;\n}\n.dndList .dndList-list[data-v-d881272e]:first-of-type {\n      margin-right: 2%;\n}\n.dndList .dndList-list .dragArea[data-v-d881272e] {\n      margin-top: 15px;\n      min-height: 50px;\n      padding-bottom: 30px;\n}\n.list-complete-item[data-v-d881272e] {\n  cursor: pointer;\n  position: relative;\n  font-size: 14px;\n  padding: 5px 12px;\n  margin-top: 4px;\n  border: 1px solid #bfcbd9;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.list-complete-item-handle[data-v-d881272e] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 50px;\n}\n.list-complete-item-handle2[data-v-d881272e] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 20px;\n}\n.list-complete-item.sortable-chosen[data-v-d881272e] {\n  background: #4AB7BD;\n}\n.list-complete-item.sortable-ghost[data-v-d881272e] {\n  background: #30B08F;\n}\n.list-complete-enter[data-v-d881272e],\n.list-complete-leave-active[data-v-d881272e] {\n  opacity: 0;\n}\n',""])}});