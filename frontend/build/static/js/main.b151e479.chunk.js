(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),s=n.n(r),o=n(6),i=n(5),l=n(8),u=n(7),p=n(4),j=n.n(p),b=n(10),d=n(13),h=n.n(d),m="LOGIN_SUCCESS",O="LOGIN_FAIL",f="SIGNUP_SUCCESS",x="SIGNUP_FAIL",v="ACTIVATION_SUCCESS",g="ACTIVATION_FAIL",y="USER_LOADED_SUCCESS",w="USER_LOADED_FAIL",S="AUTHENTICATED_SUCCESS",N="AUTHENTICATED_FAIL",_="RESET_PASSWORD_SUCCESS",C="RESET_PASSWORD_FAIL",A="RESET_PASSWORD_CONFIRM_SUCCESS",k="RESET_PASSWORD_CONFIRM_FAIL",I="GOOGLE_AUTH_SUCCESS",E="GOOGLE_AUTH_FAIL",T="LOGOUT",L=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,h.a.get("".concat("http://localhost:8000","/auth/users/me/"),n);case 5:a=e.sent,t({type:y,payload:a.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),t({type:w});case 13:e.next=16;break;case 15:t({type:w});case 16:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},U=n(0),R=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:T});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,n=e.logout,c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],u=r[1],p=function(){n(),u(!0)};return Object(U.jsxs)(a.Fragment,{children:[Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(U.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Auth System"}),Object(U.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(U.jsxs)("ul",{className:"navbar-nav",children:[Object(U.jsx)("li",{className:"nav-item active",children:Object(U.jsx)(o.b,{className:"nav-link",to:"/",children:"Home"})}),t?Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)("a",{href:"#!",className:"nav-link",onClick:p,children:"Logout"})}):Object(U.jsxs)(a.Fragment,{children:[Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(o.b,{className:"nav-link",to:"/signup",children:"Sign Up"})})]})]})})]})}),s?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsx)(a.Fragment,{})]})})),D=n(38),F=n.n(D),P=Object(u.b)(null,{checkAuthenticated:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=16;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,h.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),a,n);case 6:"token_not_valid"!==e.sent.data.code?t({type:S}):t({type:N}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),t({type:N});case 14:e.next=17;break;case 16:t({type:N});case 17:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:L,googleAuthenticate:function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(a){var c,r,s,o;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t||localStorage.getItem("access")){n.next=15;break}return c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},r={state:e,code:t},s=Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])})).join("&"),n.prev=4,n.next=7,h.a.post("".concat("http://localhost:8000","/auth/o/google-oauth2/?").concat(s),c);case 7:o=n.sent,a({type:I,payload:o.data}),a(L()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),a({type:E});case 15:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=Object(i.g)();return Object(a.useEffect)((function(){var n=F.a.parse(t.search),a=n.state?n.state:null,c=n.code?n.code:null;console.log("state"+a),console.log("code"+c),a&&c?e.googleAuthenticate(a,c):(e.checkAuthenticated(),e.load_user())}),[t]),Object(U.jsxs)("div",{children:[Object(U.jsx)(R,{}),e.children]})})),q=function(){return Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{class:"jumbotron mt-5",children:[Object(U.jsx)("h1",{class:"display-4",children:"Welcome to Auth System!"}),Object(U.jsx)("p",{class:"lead",children:"This is an incredible authentication system with production level features!"}),Object(U.jsx)("hr",{class:"my-4"}),Object(U.jsx)("p",{children:"Click the Log In button"}),Object(U.jsx)(o.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Login"})]})})},G=n(16),W=n(2),J=(n(88),Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(a){var c,r,s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,h.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),r,c);case 5:s=n.sent,a({type:m,payload:s.data}),a(L()),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0),a({type:O});case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),r=Object(l.a)(c,2),s=r[0],u=r[1],p=s.email,d=s.password,m=function(e){return u(Object(W.a)(Object(W.a)({},s),{},Object(G.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat("http://localhost:8000","/auth/o/google-oauth2/?redirect_uri=http://localhost:8000"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsxs)("div",{className:"container mt-5",children:[Object(U.jsx)("h1",{children:"Sign In"}),Object(U.jsx)("p",{children:"Sign into your Account"}),Object(U.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(p,d)}(e)},children:[Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:p,onChange:function(e){return m(e)},required:!0})}),Object(U.jsx)("div",{className:"form-group mt-2",children:Object(U.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:d,onChange:function(e){return m(e)},minLength:"6",required:!0})}),Object(U.jsx)("button",{className:"btn btn-primary mt-2",type:"submit",children:"Login"})]}),Object(U.jsx)("button",{className:"btn btn-danger mt-3",onClick:O,children:"Continue With Google"}),Object(U.jsx)("br",{}),Object(U.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){},children:"Continue With Facebook"}),Object(U.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(U.jsx)(o.b,{to:"/signup",children:"Sign Up"})]}),Object(U.jsxs)("p",{className:"mt-3",children:["Forgot your Password? ",Object(U.jsx)(o.b,{to:"/reset-password",children:"Reset Password"})]})]})}))),H=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,n,a,c){return function(){var r=Object(b.a)(j.a.mark((function r(s){var o,i;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o={headers:{"Content-Type":"application/json"}},i=JSON.stringify({first_name:e,last_name:t,email:n,password:a,re_password:c}),r.prev=2,r.next=5,h.a.post("".concat("http://localhost:8000","/auth/users/"),i,o);case 5:s({type:f}),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(2),console.log(r.t0),s({type:x});case 12:case"end":return r.stop()}}),r,null,[[2,8]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.signup,n=e.isAuthenticated,c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],u=r[1],p=Object(a.useState)({first_name:"",last_name:"",email:"",password:"",re_password:""}),d=Object(l.a)(p,2),m=d[0],O=d[1],f=m.first_name,x=m.last_name,v=m.email,g=m.password,y=m.re_password,w=function(e){return O(Object(W.a)(Object(W.a)({},m),{},Object(G.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("http://localhost:8000","/auth/o/google-oauth2/?redirect_uri=").concat("http://localhost:8000"));case 2:t=e.sent,window.location.replace(t.data.authorization_url);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n||s?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsxs)("div",{className:"container mt-5",children:[Object(U.jsx)("h1",{children:"Sign Up"}),Object(U.jsx)("p",{children:"Create a new Account"}),Object(U.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),g===y?(t(f,x,v,g,y),u(!0)):alert("Password not same")}(e)},children:[Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{className:"form-control",type:"text",placeholder:"First Name",name:"first_name",value:f,onChange:function(e){return w(e)},required:!0})}),Object(U.jsx)("div",{className:"form-group mt-2",children:Object(U.jsx)("input",{className:"form-control",type:"text",placeholder:"Last Name",name:"last_name",value:x,onChange:function(e){return w(e)},required:!0})}),Object(U.jsx)("div",{className:"form-group mt-2",children:Object(U.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:v,onChange:function(e){return w(e)},required:!0})}),Object(U.jsx)("div",{className:"form-group mt-2",children:Object(U.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:g,onChange:function(e){return w(e)},minLength:"6",required:!0})}),Object(U.jsx)("div",{className:"form-group mt-2",children:Object(U.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm Password",name:"re_password",value:y,onChange:function(e){return w(e)},minLength:"6",required:!0})}),Object(U.jsx)("button",{className:"btn btn-primary mt-2",type:"submit",children:"Register"})]}),Object(U.jsx)("button",{className:"btn btn-danger mt-3",onClick:S,children:"Continue With Google"}),Object(U.jsx)("br",{}),Object(U.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){},children:"Continue With Facebook"}),Object(U.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(U.jsx)(o.b,{to:"/login",children:"Login"})]})]})})),M=Object(u.b)(null,{verify:function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(a){var c,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({uid:e,token:t}),n.prev=2,n.next=5,h.a.post("".concat("http://localhost:8000","/auth/users/activation/"),r,c);case 5:a({type:v}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(2),console.log(n.t0),a({type:g});case 12:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.verify,n=e.match,c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],o=r[1];return s?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(U.jsx)("h1",{children:"Verify your Account:"}),Object(U.jsx)("button",{onClick:function(e){e.preventDefault();var a=n.params.uid,c=n.params.token;t(a,c),o(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),V=Object(u.b)(null,{reset_password:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,h.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),c,a);case 5:n({type:_}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0),n({type:C});case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)({email:""}),u=Object(l.a)(o,2),p=u[0],j=u[1],b=p.email;return r?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsxs)("div",{className:"container mt-5",children:[Object(U.jsx)("h1",{children:"Request Password Reset"}),Object(U.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(b),s(!0)}(e)},children:[Object(U.jsx)("div",{className:"form-group",children:Object(U.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:b,onChange:function(e){return function(e){return j(Object(W.a)(Object(W.a)({},p),{},Object(G.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(U.jsx)("button",{className:"btn btn-primary mt-2",type:"submit",children:"Continue"})]})]})})),z=Object(u.b)(null,{reset_password_confirm:function(e,t,n,a){return function(){var c=Object(b.a)(j.a.mark((function c(r){var s,o;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:n,re_new_password:a}),c.prev=2,c.next=5,h.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),o,s);case 5:r({type:A}),c.next=12;break;case 8:c.prev=8,c.t0=c.catch(2),console.log(c.t0),r({type:k});case 12:case"end":return c.stop()}}),c,null,[[2,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,n=e.reset_password_confirm,c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)({new_password:"",re_new_password:""}),p=Object(l.a)(u,2),j=p[0],b=p[1],d=j.new_password,h=j.re_new_password,m=function(e){return b(Object(W.a)(Object(W.a)({},j),{},Object(G.a)({},e.target.name,e.target.value)))};return s?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsxs)("div",{className:"container mt-5",children:[Object(U.jsx)("h1",{children:"Reset Password"}),Object(U.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var a=t.params.uid,c=t.params.token;n(a,c,d,h),o(!0)}(e)},children:[Object(U.jsx)("div",{className:"form-group mt-2",children:Object(U.jsx)("input",{className:"form-control",type:"password",placeholder:"New Password",name:"new_password",value:d,onChange:function(e){return m(e)},minLength:"6",required:!0})}),Object(U.jsx)("div",{className:"form-group mt-2",children:Object(U.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:h,onChange:function(e){return m(e)},minLength:"6",required:!0})}),Object(U.jsx)("button",{className:"btn btn-primary mt-2",type:"submit",children:"Continue"})]})]})})),B=n(18),K=n(39),Q=n(40),X={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},Y=Object(B.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case S:return Object(W.a)(Object(W.a)({},e),{},{isAuthenticated:!0});case m:return localStorage.setItem("access",a.access),localStorage.setItem("refresh",a.refresh),Object(W.a)(Object(W.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case f:case N:return Object(W.a)(Object(W.a)({},e),{},{isAuthenticated:!1});case E:case T:case x:case O:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(W.a)(Object(W.a)({},e),{},{isAuthenticated:!1,user:null,access:null});case y:return Object(W.a)(Object(W.a)({},e),{},{user:a});case w:return Object(W.a)(Object(W.a)({},e),{},{user:null});case I:return localStorage.setItem("access",a.access),Object(W.a)(Object(W.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case v:case g:case _:case C:case A:case k:return Object(W.a)({},e);default:return e}}}),Z=[Q.a],$=Object(B.createStore)(Y,{},Object(K.composeWithDevTools)(B.applyMiddleware.apply(void 0,Z))),ee=function(){return Object(U.jsx)(u.a,{store:$,children:Object(U.jsx)(o.a,{children:Object(U.jsx)(P,{children:Object(U.jsxs)(i.d,{children:[Object(U.jsx)(i.b,{exact:!0,path:"/",component:q}),Object(U.jsx)(i.b,{exact:!0,path:"/login",component:J}),Object(U.jsx)(i.b,{exact:!0,path:"/signup",component:H}),Object(U.jsx)(i.b,{exact:!0,path:"/reset-password",component:V}),Object(U.jsx)(i.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:z}),Object(U.jsx)(i.b,{exact:!0,path:"/activate/:uid/:token",component:M})]})})})})};s.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(ee,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.b151e479.chunk.js.map