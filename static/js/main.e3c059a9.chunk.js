(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],[,,,,,,,,,function(e,t,l){e.exports={modal__backdrop:"Modal_modal__backdrop__1ehs-",modal__content:"Modal_modal__content__3ThV2"}},function(e,t,l){e.exports={container:"Container_container__3RIox"}},function(e){e.exports=JSON.parse('[{"id":"id-1","text":"\u0432\u044b\u0443\u0447\u0438\u0442\u044c React","completed":true},{"id":"id-2","text":"\u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f React Router","completed":false},{"id":"id-3","text":"\u043f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux","completed":false}]')},function(e){e.exports=JSON.parse('[{"label":"Tab1","content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ea quisquam error vero tenetur! Ab minima minus, quo sapiente recusandae commodi sed animi nihil dolorum numquam officia aut ad a!"},{"label":"Tab2","content":"Sit amet consectetur adipisicing elit. Illo ea quisquam error vero tenetur! Ab minima minus, numquam officia aut ad a!"},{"label":"Tab3","content":"Ipsum dolor, sit amet consectetur adipisicing elit. Illo ea quisquam error vero tenetur! Ab minima minus, quo sapiente recusandae commodi  numquam officia aut ad a!"}]')},function(e){e.exports=JSON.parse('[{"label":"Tab1","content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ea quisquam error vero tenetur! Ab minima minus, quo sapiente recusandae commodi sed animi nihil dolorum numquam officia aut ad a!"},{"label":"Tab2","content":"Sit amet consectetur adipisicing elit. Illo ea quisquam error vero tenetur! Ab minima minus, numquam officia aut ad a!"},{"label":"Tab3","content":"Ipsum dolor, sit amet consectetur adipisicing elit. Illo ea quisquam error vero tenetur! Ab minima minus, quo sapiente recusandae commodi  numquam officia aut ad a!"}]')},function(e,t,l){e.exports={button:"IconButton_button__29vBa"}},,,,,,function(e,t,l){},,,function(e,t,l){"use strict";l.r(t);var c=l(0),n=l.n(c),a=l(7),o=l.n(a),i=(l(20),l(6)),r=l(2),u=l(3),s=l(5),m=l(4),d=(l(21),l(10)),p=l.n(d),f=l(1),h=function(e){var t=e.children;return Object(f.jsx)("div",{className:p.a.container,children:t})},b=l(11),g=l(9),y=l.n(g),C=document.querySelector("#modal_root"),E=function(e){Object(s.a)(l,e);var t=Object(m.a)(l);function l(){var e;Object(r.a)(this,l);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackdrop=function(t){t.target===t.currentTarget&&e.props.toggleModal()},e}return Object(u.a)(l,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown),console.log("componentDidMount")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown),console.log("componentWillUnmount")}},{key:"render",value:function(){return Object(a.createPortal)(Object(f.jsx)("div",{className:y.a.modal__backdrop,onClick:this.handleBackdrop,children:Object(f.jsx)("div",{className:y.a.modal__content,children:this.props.children})}),C)}}]),l}(c.Component),v=function(e){Object(s.a)(l,e);var t=Object(m.a)(l);function l(){var e;Object(r.a)(this,l);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={time:(new Date).toLocaleTimeString()},e.intervalId=null,e}return Object(u.a)(l,[{key:"componentDidMount",value:function(){var e=this;console.log("setInterval"),this.intervalId=setInterval((function(){return e.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"clock__time",children:this.state.time})}}]),l}(c.Component),j=l(12),M=l(13),O=l(15),x=l(14),F=l.n(x),w=function(e){var t=e.children,l=e.onClick,c=Object(O.a)(e,["children","onClick"]);return Object(f.jsx)("button",Object(i.a)(Object(i.a)({className:F.a.button,type:"button",onClick:l},c),{},{children:t}))};w.defaultProps={onClick:function(){return null},children:null};var z,k,q,_,I,S,D,T,A,L,N,B,P,R,J,K=w;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var l,c,n=function(e,t){if(null==e)return{};var l,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)l=a[c],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)l=a[c],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}function H(e,t){var l=e.title,n=e.titleId,a=W(e,["title","titleId"]);return c.createElement("svg",U({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},a),l?c.createElement("title",{id:n},l):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#006DF0"},d:"M238.933,275.123c10.146,9.847,26.359,9.591,36.198-0.555c9.847-10.146,9.591-26.359-0.555-36.198 c-10.146-9.847-26.359-9.591-36.198,0.555l-0.009,0.009C228.54,249.088,228.787,265.284,238.933,275.123z"}),c.createElement("path",{style:{fill:"#006DF0"},d:"M256,68.267c-4.71,0-8.533-3.823-8.533-8.533v-51.2C247.467,3.823,251.29,0,256,0 c4.71,0,8.533,3.823,8.533,8.533v51.2C264.533,64.444,260.71,68.267,256,68.267z"})),c.createElement("g",null,c.createElement("path",{style:{fill:"#231F20"},d:"M214.502,29.227c-4.139,0-7.68-2.978-8.397-7.049l-1.485-8.405 c-0.819-4.642,2.278-9.071,6.921-9.882c4.642-0.819,9.071,2.278,9.89,6.921l1.485,8.405c0.819,4.642-2.287,9.062-6.929,9.882l0,0 C215.501,29.184,214.997,29.227,214.502,29.227z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M174.276,40.013c-3.593,0-6.801-2.244-8.021-5.623l-2.91-8.013 c-1.698-4.395,0.486-9.335,4.89-11.034c4.395-1.698,9.335,0.486,11.034,4.89c0.043,0.102,0.077,0.205,0.111,0.307l2.918,8.021 c1.613,4.429-0.674,9.327-5.103,10.94C176.265,39.842,175.275,40.013,174.276,40.013z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M102.4,81.502c-2.526,0-4.915-1.118-6.537-3.055l-5.487-6.537 c-2.953-3.669-2.364-9.045,1.306-11.998c3.567-2.867,8.755-2.406,11.767,1.033l5.487,6.537c3.029,3.61,2.56,8.994-1.05,12.023 C106.351,80.794,104.405,81.502,102.4,81.502z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M72.96,110.933c-2.005,0-3.942-0.708-5.478-1.997l-6.537-5.487 c-3.55-3.106-3.908-8.491-0.802-12.041c3.012-3.439,8.201-3.9,11.767-1.033l6.537,5.487c3.61,3.029,4.079,8.414,1.05,12.023 C77.875,109.815,75.486,110.933,72.96,110.933z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M31.471,182.818c-0.99,0-1.98-0.179-2.91-0.521l-8.021-2.918c-4.463-1.527-6.835-6.374-5.308-10.837 s6.374-6.835,10.837-5.308c0.102,0.034,0.205,0.077,0.307,0.111l8.013,2.91c4.437,1.596,6.741,6.485,5.146,10.914 C38.306,180.574,35.081,182.835,31.471,182.818z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M20.702,223.044c-0.495,0-0.998-0.043-1.485-0.128l-8.405-1.485c-4.642-0.819-7.74-5.248-6.921-9.89 s5.239-7.74,9.882-6.921l8.405,1.485c4.642,0.811,7.748,5.239,6.929,9.882C28.399,220.066,24.849,223.044,20.702,223.044z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M12.279,307.507c-4.71,0-8.533-3.823-8.525-8.542c0-4.147,2.978-7.689,7.057-8.397l8.405-1.485 c4.642-0.819,9.071,2.278,9.89,6.929c0.819,4.651-2.278,9.071-6.929,9.89l-8.405,1.485 C13.278,307.465,12.783,307.507,12.279,307.507z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M23.458,349.175c-4.71,0-8.533-3.814-8.542-8.525c0-3.593,2.244-6.801,5.623-8.03l8.021-2.918 c4.429-1.613,9.327,0.674,10.94,5.103s-0.674,9.327-5.111,10.94l-8.013,2.91C25.438,348.996,24.457,349.175,23.458,349.175z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M66.432,423.603c-4.71,0-8.533-3.823-8.533-8.533c0-2.526,1.118-4.915,3.046-6.537l6.537-5.487 c3.55-3.106,8.934-2.748,12.041,0.802c3.106,3.55,2.748,8.934-0.802,12.041c-0.085,0.077-0.179,0.154-0.273,0.23l-6.537,5.487 C70.374,422.895,68.437,423.603,66.432,423.603z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M96.93,454.101c-4.71,0-8.533-3.823-8.525-8.542c0-2.005,0.708-3.934,1.988-5.47l5.487-6.537 c2.953-3.669,8.32-4.258,11.998-1.306c3.669,2.953,4.258,8.32,1.306,11.998c-0.077,0.094-0.154,0.188-0.23,0.273l-5.487,6.537 C101.845,452.983,99.456,454.101,96.93,454.101z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M171.366,497.075c-4.71,0-8.533-3.814-8.533-8.533c0-0.998,0.171-1.988,0.512-2.918l2.91-8.013 c1.613-4.429,6.502-6.716,10.931-5.103c4.429,1.613,6.716,6.502,5.103,10.931l-2.918,8.021 C178.15,494.831,174.95,497.075,171.366,497.075z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M213.035,508.245c-0.495,0-0.998-0.043-1.485-0.137c-4.642-0.811-7.748-5.239-6.929-9.882l0,0 l1.485-8.405c0.819-4.642,5.248-7.74,9.89-6.929c4.642,0.819,7.74,5.248,6.921,9.89l0,0l-1.485,8.405 C220.715,505.267,217.173,508.245,213.035,508.245z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M298.965,508.245c-4.139,0-7.68-2.978-8.397-7.057l-1.485-8.405 c-0.819-4.642,2.278-9.071,6.929-9.89c4.651-0.819,9.071,2.278,9.89,6.929l1.485,8.405c0.819,4.642-2.287,9.062-6.929,9.882l0,0 C299.964,508.203,299.46,508.245,298.965,508.245z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M340.634,497.075c-3.584,0-6.784-2.244-8.013-5.615l-2.918-8.021 c-1.613-4.429,0.674-9.327,5.111-10.931c4.429-1.613,9.327,0.674,10.931,5.103l2.91,8.013c1.613,4.429-0.674,9.327-5.103,10.94 C342.622,496.905,341.632,497.075,340.634,497.075z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M415.07,454.101c-2.526,0.009-4.924-1.109-6.537-3.046l-5.487-6.537 c-3.106-3.55-2.748-8.934,0.802-12.041c3.55-3.106,8.934-2.748,12.041,0.802c0.077,0.085,0.154,0.179,0.23,0.273l5.487,6.536 c3.029,3.61,2.551,8.994-1.067,12.023C419.004,453.393,417.075,454.101,415.07,454.101z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M445.568,423.603c-2.005,0-3.942-0.708-5.478-1.997l-6.537-5.487 c-3.669-2.953-4.258-8.32-1.306-11.998c2.953-3.669,8.32-4.258,11.998-1.306c0.094,0.077,0.188,0.154,0.273,0.23l6.537,5.487 c3.61,3.029,4.079,8.414,1.05,12.023C450.483,422.485,448.094,423.603,445.568,423.603z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M488.542,349.175c-0.998,0-1.98-0.179-2.918-0.521l-8.013-2.91 c-4.429-1.613-6.716-6.502-5.103-10.931s6.502-6.716,10.931-5.111l8.021,2.918c4.429,1.604,6.716,6.502,5.111,10.931 C495.343,346.931,492.134,349.175,488.542,349.175z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M499.721,307.507c-0.503,0-0.998-0.043-1.493-0.128l-8.405-1.485 c-4.642-0.819-7.74-5.239-6.929-9.89c0.811-4.651,5.239-7.74,9.89-6.929l8.405,1.485c4.642,0.811,7.748,5.239,6.929,9.882 C507.409,304.529,503.868,307.507,499.721,307.507z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M491.298,223.044c-4.71,0-8.533-3.814-8.533-8.533c0-4.147,2.978-7.697,7.057-8.405l8.405-1.485 c4.642-0.819,9.071,2.278,9.89,6.921s-2.287,9.071-6.929,9.89l-8.405,1.485C492.297,223.002,491.793,223.044,491.298,223.044z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M480.529,182.818c-4.71,0.017-8.55-3.789-8.567-8.499c-0.017-3.61,2.244-6.835,5.649-8.064 l8.013-2.91c4.395-1.698,9.335,0.486,11.034,4.89c1.698,4.403-0.486,9.335-4.89,11.034c-0.102,0.043-0.205,0.077-0.307,0.111 l-8.021,2.918C482.509,182.639,481.519,182.818,480.529,182.818z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M439.04,110.933c-4.71,0-8.533-3.823-8.533-8.533c0-2.526,1.118-4.915,3.046-6.537l6.537-5.487 c3.669-2.953,9.045-2.364,11.998,1.306c2.867,3.567,2.406,8.755-1.033,11.767l-6.537,5.487 C442.982,110.225,441.045,110.933,439.04,110.933z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M409.6,81.502c-4.71,0-8.533-3.823-8.533-8.533c0-2.005,0.708-3.951,1.997-5.487l5.487-6.537 c3.106-3.55,8.491-3.908,12.041-0.802c3.439,3.012,3.9,8.201,1.033,11.767l-5.487,6.537 C414.515,80.384,412.126,81.502,409.6,81.502z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M337.724,40.013c-4.71,0-8.533-3.814-8.533-8.533c0-0.998,0.171-1.988,0.512-2.918l2.918-8.021 c1.527-4.463,6.374-6.835,10.837-5.308s6.835,6.374,5.308,10.837c-0.034,0.102-0.077,0.205-0.111,0.307l-2.91,8.013 C344.525,37.769,341.316,40.013,337.724,40.013z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M297.498,29.227c-0.495,0-0.998-0.043-1.485-0.128c-4.642-0.811-7.748-5.239-6.929-9.882l0,0 l1.485-8.405c0.819-4.642,5.239-7.74,9.89-6.929c4.651,0.811,7.74,5.239,6.929,9.89l0,0l-1.485,8.405 C305.178,26.249,301.636,29.227,297.498,29.227z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M149.333,79.778c-3.055,0-5.871-1.621-7.398-4.267l-17.067-29.559 c-2.33-4.096-0.896-9.31,3.2-11.639c4.062-2.304,9.216-0.922,11.58,3.106l17.067,29.559c2.355,4.079,0.956,9.301-3.123,11.657 C152.294,79.386,150.827,79.778,149.333,79.778z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M71.236,157.867c-1.502,0-2.97-0.393-4.267-1.143L37.41,139.657 c-4.062-2.381-5.427-7.612-3.046-11.674c2.364-4.028,7.518-5.41,11.58-3.106l29.559,17.067c4.079,2.355,5.478,7.578,3.123,11.657 C77.099,156.237,74.283,157.867,71.236,157.867z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M41.694,388.267c-4.71,0-8.533-3.823-8.533-8.533c0-3.046,1.63-5.862,4.267-7.39l29.559-17.067 c4.062-2.381,9.293-1.024,11.674,3.046c2.381,4.062,1.024,9.293-3.046,11.674c-0.034,0.017-0.068,0.043-0.102,0.06l-29.559,17.067 C44.663,387.874,43.196,388.267,41.694,388.267z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M132.267,478.848c-4.71-0.009-8.533-3.831-8.525-8.542c0-1.493,0.393-2.961,1.143-4.258 l17.067-29.559c2.33-4.096,7.535-5.53,11.639-3.2s5.53,7.535,3.2,11.639c-0.017,0.034-0.034,0.068-0.06,0.094l-17.067,29.559 C138.138,477.227,135.322,478.848,132.267,478.848z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M379.733,478.848c-3.055,0-5.871-1.621-7.398-4.267l-17.067-29.559 c-2.33-4.096-0.896-9.31,3.2-11.639c4.062-2.304,9.216-0.922,11.58,3.106l17.067,29.559c2.355,4.079,0.956,9.301-3.123,11.657 C382.694,478.456,381.227,478.848,379.733,478.848z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M470.306,388.267c-1.502,0-2.97-0.393-4.267-1.143l-29.559-17.067 c-4.062-2.381-5.427-7.612-3.046-11.674c2.364-4.028,7.518-5.41,11.58-3.106l29.559,17.067c4.079,2.355,5.478,7.578,3.123,11.657 C476.169,386.637,473.353,388.267,470.306,388.267z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M440.764,157.867c-4.71,0-8.533-3.823-8.533-8.533c0-3.046,1.63-5.862,4.267-7.39l29.559-17.067 c4.096-2.33,9.31-0.896,11.639,3.2c2.304,4.062,0.922,9.216-3.106,11.58l-29.559,17.067 C443.733,157.474,442.266,157.867,440.764,157.867z"}),c.createElement("path",{style:{fill:"#231F20"},d:"M362.667,79.778c-4.71-0.009-8.533-3.831-8.525-8.542c0-1.493,0.393-2.961,1.143-4.258 l17.067-29.559c2.381-4.062,7.612-5.427,11.674-3.046c4.028,2.364,5.41,7.518,3.106,11.58l-17.067,29.559 C368.538,78.157,365.722,79.778,362.667,79.778z"})),c.createElement("g",null,c.createElement("path",{style:{fill:"#006DF0"},d:"M59.733,264.533h-51.2C3.823,264.533,0,260.71,0,256c0-4.71,3.823-8.533,8.533-8.533h51.2 c4.71,0,8.533,3.823,8.533,8.533C68.267,260.71,64.444,264.533,59.733,264.533z"}),c.createElement("path",{style:{fill:"#006DF0"},d:"M256,512c-4.71,0-8.533-3.823-8.533-8.533v-51.2c0-4.71,3.823-8.533,8.533-8.533 c4.71,0,8.533,3.823,8.533,8.533v51.2C264.533,508.177,260.71,512,256,512z"}),c.createElement("path",{style:{fill:"#006DF0"},d:"M503.467,264.533h-59.733c-4.71,0-8.533-3.823-8.533-8.533c0-4.71,3.823-8.533,8.533-8.533h59.733 c4.71,0,8.533,3.823,8.533,8.533C512,260.71,508.177,264.533,503.467,264.533z"})),c.createElement("path",{style:{fill:"#231F20"},d:"M377.421,135.006c-3.328-3.328-8.738-3.328-12.066,0l-92.032,92.032 c-5.188-2.97-11.085-4.497-17.067-4.429c-5.632,0.128-11.145,1.664-16.034,4.454l-43.785-43.785 c-3.328-3.345-8.747-3.354-12.092-0.026c-3.345,3.328-3.354,8.747-0.026,12.092l43.435,43.435 c-10.035,15.991-5.214,37.086,10.778,47.13c15.991,10.035,37.086,5.214,47.13-10.778c6.972-11.11,6.972-25.233,0-36.343 l91.759-91.708C380.749,143.744,380.749,138.334,377.421,135.006z M244.907,268.988c-6.767-6.562-6.929-17.365-0.358-24.132 c3.149-3.243,7.458-5.103,11.972-5.18c4.54-0.128,8.926,1.613,12.143,4.813c6.903,6.426,7.287,17.22,0.862,24.124 s-17.22,7.287-24.124,0.862C245.239,269.312,245.069,269.15,244.907,268.988z"}),z||(z=c.createElement("g",null)),k||(k=c.createElement("g",null)),q||(q=c.createElement("g",null)),_||(_=c.createElement("g",null)),I||(I=c.createElement("g",null)),S||(S=c.createElement("g",null)),D||(D=c.createElement("g",null)),T||(T=c.createElement("g",null)),A||(A=c.createElement("g",null)),L||(L=c.createElement("g",null)),N||(N=c.createElement("g",null)),B||(B=c.createElement("g",null)),P||(P=c.createElement("g",null)),R||(R=c.createElement("g",null)),J||(J=c.createElement("g",null)))}var V=c.forwardRef(H),X=(l.p,function(e){Object(s.a)(l,e);var t=Object(m.a)(l);function l(){var e;Object(r.a)(this,l);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={todos:b,showModal:!1,showClock:!1},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.toggleCompleted=function(t){console.log(t),e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e}))}}))},e.formSubmitHandler=function(e){setTimeout((function(){console.log(e)}),1e3)},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.toggleClock=function(){e.setState((function(e){return{showClock:!e.showClock}}))},e}return Object(u.a)(l,[{key:"render",value:function(){var e=this.state,t=(e.todos,e.showModal),l=e.showClock;return Object(f.jsxs)(h,{children:[Object(f.jsx)("button",{type:"button",onClick:this.toggleModal,children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"}),t&&Object(f.jsxs)(E,{toggleModal:this.toggleModal,children:[Object(f.jsx)("button",{type:"button",onClick:this.toggleModal,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"}),Object(f.jsx)("h1",{children:"Hello There"}),Object(f.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto corrupti quasi tenetur ducimus! Maxime incidunt veniam, tempore blanditiis qui quod similique, nostrum nulla eaque, dicta ut doloremque aliquam labore ipsam impedit tempora! Doloremque consectetur maxime consequatur perferendis culpa id iusto ab, at itaque totam ratione qui saepe numquam. Nesciunt, beatae?"})]}),Object(f.jsx)(j,{items:M}),Object(f.jsx)(K,{type:"button",onClick:this.toggleClock,"aria-label":"open clock",children:Object(f.jsx)(V,{width:"45px",height:"45px"})}),l&&Object(f.jsx)(v,{})]})}}]),l}(c.Component)),G=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,24)).then((function(t){var l=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;l(e),c(e),n(e),a(e),o(e)}))};o.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(X,{})}),document.getElementById("root")),G()}],[[23,1,2]]]);
//# sourceMappingURL=main.e3c059a9.chunk.js.map