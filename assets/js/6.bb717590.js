(window.webpackJsonp=window.webpackJsonp||[]).push([[6,10],{123:function(t,e,i){"use strict";i.r(e);var r={name:"GiftBox",props:{gift:{type:Object,default:{}}}},n=i(4),a=Object(n.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",{staticClass:"shadow-lg border-0 rounded-0",attrs:{"img-src":t.$withBase("assets/images/cryptogift-header.jpg"),"no-body":""}},[i("h4",{attrs:{slot:"header"},slot:"header"},[t._v("For "+t._s(t.gift.content.receiver))]),t._v(" "),i("b-card-body",[i("p",{staticClass:"card-test"},[t._v(t._s(t.gift.content.message))])]),t._v(" "),i("b-card-footer",[i("small",{staticClass:"text-muted"},[i("strong",[t._v(t._s(t.gift.amount)+" ETH")]),t._v(", From "),i("strong",[t._v(t._s(t.gift.content.sender))]),t._v(" on "),i("strong",[t._v(t._s(t.gift.formattedDate))])])])],1)},[],!1,null,null,null);a.options.__file="GiftBox.vue";e.default=a.exports},193:function(t,e,i){"use strict";i.r(e);i(125);var r=i(126),n=i(123),a=i(131),s=i(132),o=i(136),c={name:"GiftViewer",components:{GiftBox:n.default},mixins:[a.a,s.a,o.a],data:function(){return{loading:!0,encryptionKey:"",gift:{loaded:!1,visible:!1,id:0,amount:0,content:{sender:"",receiver:"",message:""},date:"",style:""}}},mounted:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.currentNetwork=this.getParam("network")||this.network.default,t.next=3,this.initDapp();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{initDapp:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.network.current=this.network.list[this.currentNetwork],t.prev=1,t.next=4,this.initWeb3(this.currentNetwork,!0);case 4:this.initContracts(),this.loading=!1,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0),document.location.href=this.$withBase("/");case 12:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),ready:function(){this.gift.id=this.getParam("id"),this.getTokenVisibility()},getTokenVisibility:function(){var t=this;this.instances.token.isVisible(this.gift.id,function(e,i){if(e)return alert("Some error"),void(t.loading=!1);t.gift.visible=i[0],t.gift.visible||(t.gift.date=1e3*i[1].valueOf(),t.gift.formattedDate=new Date(t.gift.date).toLocaleString()),t.loading=!1})},getToken:function(){var t=this;this.$validator.validateAll().then(function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(i){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i)try{t.instances.token.getGift(t.gift.id,function(e,i){if(e)return alert("Some error"),void(t.loading=!1);t.formatStructure(i)})}catch(t){alert("Some error occurred. Check your Encryption Key")}case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},formatStructure:function(t){this.gift.amount=parseFloat(this.web3.fromWei(t[0])),this.gift.purchaser=t[1],this.gift.beneficiary=t[2],this.gift.content=JSON.parse(JSON.parse(this.web3.toAscii(this.decrypt(t[3],this.encryptionKey)))),this.gift.date=1e3*t[4].valueOf(),this.gift.formattedDate=new Date(this.gift.date).toLocaleString(),this.gift.style=t[5],this.gift.visible=!0,this.gift.loaded=!0}}},f=i(4),u=Object(f.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?t._e():i("div",[i("b-row",[i("b-col",{attrs:{lg:"8","offset-lg":"2"}},[t.gift.visible?[t.gift.loaded?[i("gift-box",{attrs:{gift:t.gift}})]:[i("b-card",{staticClass:"shadow-lg border-0 rounded-0",attrs:{"no-body":""}},[i("b-card-body",[i("b-form",{on:{submit:function(e){return e.preventDefault(),t.getToken(e)}}},[i("b-form-group",{attrs:{id:"gift-encryption-key-group",label:"Encryption Key:","label-for":"gift-encryption-key",description:"Insert the Encryption Key"}},[i("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.errors.has("gift-encryption-key")},attrs:{id:"gift-encryption-key",name:"gift-encryption-key",type:"password"},model:{value:t.encryptionKey,callback:function(e){t.encryptionKey=e},expression:"encryptionKey"}})],1),t._v(" "),i("b-button",{attrs:{type:"submit",variant:"outline-success",size:"lg"}},[t._v("Decrypt your Gift")])],1)],1)],1)]]:[i("b-card",{staticClass:"shadow-lg border-0 rounded-0",attrs:{"no-body":""}},[i("b-card-body",[t.gift.date?i("p",{staticClass:"card-test"},[t._v("Gift will be visible on "+t._s(t.gift.formattedDate))]):i("p",{staticClass:"card-test"},[t._v("Gift doesn't exist")])])],1)]],2)],1)],1)},[],!1,null,null,null);u.options.__file="GiftViewer.vue";e.default=u.exports}}]);