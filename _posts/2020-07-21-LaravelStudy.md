---
title: Laravel框架学习
tags: [编程,php]
---
# Laravel框架学习

参考文档 <https://cloud.tencent.com/developer/article/1602220>

## 目录结构

* app——核心业务逻辑代码目录，也就是我们平时主要码码码的地方。初始包括Console（cli命令行模式）、Exception（异常处理）、Http（路由、请求、控制器、中间件等）、Provides（服务组件）四个核心目录。随着项目功能的扩增，还可以artisan命令行工具添加Listeners（事件监听）、Jobs（消息队列）等目录。
* bootstrap——框架启动和自动加载配置的相关文件目录。
* config——应用程序的各模块配置文件目录。
* database——数据库迁移及填充文件目录，这个在项目运维部署的时候很有用。
* public——对外提供访问的地方，包含应用的入口文件index.php，同时包含js、css等静态资源。
* resources——视图文件view的存放目录。
* storage——与应用即时存储相关的文件目录，包括编译后的视图组件、文件缓存、session文件和日志文件等。
* tests——自动化测试文件目录。
* vendor——项目依赖库文件，包括laravel核心等源码，由composer自动生成并更新。

此外，还有两个重要的文件composer.json和.env。前者是composer的包依赖配置文件，通过编写该文件我们可以告诉composer项目所依赖的库及其文件映射形式（PSR0、PSR4、classmap和files四种模式）；后者是环境配置文件，当开发环境变更时，可以通过该文件的拷贝及修改实现项目部署的自动变更而无需修改业务代码。

## 程序流程

文件自动加载，服务容器启动与基础服务注册，web内核加载，请求初始化，请求处理与响应，响应发送，程序终止。

### 入口文件 index.php

```php
//自动加载文件
require __DIR__.'/../vendor/autoload.php';

//这里的app是一个Illuminate\Foundation\Application
$app = require_once __DIR__.'/../bootstrap/app.php';

//kernel类处理请求
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
```

1. 首先是自动加载
2. 使用 bootstrap 下的 *app.php* 生成一个*全局服务容器*
3. Illuminat\Contracts\Http\Kernel 类下的 *kernel* 对象。 kernel 对象即是程序处理 http 请求的核心。
4. 在处理请求之前需要先通过 *Illuminate\Http\Request* 的静态方法 *capture()* 初始化请求。
5. *kernel* 对象的 *handle()* 接口作为一个流式接口，封装了请求路由、中间件链式调用、业务逻辑处理等一系列动作，并最终返回一个符合 PSR 规范的标准 *response* 对象。
6. 调用 *response* 的 *send()* 方法将缓冲区的响应数据发送出去。
7. *kernel* 的 *terminate()* 方法进行程序的收尾工作，如上下文清理、统计上报等。

### 自动加载类 autoload.php

php 的自动加载类，一般和composer配合使用。

### 启动文件 /bootstrap/app.php

```php

$app = new Illuminate\Foundation\Application(
    $_ENV['APP_BASE_PATH'] ?? dirname(__DIR__)
);

$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    App\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

return $app;
```
