(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{491:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"系统日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统日志"}},[t._v("#")]),t._v(" 系统日志")]),t._v(" "),a("p",[t._v("本系统使用 "),a("code",[t._v("AOP")]),t._v(" 方式记录用户操作日志，只需要在 "),a("code",[t._v("controller")]),t._v(" 的方法上使用 "),a("code",[t._v('@Log("")')]),t._v(" 注解，就可以将用户操作记录到数据库，源码可查看 "),a("code",[t._v("eladmin-logging")]),t._v(" "),a("br"),t._v("\n模块具体使用如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新增用户"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseEntity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Validated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestBody")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CREATED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("页面上可以看到 "),a("code",[t._v("操作日志")]),t._v("和"),a("code",[t._v("异常日志")])]),t._v(" "),a("h2",{attrs:{id:"操作日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作日志"}},[t._v("#")]),t._v(" 操作日志")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.el-admin.xin/images/2020/07/07/image.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"异常日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常日志"}},[t._v("#")]),t._v(" 异常日志")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.el-admin.xin/images/2020/07/07/imagea9d688d59a73612d.png",alt:"imagea9d688d59a73612d.png"}})]),t._v(" "),a("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);