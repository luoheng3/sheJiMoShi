/*
Created by 14486 on 2019/9/4.
    MVC模式
        M(model)-模型 也可以理解为数据  V(view)-视图  C(controller)-控制器
        它是一种将业务逻辑,数据,视图分离的模式
        1: user => view 用户在视图上与程序交互,
        2: c 触发相应的事件,根据情况让M做出相应的改变
        3: M变化之后会要求view视图根据数据做相应的更新
            第三部是关键点,M模型数据的变化,会引起V视图的变化,
                利用监听数据set与观察者模式可以很好的做到这一点
 */
let MVC = (function () {
    // model  数据模型
    let M = (function () {
        let data = new Proxy({
            nApple: 0,
            nPeer: 0
        },{
            get(target,key){
                return Reflect.get(target,key);
            },
            set(target,key,value){

            }
        })
    })()
})();
