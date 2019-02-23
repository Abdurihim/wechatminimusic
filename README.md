# 微信小程序-MINI-Music

#### 成果图：  

![成果图](./music.gif)

----

#### 歌曲播放逻辑导图：  

![歌曲播放逻辑导图](https://github.com/longyinzaitian/wechatminimusic/blob/master/%E6%AD%8C%E6%9B%B2%E6%92%AD%E6%94%BE%E9%80%BB%E8%BE%91%E5%AF%BC%E5%9B%BE.png)

刚开始以为逻辑不复杂，直接写，没有画导图，后面要完成播放逻辑之后，自测总是出现bug，逻辑搞起来还是比较复杂的，所以就画了这个播放逻辑图


---

##### 博客地址：  
  
    https://blog.csdn.net/u010156024/article/details/87897241
   
---

##### 注意：  
1. 需要配置`project.config.json中`的`appid`字段设置成自己注册的id值。否则，微信开发工具有些功能用不了。
2. 工程文件可用IDE工具打开目录文件夹，本人用的Sublime Text.
3. 工程构建使用的WePY构建的。需要把clone到本地后，安装WePY进行构建，完成后，再通过微信开发者工具打开dist目录就可以了。
	> git clone 本工程到本地  
	> cd wechatminimusic       //切换到工程文件夹目录下  
	> npm install wepy-cli -g  //全局安装或更新WePY命令行工具  
	> npm  install             //安装依赖  
	> wepy build --watch       //开启编译   --watch参数可以不用加，加了之后会监听文件修改，实时编译  

4. WePY官方文档：https://tencent.github.io/wepy/document.html#/
     
    
---
Copyright (c) 2019 longyinzaitian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

