/* 
什么是NVM
    全名node.js version management，是一个node.js的版本管理工具。通过它可以安装和切换不同版本的 nodejs。

    其主要解决不同项目所需node.js版本不一致时管理的麻烦，就比如我弄hexo主题，不同的主题需要的nodejs版本不一致，没有这来管理，我得不停安装卸载nodejs来测试，还要修改环境变量等，十分麻烦，使用这工具就能很轻松管理。

    使用步骤
        第一步：卸载你的NodeJs
            将电脑现在装的node进行卸载，最好是删除所有关于node的文件及内容

        第二步：安装NVM
            通过Github服务器下载安装

            下载完成后，按照安装操作一步一步安装就好了，很简单。

        nvm-noinstall.zip： 这个是绿色免安装版本，但是使用之前需要配置
        nvm-setup.zip：这是一个安装包，下载之后点击安装，无需配置就可以使用，方便。
        Source code(zip)：zip压缩的源码
        Sourc code(tar.gz)：tar.gz的源码，一般用于Linux系统
        建议下载nvm-setup.zip版本，配置我怕你不会弄弄乱了也不懂改。

        打开zip文件，运行exe文件安装，我建议把nvm与node相关都统合在一起，以后好管理，我统一都在C:\Env下，NVM安装地址就填C:\Env\NVM，nodejs安装地址就填C:\Env\nodejs，安装完后你会看到C:\Env目录下有NVM文件夹，但是没有nodejs文件夹，这是因为前面的nodejs地址填的是以后nodejs的访问地址，现在还没有安装并使用nodejs自然就没有。

        第三步：测试nvm是否安装成功
            nvm -v
                //version 1.1.6  出现版本号，说明安装成功，接下来就可以进行下面的操作
        第四步：安装并控制node版本
            前面完成后，接下来就可以安装并随意切换我们的node版本号了。

nvm list available  // 首先可以通过命令来查询我们可以安装的node版本
nvm install 10.5.0  // 安装指定的版本的nodejs
nvm ls   // 查看目前已经安装的版本
nvm use 10.5.0  // 使用指定版本的nodejs，需要权限较高，windows下需要管理员权限
可以通过nvm install命令安装多个版本的nodejs，然后通过nvm use命令来切换要是用的版本号。

通过切换版本号后，可以通过node -v命令来检测是否使用成功。

镜像加速
由于国外的镜像源下载慢，可以使用命令更改为Taobao的源。

nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
NVM常用命令
nvm off                     // 禁用node.js版本管理(不卸载任何东西)
nvm on                      // 启用node.js版本管理
nvm install <version>       // 安装node.js的命名 version是版本号 例如：nvm install 8.12.0
nvm uninstall <version>     // 卸载node.js是的命令，卸载指定版本的nodejs，当安装失败时卸载使用
nvm ls                      // 显示所有已安装的node.js版本
nvm list available          // 显示可以安装的所有node.js的版本
nvm use <version>           // 切换到使用指定的nodejs版本
nvm v                       // 显示nvm版本
nvm install stable          // 安装最新稳定版
*/