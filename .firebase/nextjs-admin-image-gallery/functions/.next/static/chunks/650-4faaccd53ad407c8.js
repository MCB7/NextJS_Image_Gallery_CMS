"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{6650:function(e,t,r){r.d(t,{oq:function(){return eb},Jt:function(){return em},cF:function(){return eR},iH:function(){return eT},B0:function(){return eg}});var s,n,i,o,a=r(5816),l=r(4444),h=r(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="firebasestorage.googleapis.com",c="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends l.ZR{constructor(e,t,r=0){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function p(){return new _(i.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function f(){return new _(i.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g(){return new _(i.CANCELED,"User canceled the upload/download.")}function m(){return new _(i.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b(e){return new _(i.INVALID_ARGUMENT,e)}function T(){return new _(i.APP_DELETED,"The Firebase app was deleted.")}function R(e,t){return new _(i.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function w(e){throw new _(i.INTERNAL_ERROR,"Internal error: "+e)}(s=i||(i={})).UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=E.makeFromUrl(e,t)}catch(t){return new E(e,"")}if(""===r.path)return r;throw new _(i.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,s="([A-Za-z0-9.\\-_]+)",n=RegExp("^gs://"+s+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),l=RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),h=RegExp(`^https?://${t===u?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${s}/([^?#]*)`,"i"),c=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:l,indices:{bucket:1,path:3},postModify:o},{regex:h,indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<c.length;t++){let s=c[t],n=s.regex.exec(e);if(n){let e=n[s.indices.bucket],t=n[s.indices.path];t||(t=""),r=new E(e,t),s.postModify(r);break}}if(null==r)throw new _(i.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class v{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function k(e){return"string"==typeof e||e instanceof String}function y(e){return U()&&e instanceof Blob}function U(){return"undefined"!=typeof Blob&&!(0,l.UG)()}function O(e,t,r,s){if(s<t)throw b(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>r)throw b(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t,r){let s=t;return null==r&&(s=`https://${t}`),`${r}://${s}/v0${e}`}function A(e){let t=encodeURIComponent,r="?";for(let s in e)if(e.hasOwnProperty(s)){let n=t(s)+"="+t(e[s]);r=r+n+"&"}return r.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){let r=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return e>=500&&e<600||r||s}(n=o||(o={}))[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t,r,s,n,i,o,a,l,h,u,c=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=n,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=u,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new S(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let s=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(s),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(s),this.pendingConnection_=null;let t=r.getErrorCode()===o.NO_ERROR,n=r.getStatus();if(!t||N(n,this.additionalRetryCodes_)&&this.retry){let t=r.getErrorCode()===o.ABORT;e(!1,new S(!1,null,t));return}let i=-1!==this.successCodes_.indexOf(n);e(!0,new S(i,r))})},t=(e,t)=>{let r=this.resolve_,s=this.reject_,n=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(n,n.getResponse());void 0!==e?r(e):r()}catch(e){s(e)}else if(null!==n){let e=p();e.serverResponse=n.getErrorText(),s(this.errorCallback_?this.errorCallback_(n,e):e)}else if(t.canceled){let e=this.appDelete_?T():g();s(e)}else{let e=f();s(e)}};this.canceled_?t(!1,new S(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){let s=1,n=null,i=null,o=!1,a=0,l=!1;function h(...e){l||(l=!0,t.apply(null,e))}function u(t){n=setTimeout(()=>{n=null,e(_,2===a)},t)}function c(){i&&clearTimeout(i)}function _(e,...t){let r;if(l){c();return}if(e){c(),h.call(null,e,...t);return}let n=2===a||o;if(n){c(),h.call(null,e,...t);return}s<64&&(s*=2),1===a?(a=2,r=0):r=(s+Math.random())*1e3,u(r)}let d=!1;function p(e){!d&&(d=!0,c(),!l&&(null!==n?(e||(a=2),clearTimeout(n),u(0)):e||(a=1)))}return u(0),i=setTimeout(()=>{o=!0,p(!0)},r),p}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class S{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function x(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(U())return new Blob(e);throw new _(i.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class D{constructor(e,t){this.data=e,this.contentType=t||null}}function L(e){let t=[];for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|63&s);else if((64512&s)==55296){let n=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(n){let n=s,i=e.charCodeAt(++r);s=65536|(1023&n)<<10|1023&i,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else t.push(239,191,189)}else(64512&s)==56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(t)}function B(e,t){let r;switch(e){case P.BASE64:{let r=-1!==t.indexOf("-"),s=-1!==t.indexOf("_");if(r||s)throw R(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{let r=-1!==t.indexOf("+"),s=-1!==t.indexOf("/");if(r||s)throw R(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("undefined"==typeof atob)throw new _(i.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw R(e,"Invalid character found")}let s=new Uint8Array(r.length);for(let e=0;e<r.length;e++)s[e]=r.charCodeAt(e);return s}class M{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw R(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t){let r=0,s="";y(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(y(this.data_)){let r=this.data_,s=r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===s?null:new q(s)}{let r=new Uint8Array(this.data_.buffer,e,t-e);return new q(r,!0)}}static getBlob(...e){if(U()){let t=e.map(e=>e instanceof q?e.data_:e);return new q(x.apply(null,t))}{let t=e.map(e=>k(e)?function(e,t){switch(e){case P.RAW:return new D(L(t));case P.BASE64:case P.BASE64URL:return new D(B(e,t));case P.DATA_URL:return new D(function(e){let t=new M(e);return t.base64?B(P.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw R(P.DATA_URL,"Malformed data URL.")}return L(t)}(t.rest)}(t),function(e){let t=new M(e);return t.contentType}(t))}throw p()}(P.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let s=new Uint8Array(r),n=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)s[n++]=e[t]}),new q(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function H(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){return t}class V{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||z}}let j=null;function G(){if(j)return j;let e=[];e.push(new V("bucket")),e.push(new V("generation")),e.push(new V("metageneration")),e.push(new V("name","fullPath",!0));let t=new V("name");t.xform=function(e,t){return!k(t)||t.length<2?t:H(t)},e.push(t);let r=new V("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new V("timeCreated")),e.push(new V("updated")),e.push(new V("md5Hash",null,!0)),e.push(new V("cacheControl",null,!0)),e.push(new V("contentDisposition",null,!0)),e.push(new V("contentEncoding",null,!0)),e.push(new V("contentLanguage",null,!0)),e.push(new V("contentType",null,!0)),e.push(new V("metadata","customMetadata",!0)),j=e}function X(e,t,r){let s=F(t);return null===s?null:function(e,t,r){let s={};s.type="file";let n=r.length;for(let e=0;e<n;e++){let n=r[e];s[n.local]=n.xform(s,t[n.server])}return Object.defineProperty(s,"ref",{get:function(){let t=s.bucket,r=s.fullPath,n=new E(t,r);return e._makeStorageReference(n)}}),s}(e,s,r)}function $(e,t){let r={},s=t.length;for(let n=0;n<s;n++){let s=t[n];s.writable&&(r[s.server]=e[s.local])}return JSON.stringify(r)}class W{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(!e)throw p()}function Z(e,t){return function(r,s){let n=X(e,s,t);return K(null!==n),n}}function J(e){return function(t,r){var s,n;let o;return 401===t.getStatus()?o=t.getErrorText().includes("Firebase App Check token is invalid")?new _(i.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new _(i.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,o=new _(i.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(n=e.path,o=new _(i.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")):o=r,o.status=t.getStatus(),o.serverResponse=r.serverResponse,o}}function Y(e){let t=J(e);return function(r,s){let n=t(r,s);if(404===r.getStatus()){var o;o=e.path,n=new _(i.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")}return n.serverResponse=s.serverResponse,n}}function Q(e,t,r){let s=Object.assign({},r);return s.fullPath=e.path,s.size=t.size(),!s.contentType&&(s.contentType=t&&t.type()||"application/octet-stream"),s}class ee{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function et(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){K(!1)}return K(!!r&&-1!==(t||["active"]).indexOf(r)),r}let er={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function es(e){switch(e){case"running":case"pausing":case"canceling":return er.RUNNING;case"paused":return er.PAUSED;case"success":return er.SUCCESS;case"canceled":return er.CANCELED;default:return er.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class eo{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=o.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=o.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=o.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw w("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==s)for(let e in s)s.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,s[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw w("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw w("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw w("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw w("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ea extends eo{initXhr(){this.xhr_.responseType="text"}}function el(){return new ea}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=G(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(i.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(N(e.status,[])){if(t)e=f();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(i.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,s,n){let i=t.bucketOnlyServerUrl(),o=Q(t,s,n),a={name:o.fullPath},l=C(i,e.host,e._protocol),h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=$(o,r),c=e.maxUploadRetryTime,_=new W(l,"POST",function(e){let t;et(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){K(!1)}return K(k(t)),t},c);return _.urlParams=a,_.headers=h,_.body=u,_.errorHandler=J(t),_}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,el,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let s=function(e,t,r,s){let n=e.maxUploadRetryTime,i=new W(r,"POST",function(e){let t=et(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){K(!1)}r||K(!1);let n=Number(r);return K(!isNaN(n)),new ee(n,s.size(),"final"===t)},n);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=J(t),i}(this._ref.storage,this._ref._location,e,this._blob),n=this._ref.storage._makeRequest(s,el,t,r);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new ee(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,n)=>{let o;try{o=function(e,t,r,s,n,o,a,l){let h=new ee(0,0);if(a?(h.current=a.current,h.total=a.total):(h.current=0,h.total=s.size()),s.size()!==h.total)throw new _(i.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let u=h.total-h.current,c=u;n>0&&(c=Math.min(c,n));let d=h.current,p=d+c,f="";f=0===c?"finalize":u===c?"upload, finalize":"upload";let g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${h.current}`},b=s.slice(d,p);if(null===b)throw m();let T=t.maxUploadRetryTime,R=new W(r,"POST",function(e,r){let n;let i=et(e,["active","final"]),a=h.current+c,l=s.size();return n="final"===i?Z(t,o)(e,r):null,new ee(a,l,"final"===i,n)},T);return R.headers=g,R.body=b.uploadData(),R.progressCallback=l||null,R.errorHandler=J(e),R}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let a=this._ref.storage._makeRequest(o,el,s,n,!1);this._request=a,a.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=function(e,t,r){let s=t.fullServerUrl(),n=C(s,e.host,e._protocol),i=e.maxOperationRetryTime,o=new W(n,"GET",Z(e,r),i);return o.errorHandler=Y(t),o}(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,el,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,s,n){let i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;let l=Q(t,s,n),h=$(l,r),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",c=q.getBlob(u,s,"\r\n--"+a+"--");if(null===c)throw m();let _={name:l.fullPath},d=C(i,e.host,e._protocol),p=e.maxUploadRetryTime,f=new W(d,"POST",Z(e,r),p);return f.urlParams=_,f.headers=o,f.body=c.uploadData(),f.errorHandler=J(t),f}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,el,e,t);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=g(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=es(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){let n=new en(t||void 0,r||void 0,s||void 0);return this._addObserver(n),()=>{this._removeObserver(n)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(es(this._state)){case er.SUCCESS:ei(this._resolve.bind(null,this.snapshot))();break;case er.CANCELED:case er.ERROR:let t=this._reject;ei(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=es(this._state);switch(t){case er.RUNNING:case er.PAUSED:e.next&&ei(e.next.bind(e,this.snapshot))();break;case er.SUCCESS:e.complete&&ei(e.complete.bind(e))();break;case er.CANCELED:case er.ERROR:default:e.error&&ei(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this._service=e,t instanceof E?this._location=t:this._location=E.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new eu(e,t)}get root(){let e=new E(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return H(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new E(this._location.bucket,e);return new eu(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new _(i.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function ec(e,t){let r=null==t?void 0:t[c];return null==r?null:E.makeFromBucketSpec(r,e)}class e_{constructor(e,t,r,s,n){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=n,this._bucket=null,this._host=u,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=s?this._bucket=E.makeFromBucketSpec(s,this._host):this._bucket=ec(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=E.makeFromBucketSpec(this._url,e):this._bucket=ec(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){O("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){O("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new eu(this,e)}_makeRequest(e,t,r,s,n=!0){if(this._deleted)return new v(T());{let i=function(e,t,r,s,n,i,o=!0){var a,l,h;let u=A(e.urlParams),c=e.url+u,_=Object.assign({},e.headers);return a=_,t&&(a["X-Firebase-GMPID"]=t),l=_,null!==r&&r.length>0&&(l.Authorization="Firebase "+r),_["X-Firebase-Storage-Version"]="webjs/"+(null!=i?i:"AppManager"),h=_,null!==s&&(h["X-Firebase-AppCheck"]=s),new I(c,e.method,_,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n,o)}(e,this._appId,r,s,t,this._firebaseVersion,n);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){let[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}let ed="@firebase/storage",ep="0.11.1",ef="storage";function eg(e,t,r){var s;return(s=e=(0,l.m9)(e))._throwIfRoot("uploadBytesResumable"),new eh(s,new q(t),r)}function em(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let s=t.fullServerUrl(),n=C(s,e.host,e._protocol),i=e.maxOperationRetryTime,o=new W(n,"GET",function(t,s){let n=X(e,s,r);return K(null!==n),function(e,t,r,s){let n=F(t);if(null===n||!k(n.downloadTokens))return null;let i=n.downloadTokens;if(0===i.length)return null;let o=encodeURIComponent,a=i.split(","),l=a.map(t=>{let n=e.bucket,i=e.fullPath,a="/b/"+o(n)+"/o/"+o(i),l=C(a,r,s),h=A({alt:"media",token:t});return l+h});return l[0]}(n,s,e.host,e._protocol)},i);return o.errorHandler=Y(t),o}(e.storage,e._location,G());return e.storage.makeRequestWithTokens(t,el).then(e=>{if(null===e)throw new _(i.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function eb(e){return function(e){e._throwIfRoot("deleteObject");let t=function(e,t){let r=t.fullServerUrl(),s=C(r,e.host,e._protocol),n=e.maxOperationRetryTime,i=new W(s,"DELETE",function(e,t){},n);return i.successCodes=[200,204],i.errorHandler=Y(t),i}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,el)}(e=(0,l.m9)(e))}function eT(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof e_){if(null==t._bucket)throw new _(i.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?");let s=new eu(t,t._bucket);return null!=r?e(s,r):s}return void 0!==r?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),s=new E(e._location.bucket,r);return new eu(e.storage,s)}(t,r):t}(e,t);if(e instanceof e_)return new eu(e,t);throw b("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function eR(e=(0,a.Mq)(),t){e=(0,l.m9)(e);let r=(0,a.qX)(e,ef),s=r.getImmediate({identifier:t}),n=(0,l.P0)("storage");return n&&function(e,t,r,s={}){!function(e,t,r,s={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:n}=s;n&&(e._overrideAuthToken="string"==typeof n?n:(0,l.Sg)(n,e.app.options.projectId))}(e,t,r,s)}(s,...n),s}(0,a.Xd)(new h.wA(ef,function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new e_(r,s,n,t,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(ed,ep,""),(0,a.KN)(ed,ep,"esm2017")}}]);