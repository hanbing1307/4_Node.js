/* 
    Yarn（Yet Another Resource Navigator）
        早期的npm存在有诸多问题，不是非常的好用。yarn的出现就是为了帮助我们解决npm中的各种问题，如何解决呢？方案很简单使用yarn替换掉npm。当然现在的npm相较于之前的已经得到了很大的优化，所以你完全可以选择不使用yarn。

        在新版本的node中，corepack中已经包含了yarn，可以通过启用corepack的方式使yarn启用。首先执行以下命令启用corepack：
            corepack enable

        查看yarn版本
            yarn -v

        切换yarn版本，最新版：
            corepack prepare yarn@stable --activate

        切换为1.x.x的版本：
            corepack prepare yarn@1 --activate
        
        命令
            yarn init （初始化，创建package.json）

            yarn add xxx（添加依赖）

            yarn add xxx -D（添加开发依赖）

            yarn remove xxx（移除包）

            yarn（自动安装依赖）

            yarn run（执行自定义脚本）

            yarn <指令>（执行自定义脚本）

            yarn global add（全局安装）

            yarn global remove（全局移除）

            yarn global bin（全局安装目录）

        Yarn镜像配置
            配置：
                yarn config set registry https://registry.npmmirror.com

            恢复：
                yarn config delete registry

        Pnpm
            pnpm又是一款node中的包管理器，我真的不想在介绍了。但是想想还是说一下吧，毕竟也不难。作为初学者的你，npm、yarn和pnpm选一个学一学就可以了。

            安装
                npm install -g pnpm

            命令
                pnpm init（初始化项目，添加package.json）

                pnpm add xxx（添加依赖）

                pnpm add -D xxx（添加开发依赖）

                pnpm add -g xxx（添加全局包）

                pnpm install（安装依赖）

                pnpm remove xxx（移除包）

            Pnpm镜像配置
                配置：
                pnpm config set registry https://registry.npmmirror.com

                恢复：
                    pnpm config delete registry
*/