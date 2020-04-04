---
typora-root-url: assets
---

## 注意

+ 视频只有第一个可以点进去，但里面的视频的路径已经获取不到视频
+ 接口源于Eolinker

+ assets是存放md里面的图片文件的文件夹

+ font-awesome 4.7.0 字体图标

  + ![image-20200404224739916](/image-20200404224739916.png)

  + 使用font-awesome：

    + 方法一：

      从官网直接下载压缩包，如果要使用这里面的css文件，就要全部导入fonts到项目中。

    + 方法二：

      改变里面的路径：

```css
将：
@font-face {
  font-family: 'FontAwesome';
  src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');
  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

改为：
 @font-face {
  font-family: 'FontAwesome';
  src: url('https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css');
  src:
  url('https://cdn.staticfile.org/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2') format('woff2'),
  url('https://cdn.staticfile.org/font-awesome/4.7.0/fonts/fontawesome-webfont.woff') format('woff'),
  url('https://cdn.staticfile.org/font-awesome/4.7.0/fonts/fontawesome-webfont.svg') format('svg'),
  url('https://cdn.staticfile.org/font-awesome/4.7.0/fonts/fontawesome-webfont.eot') format('eot'),
  url('https://cdn.staticfile.org/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
}
```



## 效果图

首页：

<img src="/首页.png" alt="首页" style="zoom:80%;" />

视频详情：

<img src="/视频详情.png" alt="视频详情" style="zoom:80%;" />

视频评论：



<img src="/视频评论.png" alt="视频评论" style="zoom:80%;" />