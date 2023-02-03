/* 
    package.json
        scripts:
            - 可以自定义一些命令
            - 定义以后可以直接通过npm来执行这些命令
            - start 和 test 可以直接通过npm start 和 npm test 执行
            - 其它命令需要通过npm run xxx 执行
        
    npm镜像
        - npm的仓管服务器位于国外，有时候并不是那么好使
        - 为了解决这个问题，可以在npm中配置一个镜像服务器
        - 镜像的配置：
            1. 在系统中安装cnpm(不太推荐)
                npm install -g cnpm --registry=https://registry.npmmirror.com
            2. 彻底修改npm仓库地址（推荐）
                npm set registry https://registry.npmmirror.com
                - 还原到原版仓库
                    npm config delete registry
                - 查看当前仓库地址
                    npm config get registry

    镜像服务器是什么：
        镜像服务器(Mirror server)与主服务器的服务内容都是一样的，只是放在一个不同的地方，分担主机的负载。

        简单来说就是和照镜子似的，能看，但不是原版的。在网上内容完全相同而且同步更新的两个或多个服务器，除主服务器外，其余的都被称为镜像服务器。
*/