!function(){return function e(t,n,o){function r(a,u){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){return r(t[a][1][e]||e)},c,c.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("./modules/app");window.ControlMouseflowInit=o.ControlMouseflow.start},{"./modules/app":2}],2:[function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function u(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,u)}l((o=o.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.ControlMouseflow=void 0;var i=e("./util"),a=function(){function e(e,t,n,o){this.wid=e,this.locationRule=t,this.optionalRule=n,this.debug=o,this.log("starting module"),this.sessionInitiated=i.isSessionInitiated(this.wid),this.sessionInitiated?this.log("mouseflow session cookie found"):this.log("mouseflow session cookie not found"),this.onDesiredPage=this.isOnDesiredPage()}return e.prototype.log=function(e){i.logger(this.debug,e)},e.prototype.init=function(){this.onDesiredPage&&(this.sessionInitiated?this.injectMouseflow():function(){return o(this,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return[4,i.getAndMatchLocation(this.locationRule,this.debug)];case 1:return e.sent()&&this.injectMouseflow(),[2]}})})}.bind(this)())},e.prototype.isOnDesiredPage=function(){var e=window.document.location.pathname,t=!1;if(this.optionalRule.pageRules.length>0)for(var n=0;n<this.optionalRule.pageRules.length;n++){var o=this.optionalRule.pageRules[n];if(i.matchPath(e,o.pathnames)){if(i.recordingRateMatch(o.recordingRate))return this.log("page '"+e+"' matched in rule set | recordingRate matched"),!0;this.log("page '"+e+"' matched in rule set | recordingRate not matched"),t=!0;break}}return!t&&i.is.number(this.optionalRule.rest.recordingRate)&&i.recordingRateMatch(this.optionalRule.rest.recordingRate)?(this.log("page '"+e+"' not matched in rule set | recordingRate matched"),!0):(!t&&this.log("page '"+e+"' not matched in rule set | recordingRate not matched"),!1)},e.prototype.injectMouseflow=function(){var e,t;void 0!==window._mfq&&void 0!==window.mouseflow?window.mouseflow.websiteId===this.wid?(this.debug&&void 0===window.mouseflowDebug&&window.mouseflow.debug(),window.mouseflow.isRecording()?this.log("mouseflow already injected and recording"):(this.log("mouseflow already injected, starting recording"),window.mouseflow.start())):this.log("mouseflow already injected but websiteId does not match the config"):(this.log("injecting mouseflow"),window._mfq=window._mfq||[],e=this.wid,(t=document.createElement("script")).type="text/javascript",t.defer=!0,t.src="//cdn.mouseflow.com/projects/"+e+".js",document.getElementsByTagName("head")[0].appendChild(t))},e.start=function(t){var n=i.validateConfig(t);n.isValid&&new e(n.websiteId,n.locationRule,n.optionalRule,n.debug).init()},e}();n.ControlMouseflow=a},{"./util":4}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.re=n.locationCalls=n.REQUEST_ERROR=void 0,n.REQUEST_ERROR="requestError",n.locationCalls=["/cdn-cgi/trace","https://ipapi.co/json/"],n.re={wid:/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,ext:/.+?(?=\.)/}},{}],4:[function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function u(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,u)}l((o=o.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.matchPath=n.getAndMatchLocation=n.recordingRateMatch=n.validateConfig=n.isSessionInitiated=n.logger=n.is=void 0;var i=e("./constants"),a=function(e,t){if(e.length>0)for(var n=0;n<e.length;n++)if(void 0!==e[n]&&!t(e[n]))return!1;return e.length>0},u=function(e){return o(void 0,void 0,void 0,function(){var t,a;return r(this,function(u){switch(u.label){case 0:t=0,u.label=1;case 1:return t<i.locationCalls.length?(n.logger(e,"fetching client location from '"+i.locationCalls[t]+"'"),[4,function(e,t){return o(void 0,void 0,void 0,function(){var o;return r(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,fetch(e)];case 1:return 200===(o=r.sent()).status?[2,o.text()]:[3,3];case 2:return r.sent(),n.logger(t,"request failed, likely blocked by client"),[2,i.REQUEST_ERROR];case 3:return[2,""]}})})}(i.locationCalls[t],e)]):[3,4];case 2:if((a=u.sent())===i.REQUEST_ERROR)return[3,4];if(a.length>0)return n.logger(e,"successfully fetched location"),[2,a];n.logger(e,"failed to fetch location"),u.label=3;case 3:return t++,[3,1];case 4:return[2,""]}})})},l=function(e,t,o){if(t.countryCodes.length>0)for(var r=0;r<t.countryCodes.length;r++)if(t.countryCodes[r].toLowerCase()===e)return n.logger(o,"matched country: "+e+" include: "+t.include),t.include;return n.logger(o,"not matched country: "+e+" include: "+!t.include),!t.include};n.is={string:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a(e,function(e){return"string"==typeof e})},number:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a(e,function(e){return"number"==typeof e&&!isNaN(e)})},array:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a(e,function(e){return"object"==typeof e&&Array.isArray(e)})},defined:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a(e,function(e){return!(void 0===e)})}},n.logger=function(e,t){e&&console.log("ControlMouseflowDebug: "+t)},n.isSessionInitiated=function(e){return!!n.is.string(e)&&new RegExp("mf_"+e).test(document.cookie)},n.validateConfig=function(e){if(n.is.defined(e)){if(e.optionalRule=e.optionalRule||{pageRules:[],rest:{recordingRate:100}},e.locationRule.shouldRecordOnError=void 0===e.locationRule.shouldRecordOnError||e.locationRule.shouldRecordOnError,e.debug=e.debug||!1,!n.is.defined(e.websiteId)||!i.re.wid.test(e.websiteId))throw Error("invalid websiteId provided");if(!n.is.defined(e.locationRule.include,e.locationRule.countryCodes)||e.locationRule.countryCodes.length<=0)throw Error("invalid locationRule provided");if(n.is.defined(e.optionalRule)&&!n.is.array(e.optionalRule.pageRules)||!n.is.number(e.optionalRule.rest.recordingRate))throw Error("invalid optionalRule provided");return e.isValid=!0,e}throw Error("no config provided")},n.recordingRateMatch=function(e){return!!n.is.number(e)&&Math.floor(100*Math.random()+1)<=e},n.getAndMatchLocation=function(e,t){return o(void 0,void 0,void 0,function(){var i,a;return r(this,function(s){switch(s.label){case 0:return i=e.shouldRecordOnError,[4,u(t)];case 1:return(a=s.sent()).length>0?[2,function(e,t,n){return o(void 0,void 0,void 0,function(){var o,i,a,u,s,c,d;return r(this,function(r){o=!1;try{return i=JSON.parse(e),[2,l(i.country.toLowerCase(),t,n)]}catch(o){for(a=e.split("\n"),u=0;u<a.length;u++)if(s=a[u].split("="),c=s[0],d=s[1],"LOC"===c.toUpperCase()&&l(d.toLowerCase(),t,n))return[2,!0]}return[2,o]})})}(a,e,t)]:(n.logger(t,"all location lookups failed. reverting to default behavior: "+(i?"record":"not record")),[2,i])}})})},n.matchPath=function(e,t){if(n.is.string(e)&&n.is.array(t)&&t.length>0){e=e.toLowerCase();for(var o=0;o<t.length;o++){var r=t[o].toLowerCase(),a=i.re.ext.exec(r);if(a?a[0]===e:r===e)return!0}}else if(n.is.string(e)&&n.is.string(t))return e===t;return!1}},{"./constants":3}]},{},[1]);