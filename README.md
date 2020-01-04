demo文件夹，demo项目
demo-debug.apk，打包获得的apk

复现方式：
 1. 手机开启USB调试；
 2. 安装demo-debug.apk；
 3. 打开游戏，点击按钮播放音效，切到后台；
 4. 在android studio的logcat中，搜索wake lock，
    或cmd执行adb shell dumpsys power --charged 搜索wake lock；
	可以看到一个关于'AudioMix'的PARTIAL_WAKE_LOCK长期（测试至少存在20分钟以上）没有被释放。