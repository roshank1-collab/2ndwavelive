(this.webpackJsonp2ndwave_econtent_management_system_frontend=this.webpackJsonp2ndwave_econtent_management_system_frontend||[]).push([[0],{62:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(20),r=a.n(c),l=(a(62),a(63),a(64),a(21)),i=a(15),o=a(16),j=a(19),d=a(18),h=a(99),b=a(101),m=a(100),u=a(55),x=a(98),O=a(7),g=a(1),p=localStorage.getItem("id"),f=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).logout=function(){localStorage.removeItem("token"),localStorage.removeItem("userType"),localStorage.removeItem("id"),localStorage.removeItem("fullname"),localStorage.removeItem("userdetails"),window.location.href="/"},e}return Object(o.a)(a,[{key:"render",value:function(){if(localStorage.getItem("token")&&"Admin"===localStorage.getItem("userType"))var e=Object(g.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsx)(h.a.Brand,{href:"/dashboard",children:Object(g.jsx)("img",{src:"/images/txtlogo.png",className:"d-inline-block align-top",alt:"logo"})}),Object(g.jsxs)(b.a,{className:"mr-auto",children:[Object(g.jsxs)(b.a.Link,{href:"/addproduct",children:[Object(g.jsx)(O.h,{})," Add Product"]}),Object(g.jsxs)(b.a.Link,{href:"/viewproduct",children:[Object(g.jsx)(O.i,{})," View Product"]})]}),Object(g.jsxs)(m.a,{inline:!0,children:[Object(g.jsxs)(b.a.Link,{href:"/subscribers",children:[Object(g.jsx)(O.d,{})," Subscribers"]}),Object(g.jsxs)(b.a.Link,{href:"/orders",children:[Object(g.jsx)(O.e,{})," Orders"]}),Object(g.jsxs)(b.a.Link,{href:"",children:[Object(g.jsx)(O.l,{})," Signed in as ",Object(g.jsx)("u",{children:localStorage.getItem("fullname")})]}),Object(g.jsxs)(b.a.Link,{href:"/userdetails",children:[Object(g.jsx)(O.r,{})," Users"]}),Object(g.jsxs)(b.a.Link,{href:"/createpromo",children:[Object(g.jsx)(O.q,{})," Create Campaign"]}),Object(g.jsxs)(u.a,{Link:!0,to:"/logout",className:"btn btn-primary",onClick:this.logout,children:[Object(g.jsx)(O.n,{})," Sign out"]})]})]});else e=localStorage.getItem("token")&&"Customer"===localStorage.getItem("userType")?Object(g.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsx)(h.a.Brand,{href:"/dashboard",children:Object(g.jsx)("img",{src:"/images/txtlogo.png",className:"d-inline-block align-top",alt:"logo"})}),Object(g.jsx)(b.a,{className:"mr-auto"}),Object(g.jsxs)(m.a,{inline:!0,children:[Object(g.jsxs)(b.a.Link,{href:"/myprofile/"+p,children:[Object(g.jsx)(O.l,{})," Signed in as: ",Object(g.jsx)("u",{children:localStorage.getItem("fullname")})]}),Object(g.jsxs)(b.a.Link,{href:"/mycart",children:[Object(g.jsx)(O.b,{})," My Cart"]}),Object(g.jsxs)(b.a.Link,{href:"/promotions",children:[" ",Object(g.jsx)(O.f,{})," Promotions"]}),Object(g.jsx)(u.a,{Link:!0,to:"/logout",className:"btn btn-primary",onClick:this.logout,children:" Sign out"})]})]}):Object(g.jsxs)(h.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsx)(h.a.Brand,{href:"/",children:Object(g.jsxs)("h3",{style:{color:"#a018a0",fontWeight:"bolder",marginTop:"2px"},children:["E-",Object(g.jsx)("span",{style:{color:"#51227F"},children:"content"})]})}),Object(g.jsxs)(b.a,{className:"mr-auto",children:[Object(g.jsxs)(x.a,{style:{color:"black",fontWeight:"bold"},title:"Company",id:"basic-nav-dropdown",children:[Object(g.jsxs)(x.a.Item,{href:"/aboutfounder",children:[Object(g.jsx)(O.s,{})," About Us"]}),Object(g.jsxs)(x.a.Item,{href:"/aboutfounder",children:[Object(g.jsx)(O.k,{})," Why Choose Us?"]}),Object(g.jsxs)(x.a.Item,{href:"/Aboutgadgetshop",children:[Object(g.jsx)(O.t,{}),"Our Team"]}),Object(g.jsxs)(x.a.Item,{href:"/Aboutgadgetshop",children:[Object(g.jsx)(O.p,{}),"Carrer With Us"]})]}),Object(g.jsxs)(x.a,{style:{color:"black",fontWeight:"bold"},title:"Services",id:"basic-nav-dropdown",children:[Object(g.jsxs)(x.a.Item,{href:"/howitwork",children:[Object(g.jsx)(O.m,{}),"Services & Pricing"]}),Object(g.jsxs)(x.a.Item,{href:"/howitwork",children:[Object(g.jsx)(O.a,{}),"Offers"]}),Object(g.jsxs)(x.a.Item,{href:"/termsandconditions",children:[Object(g.jsx)(O.c,{})," Pricing Plans"]}),Object(g.jsxs)(x.a.Item,{href:"/termsandconditions",children:[Object(g.jsx)(O.g,{})," Terms & Conditions"]})]})]}),Object(g.jsx)(m.a,{inline:!0,children:Object(g.jsxs)(u.a,{style:{backgroundColor:"#51227F"},href:"/login",className:"btn btn-primary",children:["Sign in",Object(g.jsx)(O.o,{})]})})]});return Object(g.jsxs)(h.a,{collapseOnSelect:!0,expand:"lg",bg:"white",className:"shadow",children:[Object(g.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),e]})}}]),a}(s.Component),v=a(37),y=a(31),N=a.n(y),w=a(40);a(88);w.a.configure();var k=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={firstname:"",lastname:"",gender:"",Dob:"",address:"",institution_name:"",phone_number:"",email:"",password:""},e.fileHandler=function(t){e.setState({institution_ID:t.target.files[0],Profile_Picture:t.target.files[0]})},e.changeHandler=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.submitUser=function(t){t.preventDefault();var a=new FormData;a.append("institution_ID",e.state.institution_ID),a.append("Profile_Picture",e.state.Profile_Picture),a.append("firstname",e.state.firstname),a.append("lastname",e.state.lastname),a.append("gender",e.state.gender),a.append("address",e.state.address),a.append("institution_name",e.state.institution_name),a.append("Phone",e.state.phone),a.append("email",e.state.email.trim()),a.append("password",e.state.password),a.append("Dob",e.state.Dob),a.append("phone_number",e.state.phone_number),N.a.post("http://localhost:90/User/SignUp",a).then((function(e){Object(w.a)(e.data.message)})).catch((function(e){Object(w.a)(e.message)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsx)("section",{className:"Form my-4 mx-5 pt-5 pb-5",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row no-gutters shadow",style:{background:"white",borderRadius:"3px"},children:[Object(g.jsx)("div",{className:"col-lg-5",children:Object(g.jsx)("img",{src:"./images/pp.jpg",alt:"register",className:"img-fluid",style:{marginTop:"100px"}})}),Object(g.jsxs)("div",{className:"col-lg-7",children:[Object(g.jsx)("h1",{className:"font-weight-bold py-4",style:{color:"#a018a0"},children:"Sign Up"}),Object(g.jsx)("h5",{style:{color:"blueviolet",fontSize:"18px"},children:"Please fill all your correct details to signup"}),Object(g.jsxs)("form",{className:"py-4",children:[Object(g.jsxs)("div",{className:"form-row",children:[Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"fullname",children:"Firstname"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"firstname",value:this.state.firstname,onChange:this.changeHandler,required:!0})]}),Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"fullname",children:"Lastname"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"lastname",value:this.state.lastname,onChange:this.changeHandler,required:!0})]})]}),Object(g.jsxs)("div",{className:"form-row",children:[Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"fullname",children:"Gender"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"gender",value:this.state.gender,onChange:this.changeHandler,required:!0})]}),Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"fullname",children:"Date of Birth"}),Object(g.jsx)("input",{type:"date",className:"form-control",name:"Dob",value:this.state.Dob,onChange:this.changeHandler,required:!0})]})]}),Object(g.jsxs)("div",{className:"form-row",children:[Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"fullname",children:"Address"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"address",value:this.state.address,onChange:this.changeHandler,required:!0})]}),Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"fullname",children:"Phone"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"phone_number",value:this.state.phone_number,onChange:this.changeHandler,required:!0})]})]}),Object(g.jsxs)("div",{className:"form-row",children:[Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"phone",children:"Institution ID"}),Object(g.jsx)("input",{type:"file",placeholder:"institution ID",name:"institution_ID",onChange:this.fileHandler,required:!0})]}),Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"fullname",children:"Instution Name"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"institution_name",value:this.state.instution_name,onChange:this.changeHandler,required:!0})]})]}),Object(g.jsxs)("div",{className:"form-row",children:[Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"phone",children:"Your Photo "}),Object(g.jsx)("input",{type:"file",placeholder:"institution ID",name:"Profile_Picture",onChange:this.fileHandler,required:!0})]}),Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"fullname",children:"Email"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.changeHandler,required:!0})]})]}),Object(g.jsx)("div",{className:"form-row",children:Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(g.jsx)("input",{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.changeHandler,required:!0})]})}),Object(g.jsxs)("p",{style:{marginTop:"16px"},className:"signUp text-left",children:["Do have an Account?  ",Object(g.jsx)(l.b,{style:{color:"#a018a0"},exact:!0,to:"/",children:Object(g.jsx)("b",{children:"Sign in"})})]}),Object(g.jsx)("div",{className:"col-lg-7 py-4",children:Object(g.jsxs)("button",{style:{backgroundColor:"#51227F",color:"white",fontWeight:"bold",marginTop:"5px"},type:"submit",onClick:this.submitUser,className:"btn btn-primary",children:[" Sign up ",Object(g.jsx)(O.j,{})," "]})})]})]})]})})})}}]),a}(s.Component),C=a(8),S=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",checkLogin:!1},e.changeHandler=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.loginUser=function(t){t.preventDefault(),N.a.post("http://localhost:90/user/login",e.state).then((function(t){localStorage.setItem("token",t.data.token),localStorage.setItem("email",t.data.email),localStorage.setItem("success",t.data.success),"undefined"===localStorage.getItem("token")?(e.setState({checkLogin:!1}),alert(t.data.message)):e.setState({checkLogin:!0})})).catch((function(e){alert(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return!0===this.state.checkLogin?window.location.href="/dashboard":Object(g.jsx)("section",{className:"Form my-4 mx-5 pt-5 pb-5",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"row no-gutters shadow",style:{background:"white",borderRadius:"3px"},children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("img",{alt:"login",src:"./images/login.jpg",className:"img-fluid",style:{height:"400px"}})}),Object(g.jsxs)("div",{className:"col-lg-5 no gutters",children:[Object(g.jsx)("h1",{className:"font-weight-bold py-4",style:{color:"#a018a0"},children:"Login"}),Object(g.jsxs)("form",{style:{marginLeft:"5px"},children:[Object(g.jsx)("div",{className:"form-row",children:Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"uname",children:"Email:"}),Object(g.jsx)("input",{type:"text",className:"form-control",value:this.state.email,onChange:this.changeHandler,name:"email",required:!0})]})}),Object(g.jsx)("div",{className:"form-row",children:Object(g.jsxs)("div",{className:"col-lg-5",children:[Object(g.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(g.jsx)("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.changeHandler,name:"password",required:!0})]})})]}),Object(g.jsxs)("p",{className:"signUp text-left",children:["Do have an Account?  ",Object(g.jsx)(l.b,{exact:!0,to:"/register",children:Object(g.jsx)("b",{style:{color:"#a018a0"},children:"Sign Up"})})]}),Object(g.jsx)("a",{style:{color:"blueviolet"},href:"#",children:Object(g.jsx)("u",{children:"Forgot your password?"})}),Object(g.jsx)("div",{className:"form-row",children:Object(g.jsx)("div",{className:"col-lg-5",children:Object(g.jsxs)("button",{style:{backgroundColor:"#51227F",color:"white",fontWeight:"bold",marginTop:"10px"},type:"submit",onClick:this.loginUser,class:"btn btn-primary",children:[" Sign in ",Object(g.jsx)(O.j,{})," "]})})})]})]}),Object(g.jsx)("div",{})]})})}}]),a}(s.Component),I=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Welcome to dashboard"})})}}]),a}(s.Component),F=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(l.a,{children:Object(g.jsxs)(C.c,{children:[Object(g.jsx)(C.a,{exact:!0,path:"/register",component:k}),Object(g.jsx)(C.a,{exact:!0,path:"/",component:S}),Object(g.jsx)(C.a,{exact:!0,path:"/login",component:S}),Object(g.jsx)(C.a,{exact:!0,path:"/dashboard",component:I}),Object(g.jsx)(C.a,{exact:!0,path:"/login",component:S})]})})})}}]),a}(s.Component);var _=function(){return Object(g.jsx)(l.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(f,{}),Object(g.jsx)(F,{})]})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root")),P()}},[[92,1,2]]]);
//# sourceMappingURL=main.3448442d.chunk.js.map