(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{505:function(s,a,t){"use strict";t.r(a);var e=t(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"常规部署方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常规部署方式"}},[s._v("#")]),s._v(" 常规部署方式")]),s._v(" "),t("h3",{attrs:{id:"后端部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端部署"}},[s._v("#")]),s._v(" 后端部署")]),s._v(" "),t("h4",{attrs:{id:"修改配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[s._v("#")]),s._v(" 修改配置")]),s._v(" "),t("p",[s._v("按需修改我们的 "),t("code",[s._v("application-prod.yml")]),s._v("，如需打开 Swagger ，那么需要将 "),t("code",[s._v("enabled")]),s._v(" 设置为 true")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("swagger")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"打包项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包项目"}},[s._v("#")]),s._v(" 打包项目")]),s._v(" "),t("p",[s._v("我们需要将项目打包好的 Jar 文件上传到服务器，步骤图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.el-admin.xin/images/2020/09/17/image.png",alt:"image.png"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.el-admin.xin/images/2020/09/17/image578bed89803bdfa9.png",alt:"image578bed89803bdfa9.png"}})]),s._v(" "),t("h4",{attrs:{id:"编写脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写脚本"}},[s._v("#")]),s._v(" 编写脚本")]),s._v(" "),t("p",[s._v("编写脚本用于操作 "),t("code",[s._v("java")]),s._v(" 服务")]),s._v(" "),t("p",[s._v("(1) "),t("strong",[s._v("启动脚本")]),s._v(" "),t("code",[s._v("start.sh")]),t("br")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("nohup java -jar eladmin-system-2.6.jar --spring.profiles.active=prod > nohup.out 2>&1 &\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("(2) "),t("strong",[s._v("停止脚本")]),s._v(" "),t("code",[s._v("stop.sh")]),s._v(" "),t("br")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("PID=$(ps -ef | grep eladmin-system-2.6.jar | grep -v grep | awk '{ print $2 }')\nif [ -z \"$PID\" ]\nthen\necho Application is already stopped\nelse\necho kill -9 $PID\nkill -9 $PID\nfi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("(3) "),t("strong",[s._v("查看日志脚本")]),s._v(" "),t("code",[s._v("log.sh")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tail -f nohup.out\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("脚本创建完成后就可以操作 "),t("code",[s._v("java")]),s._v(" 服务了")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 启动java\n./start.sh\n# 停止java服务\n./stop.sh\n# 查看日志\n./log.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"配置-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx"}},[s._v("#")]),s._v(" 配置 nginx")]),s._v(" "),t("p",[s._v("我们可以使用 "),t("code",[s._v("nginx")]),s._v(" 代理 "),t("code",[s._v("java")]),s._v("服务，添加配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('server {\n    listen 80;\n    server_name 域名/当前服务器外网IP;\n    location / {\n        proxy_pass http://127.0.0.1:8000; #这里的端口记得改成项目对应的哦\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Port $server_port;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        }\n    }\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"前端部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端部署"}},[s._v("#")]),s._v(" 前端部署")]),s._v(" "),t("p",[s._v("这里提供两个配置方式 [History、Hash] 的部署方式，首先修改接口地址，如果是 IP 地址，那么需要修改为外网 IP")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.el-admin.xin/images/2020/06/25/20200605162316.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"history-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#history-模式"}},[s._v("#")]),s._v(" History 模式")]),s._v(" "),t("p",[s._v("项目默认是 History 模式，不需要做任何修改")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.el-admin.xin/images/2020/09/17/image4285f15c9c2dfa96.png",alt:"image4285f15c9c2dfa96.png"}})]),s._v(" "),t("h4",{attrs:{id:"hash-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式"}},[s._v("#")]),s._v(" Hash 模式")]),s._v(" "),t("h5",{attrs:{id:"_1、修改-routers-js-取消-hash-的注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、修改-routers-js-取消-hash-的注释"}},[s._v("#")]),s._v(" 1、修改 routers.js，取消 hash 的注释")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.el-admin.xin/images/2020/09/17/image92197994858c5edd.png",alt:"image92197994858c5edd.png"}})]),s._v(" "),t("h5",{attrs:{id:"_2、修改根目录-vue-config-js-配置-取消-15-行的注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、修改根目录-vue-config-js-配置-取消-15-行的注释"}},[s._v("#")]),s._v(" 2、修改根目录 vue.config.js 配置，取消 15 行的注释")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.el-admin.xin/images/2020/09/17/imagee7ae12491c445923.png",alt:"imagee7ae12491c445923.png"}})]),s._v(" "),t("h4",{attrs:{id:"打包项目-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包项目-2"}},[s._v("#")]),s._v(" 打包项目")]),s._v(" "),t("p",[s._v("不管是将项目部署到 "),t("code",[s._v("nginx")]),s._v(" 还是其他服务器，都需要先将项目打包")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm run build:prod\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("打包完成后会在根目录生成 "),t("code",[s._v("dist")]),s._v(" 文件夹，我们需要将他上传到服务器中")]),s._v(" "),t("h4",{attrs:{id:"nginx-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[s._v("#")]),s._v(" Nginx 配置")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("nginx/conf/nginx.conf")]),s._v("  添加配置")]),s._v(" "),t("h5",{attrs:{id:"history-模式配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#history-模式配置"}},[s._v("#")]),s._v(" History 模式配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server\n    {\n        listen 80;\n        server_name 域名/外网IP;\n        index index.html;\n        root  /home/wwwroot/eladmin/dist;  #dist上传的路径\n        # 避免访问出现 404 错误\n        location / {\n          try_files $uri $uri/ @router;\n          index  index.html;\n        }\n        location @router {\n          rewrite ^.*$ /index.html last;\n        }  \n    } \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h5",{attrs:{id:"hash-模式配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式配置"}},[s._v("#")]),s._v(" Hash 模式配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n\t   listen       80;\n\t   server_name  域名/外网IP;\n\n\t   location / {\n\t      root   /home/wwwroot/eladmin/dist; #dist上传的路径\n\t      index  index.html;\n\t   }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"二级目录部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二级目录部署"}},[s._v("#")]),s._v(" 二级目录部署")]),s._v(" "),t("h5",{attrs:{id:"nginx-配置-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-2"}},[s._v("#")]),s._v(" Nginx 配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n\t   listen       80;\n\t   server_name  域名/外网IP;\n\n\t   location /dist {\n\t      root   /home/wwwroot/eladmin/test;\n\t      index  index.html;\n\t   }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("文件目录\n"),t("img",{attrs:{src:"https://img.el-admin.xin/images/2020/06/25/CIyQda.png",alt:"image"}})]),s._v(" "),t("p",[s._v("注意目录名称要与配置名称一致")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.el-admin.xin/images/2020/06/25/PP6D6b.png",alt:"image"}})]),s._v(" "),t("h3",{attrs:{id:"重启nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启nginx"}},[s._v("#")]),s._v(" 重启Nginx")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl restart nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("重启 "),t("code",[s._v("nginx")]),s._v(" 后，访问你的域名或者IP地址即可")]),s._v(" "),t("Vssue",{attrs:{title:s.$title}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);