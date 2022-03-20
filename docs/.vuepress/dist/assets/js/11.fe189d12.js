(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{490:function(s,a,t){"use strict";t.r(a);var e=t(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"系统缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统缓存"}},[s._v("#")]),s._v(" 系统缓存")]),s._v(" "),t("p",[s._v("本系统缓存使用的是 "),t("code",[s._v("Redis")]),s._v("，默认使用 "),t("code",[s._v("Spring")]),s._v(" 的注解对系统缓存进行操作, 现版本优化了")]),s._v(" "),t("h2",{attrs:{id:"配置缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置缓存"}},[s._v("#")]),s._v(" 配置缓存")]),s._v(" "),t("p",[s._v("配置文件位于 "),t("code",[s._v("eladmin-common")]),s._v(" 模块中的 "),t("code",[s._v("me.zhengjie.config.RedisConfig")])]),s._v(" "),t("h2",{attrs:{id:"缓存注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存注解"}},[s._v("#")]),s._v(" 缓存注解")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("@CacheConfig：主要用于配置该类中会用到的一些共用的缓存配置\n\n@Cacheable：主要方法的返回值将被加入缓存。在查询时，会先从缓存中获取，若不存在才再发起对数据库的访问\n\n@CachePut：主要用于数据新增和修改操作\n\n@CacheEvict：配置于函数上，通常用在删除方法上，用来从缓存中移除相应数据\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"使用建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用建议"}},[s._v("#")]),s._v(" 使用建议")]),s._v(" "),t("p",[s._v("缓存的出现加快了数据查询的速度，同时增加了维护成本，建议使用在高频读低频写的数据上。")]),s._v(" "),t("p",[s._v("使用不当可能会出现数据不一致的问题，请谨慎使用。")]),s._v(" "),t("Vssue",{attrs:{title:s.$title}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);