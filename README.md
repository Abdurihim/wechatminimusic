# 微信小程序-MINI-Music

##### 成果图：  

![成果图](./music.gif)

----

##### 歌曲播放逻辑导图：  

![歌曲播放逻辑导图](https://github.com/longyinzaitian/wechatminimusic/blob/master/%E6%AD%8C%E6%9B%B2%E6%92%AD%E6%94%BE%E9%80%BB%E8%BE%91%E5%AF%BC%E5%9B%BE.png)

刚开始以为逻辑不复杂，直接写，没有画导图，后面要完成播放逻辑之后，自测总是出现bug，逻辑搞起来还是比较复杂的，所以就画了这个播放逻辑图


---

注意：  
1. 需要配置`project.config.json中`的`appid`字段设置成自己注册的id值。否则，微信开发工具有些功能用不了。
2. 工程文件可用IDE工具打开目录文件夹，本人用的Sublime Text.
3. 工程构建使用的WePY构建的。需要把clone到本地后，安装WePY进行构建，完成后，再通过微信开发者工具打开dist目录就可以了。
	> git clone 本工程到本地  
	> cd wechatminimusic       //切换到工程文件夹目录下  
	> npm install wepy-cli -g  //全局安装或更新WePY命令行工具  
	> npm  install             //安装依赖  
	> wepy build --watch       //开启编译   --watch参数可以不用加，加了之后会监听文件修改，实时编译  

4. WePY官方文档：https://tencent.github.io/wepy/document.html#/

