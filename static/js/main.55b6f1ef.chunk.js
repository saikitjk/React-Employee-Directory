(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),s=n.n(a),c=n(12),i=n.n(c);n(24),n(25);function l(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("hr",{})]})})}n(26);var o=n(13),d=n(14),u=n(18),h=n(17),j=n(15),m=n.n(j);n(29);function b(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("table",{className:"empTable",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Avater"}),Object(r.jsx)("th",{onClick:e.sortByName,children:"Name"}),Object(r.jsx)("th",{onClick:e.sortByAge,children:"Age"}),Object(r.jsx)("th",{children:"Phone"}),Object(r.jsx)("th",{children:"E-mail"}),Object(r.jsx)("th",{children:"DOB"})]})}),Object(r.jsx)("tbody",{className:"tableBody",children:e.results.map((function(e){return Object(r.jsxs)("tr",{className:"table",children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{className:"avater",src:e.picture.medium,alt:e.name+" "+e.name.last})}),Object(r.jsxs)("td",{children:[e.name.first+" "+e.name.last," "]}),Object(r.jsx)("td",{children:e.dob.age}),Object(r.jsx)("td",{children:e.cell}),Object(r.jsx)("td",{className:"email",children:Object(r.jsx)("a",{href:e.email,children:e.email})}),Object(r.jsx)("td",{children:Object(r.jsx)(m.a,{format:"MMM D YYYY",children:e.dob.date})})]},e.login.uuid)}))})]})})}n(30);function f(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{class:"input-group mb-3 searchBar",children:[Object(r.jsx)("input",{onChange:e.handleInputChange,value:e.value,type:"text",className:"form-control",placeholder:"name","aria-label":"Employee's username","aria-describedby":"button-addon2"}),Object(r.jsx)("div",{class:"input-group-append",children:Object(r.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:e.handleSearch,children:"Search"})})]})})}n(31);var p=n(16),O=n.n(p),x=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")},g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[],filteredEmp:[],order:""},e.sortByName=function(){var t=e.state.filteredEmp;if("asc"===e.state.order){var n=t.sort((function(e,t){return e.name.first>t.name.first?1:-1}));e.setState({filteredEmp:n,order:"desc"})}else{var r=t.sort((function(e,t){return e.name.first>t.name.first?-1:1}));e.setState({filteredEmp:r,order:"asc"})}},e.sortByAge=function(){var t=e.state.filteredEmp;if("asc"===e.state.order){var n=t.sort((function(e,t){return e.dob.age>t.dob.age?1:-1}));e.setState({filteredEmp:n,order:"desc"})}else{var r=t.sort((function(e,t){return e.dob.age>t.dob.age?-1:1}));e.setState({filteredEmp:r,order:"asc"})}},e.handleInputChange=function(t){var n=e.state.employees,r=t.target.value,a=n.filter((function(e){return e.name.first.toLowerCase().indexOf(r.toLowerCase())>-1}));e.setState({filteredEmp:a})},e.employeeSearch=function(){x().then((function(t){return e.setState({filteredEmp:t.data.results,employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleSearch=function(t){t.preventDefault(),e.state.search||alert("Please enter an employee name");var n=e.state,r=n.employees,a=n.search,s=r.filter((function(e){return e.name.first.toLowerCase().includes(a.toLowerCase())}));e.setState({filteredEmp:s})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){return e.setState({employees:t.data.results,filteredEmp:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{employee:this.state.employees,handleSearch:this.handleSearch,handleInputChange:this.handleInputChange}),Object(r.jsx)(b,{results:this.state.filteredEmp,sortByName:this.sortByName,sortByAge:this.sortByAge})]})}}]),n}(a.Component);function y(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(g,{})})}n(49);var v=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(y,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),C()}},[[50,1,2]]]);
//# sourceMappingURL=main.55b6f1ef.chunk.js.map