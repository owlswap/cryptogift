(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{131:function(t,e,a){"use strict";a.r(e);var s={name:"GiftBox",props:{gift:{type:Object,default:{}},network:{type:Object,default:{}}},computed:{image:function(){return"assets/images/"+(this.gift.style?"styles/".concat(this.gift.style,".jpg"):"cryptogift-header.jpg")},formattedDate:function(){return new Date(this.gift.date).toLocaleString()},tokenExplorerLink:function(){return this.network.etherscanLink+"/token/0x970E90Db5bFd3E4dEa453fb061E1146eE3e23Df8?a="+this.gift.id}}},n=a(5),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow border-0 rounded-0",attrs:{"no-body":"","img-src":t.$withBase(t.image)}},[a("b-card-body",[a("h5",[t._v("Dear "+t._s(t.gift.content.receiver)+",  "),t.gift.id?a("b-badge",{staticClass:"float-right",attrs:{href:t.tokenExplorerLink,target:"_blank",variant:"secondary"}},[t._v("#"+t._s(t.gift.id))]):t._e()],1),t._v(" "),a("p",{staticClass:"card-text pt-4 pb-3"},[t._v(t._s(t.gift.content.message))]),t._v(" "),a("h6",[t._v(t._s(t.gift.content.sender))]),t._v(" "),a("small",[t._v(t._s(t.formattedDate))])]),t._v(" "),t.gift.amount>0?a("b-card-footer",[a("small",{staticClass:"text-muted"},[t._v("\n            You received "),a("strong",[t._v(t._s(t.gift.amount)+" ETH")])])]):t._e()],1)}),[],!1,null,null,null);e.default=r.exports}}]);