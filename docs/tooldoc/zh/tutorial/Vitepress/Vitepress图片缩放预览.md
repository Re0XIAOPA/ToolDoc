# markdown-it-custom-attrs

基于markdown-it 可设置自定义属性的插件

效果预览地址传送

vitepress 图片放大预览配置

## Step. 1: 安装依赖

```bash
npm i markdown-it-custom-attrs
```
Step. 2: 引入插件
```js
import mdItCustomAttrs  from 'markdown-it-custom-attrs'
```

## Step. 3: 配置 vitepress config.js文件

```js
import mdItCustomAttrs  from 'markdown-it-custom-attrs'

export default {
    markdown:{
    config: (md) => {
        // use more markdown-it plugins!
        md.use(mdItCustomAttrs, 'image', {
            'data-fancybox': "gallery"
        })
        }
    }
}
```
## Step. 4: 引入图片灯箱js和css文件

配置.vitepress/config.js文件

加入head配置
```js
export default {
    head:[
        [
            "link",
            { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
        ],
        ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    ]
}
```
## Step. 5: 渲染效果

```bash
![](图片地址)
<img src="图片地址" data-fancybox="gallery"/>
```