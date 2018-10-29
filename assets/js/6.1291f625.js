(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(e,t,r){"use strict";r.r(t);r(45),r(121);var a=r(122),i=r(126),n=r(127),s=r(131),o={name:"GiftSender",mixins:[i.a,n.a,s.a],props:["message"],data:function(){return{loading:!0,currentNetwork:null,price:1e-4,trxHash:"",trxLink:"",tokenLink:"",makingTransaction:!1,encryptionKey:"",gift:{beneficiary:"",content:{sender:"",receiver:"",message:""},date:"",style:0,value:"",privacyAndTerms:!1}}},computed:{totalPrice:function(){return parseFloat(this.price)+parseFloat(this.gift.value||0)}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=Object(a.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.network.current=this.network.list[this.currentNetwork],e.prev=1,e.next=4,this.initWeb3(this.currentNetwork,!0);case 4:this.initContracts(),this.loading=!1,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0),document.location.href=this.$withBase("/");case 12:case"end":return e.stop()}},e,this,[[1,8]])}));return function(){return e.apply(this,arguments)}}(),ready:function(){var e=this;this.$validator.extend("eth_address",{getMessage:function(e){return"Insert a valid Ethereum wallet address."},validate:function(t){return e.web3.isAddress(t)}})},createGift:function(){var e=this;this.metamask.installed?this.metamask.netId===this.network.current.id?this.$validator.validateAll().then(function(){var t=Object(a.a)(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=16;break}if(t.prev=1,e.trxHash="",e.trxLink="",e.encryptionKey="",e.makingTransaction=!0,e.legacy){t.next=9;break}return t.next=9,e.web3Provider.enable();case 9:setTimeout(function(){e.encryptionKey=e.randomKey();var t=e.encrypt(JSON.stringify(e.gift.content),e.encryptionKey),r=e.gift.beneficiary||e.web3.eth.coinbase;e.instances.market.buyToken(r,t,new Date(e.gift.date).getTime()/1e3,e.gift.style,{value:e.web3.toWei(e.totalPrice,"ether"),from:e.web3.eth.coinbase},function(t,a){t?(e.makingTransaction=!1,alert("Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!")):(e.trxHash=a,e.trxLink=e.network.current.etherscanLink+"/tx/"+e.trxHash,e.instances.market.TokenPurchase({purchaser:e.web3.eth.coinbase,beneficiary:r},function(t,r){t?(e.makingTransaction=!1,alert("Some error occurred. Maybe transaction failed for some reasons. Check your transaction id.")):e.tokenLink="view.html?id=".concat(r.args.tokenId.valueOf())}))})},500),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),e.makingTransaction=!1,alert("Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!");case 16:case"end":return t.stop()}},t,this,[[1,12]])}));return function(e){return t.apply(this,arguments)}}()):alert("Your MetaMask in on the wrong network. Please switch on ".concat(this.network.current.name," and try again!")):alert("To create a Gift please install MetaMask!")}}},c=r(4),l=Object(c.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?e._e():r("div",[r("b-row",[r("b-col",{attrs:{lg:"8","offset-lg":"2"}},[r("b-card",{staticClass:"shadow-lg",attrs:{"bg-variant":"light"}},[e.metamask.installed?e.metamask.netId!==e.network.current.id?r("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("\n                    You are on the wrong Network."),r("br"),e._v("Please switch your MetaMask on "),r("b",[e._v(e._s(e.network.current.name))]),e._v(".\n                ")]):e._e():r("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("\n                    You need the "),r("a",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("MetaMask")]),e._v(" extension.\n                ")]),e._v(" "),e.makingTransaction?r("div",[e.encryptionKey?r("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("\n                        Your encryption key is "),r("b",[e._v(e._s(e.encryptionKey))]),e._v("."),r("br"),e._v("\n                        It allows receiver to decrypt your message. You must share it with Gift receiver."),r("br"),e._v(" "),r("b",[e._v("Do not lose it!")]),e._v(" It cannot be recovered if you lose it.\n                    ")]):e._e(),e._v(" "),r("div",[e._v("Making transaction. Do not refresh the page. Please wait...")]),e._v(" "),e.trxHash?r("div",[r("div",[r("b",[e._v("Well! Transaction done!")]),r("br"),e._v("\n                            Transaction id "),r("a",{attrs:{href:e.trxLink,target:"_blank"}},[e._v(e._s(e.trxHash))])]),e._v(" "),e.tokenLink?r("b-alert",{staticClass:"mt-3",attrs:{show:"",variant:"success"}},[r("b",[e._v("Visit your "),r("a",{attrs:{href:e.tokenLink}},[e._v("Gift page")]),e._v(".")])]):r("div",[e._v("\n                            Retrieving Gift. Please wait...\n                        ")])],1):e._e()],1):r("b-form",{on:{submit:function(t){return t.preventDefault(),e.createGift(t)}}},[r("fieldset",{attrs:{disabled:!e.metamask.installed||e.makingTransaction}},[r("b-form-group",{attrs:{id:"gift-sender-group",label:"Sender Name:","label-for":"gift-sender",description:"The name of your gift sender"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-sender")},attrs:{id:"gift-sender",name:"gift-sender",type:"text",placeholder:"Enter sender name"},model:{value:e.gift.content.sender,callback:function(t){e.$set(e.gift.content,"sender",t)},expression:"gift.content.sender"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-receiver-group",label:"Receiver Name:","label-for":"gift-receiver",description:"The name of your gift receiver"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-receiver")},attrs:{id:"gift-receiver",name:"gift-receiver",type:"text",placeholder:"Enter receiver name"},model:{value:e.gift.content.receiver,callback:function(t){e.$set(e.gift.content,"receiver",t)},expression:"gift.content.receiver"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-date-group",label:"Date:","label-for":"gift-date",description:"The date of your gift"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-date")},attrs:{id:"gift-date",name:"gift-date",type:"datetime-local"},model:{value:e.gift.date,callback:function(t){e.$set(e.gift,"date",t)},expression:"gift.date"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-message-group",label:"Message:","label-for":"gift-message",description:"The message you want to send"}},[r("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-message")},attrs:{id:"gift-message",name:"gift-message",placeholder:"Enter your message",rows:4,"no-resize":!0},model:{value:e.gift.content.message,callback:function(t){e.$set(e.gift.content,"message",t)},expression:"gift.content.message"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-value-group",label:"Gift Value:","label-for":"gift-value",description:"The value of your gift"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-value")},attrs:{id:"gift-value",name:"gift-value",step:"any",type:"number",min:"0",placeholder:"Enter gift value"},model:{value:e.gift.value,callback:function(t){e.$set(e.gift,"value",t)},expression:"gift.value"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-beneficiary-group",label:"Receiver Ethereum Address:","label-for":"gift-beneficiary",description:"The Ethereum address of your receiver"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|eth_address",expression:"'required|eth_address'"}],class:{"is-invalid":e.errors.has("gift-beneficiary")},attrs:{id:"gift-beneficiary",name:"gift-beneficiary",type:"text",placeholder:"0x12312312..."},model:{value:e.gift.beneficiary,callback:function(t){e.$set(e.gift,"beneficiary",t)},expression:"gift.beneficiary"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"gift-style-group",label:"Style:","label-for":"gift-style",description:"The style of your gift"}},[r("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("gift-style")},attrs:{id:"gift-style",name:"gift-style"},model:{value:e.gift.style,callback:function(t){e.$set(e.gift,"style",t)},expression:"gift.style"}},[r("option",{attrs:{value:"0"}},[e._v("default")])])],1),e._v(" "),r("b-form-group",[r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.gift.privacyAndTerms,expression:"gift.privacyAndTerms"}],staticClass:"form-check-input",class:{"is-invalid":e.errors.has("gift-privacy-and-term")},attrs:{type:"checkbox",id:"gift-privacy-and-term",name:"gift-privacy-and-term",value:"1"},domProps:{checked:Array.isArray(e.gift.privacyAndTerms)?e._i(e.gift.privacyAndTerms,"1")>-1:e.gift.privacyAndTerms},on:{change:function(t){var r=e.gift.privacyAndTerms,a=t.target,i=!!a.checked;if(Array.isArray(r)){var n=e._i(r,"1");a.checked?n<0&&e.$set(e.gift,"privacyAndTerms",r.concat(["1"])):n>-1&&e.$set(e.gift,"privacyAndTerms",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.gift,"privacyAndTerms",i)}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"gift-privacy-and-term"}},[e._v("\n                                    I accept the terms and use\n                                ")])])]),e._v(" "),r("b-alert",{attrs:{show:"",variant:"info"}},[e._v("Total price: "+e._s(e.totalPrice)+" ETH")]),e._v(" "),r("b-button",{attrs:{type:"submit",variant:"success",size:"lg"}},[e._v("Submit")])],1)])],1)],1)],1)],1)},[],!1,null,null,null);l.options.__file="GiftSender.vue";t.default=l.exports}}]);