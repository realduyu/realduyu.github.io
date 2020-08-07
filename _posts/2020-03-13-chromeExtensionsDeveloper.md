---
title: Chrome浏览器扩展程序开发学习
tags: [code, JavaScript, Node.js]
categories: [code]
---
# 关于Chrome浏览器扩展程序开发

chrome 扩展程序是由 js,css,HTML 等常规前端技术组成的可以自动化浏览器动作的 chrome 插件形式工具。

非官方中文文档： <https://crxdoc-zh.appspot.com/extensions/devguide>

官方文档： <https://developer.chrome.com/extensions/devguide>

开发学习参考： <https://github.com/sxei/chrome-plugin-demo>

## 目录结构

chrome 扩展程序在主目录下必须有 *manifest.json* 配置文件，其他文件的位置都是根据此文件的配置决定的。

一般目录结构如：

```bash
 |-manifest.json
 |--js
 | |-popup.js
 | |-backgroud.js
 |--html
 | |-popup.html
 |--res
 | |-icon.png
```

### manifest.json

此文件为扩展程序的必要配置文件，使用json格式。

文件的配置信息一般如下：

```js
{
    "name": "我是一个插件", //插件名称
    "version": "0.1.2",//插件版本
    "manifest_version": 2, //配置文件版本
    "description": "我是插件的描述信息", //插件描述信息
    "update_url": "http://***.com/update/manifest.xml", //升级插件所需的配置文件
    "icons": {
        "48": "img/icon.png"
    },
    // 浏览器右上角图标设置，browser_action、page_action、app必须三选一
    "browser_action":   //设置了browser_action时，点击插件图标可弹出自定义页面
    {
        "default_icon": "img/icon.png",
        // 图标悬停时的标题，可选
        "default_title": "鼠标悬停时的标题",
        "default_popup": "popup.html"   //自定义页面
    },
    "permissions": [    //插件需要的权限
        "cookies",
        "https://www.XXX.com/", //需要访问的地址
    ],
    "background": {     //定义backgronud
        "scripts": [    //background会调用的js，按顺序调用
            "js/jquery-2.1.1.min.js",
            "js/background.js"
        ],
        "persistent": true
    },
    "content_scripts": [
        {
            "matches": ["<all_urls>"],
            "js": [
                "js/jquery-2.1.1.min.js",
                "js/content-script.js"
            ]
        }
    ],
    "web_accessible_resources": ["js/inject.js"]
}
```

### popup.js
