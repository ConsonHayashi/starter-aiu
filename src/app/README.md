# 概览
```
commons 公共包，定义了组件规范和共享模块
components 组件包，定义了可复用组件
beans 类型，定义了其他类
entities 实体类包，定义了可复用实体
pages-base 基础页面包，定义了可复用的页面
pages-service 业务页面包，定义了核心业务的页面
pops 窗口包，定义弹出的窗口
requests 请求包，定义了发起请求的服务
converter 转化器，定义了状态的转化
```

> 需要明确的是，一个组件必然严格小于所属一个页面。同时，尽可能减少组件之间的父子关系，将其转化为兄弟关系。
> 需要指出的是，实体类被定义称interface而不是class。
> 需要指出的是弹出窗口具有全局性，tabs可以看作是弹出窗口。
> state 之间的转化依赖于action，一个action对象描述了行为，一个state和一个action作为reducer的入参，将转化为另外一个state。reducer需要遵循纯函数规范。