/*
Created by 14486 on 2019/9/4.
*/
/*
  设计模式
    前辈写代码遇到的问题所提出的解决方案
    创建型设计模式
        就是创建对象的几种方式 以及解决了什么问题
*/
let a = 1;
let b = 2;
// 这样就写了很多全局变量 如果别人也用了a就会覆盖掉(全局命名空间污染)
// 解决方案
let obj = { // 将变量或者方法挂载到一个对象上面
    a:1,
    b:2
};
(function () {
    // 或者放在一个自执行函数里面
    let a = 1;
    let b = 2;
})();
/*
    单例模式
        把所有的变量或者函数都写在全局命名空间下
*/
let json = (function () { //静态变量 只能访问 不能修改
    let o = {
        a:1,
        b:2
    };
    return {
        get (val) {
            // 好处:外面只能化访问到但是不能修改
            return o[val];
        }
    }
})();
/*
 简单工厂模式
   把相同的事物归类到一起
   好处
       扩展性差 如果还有其他食物呢
*/
function Steak() {
    this.price = 20;
    this.time = 10
}
function Noodle() {
    this.price = 8;
    this.time = 5;
}
function factory(val) {
    function Steak() {
        this.price = 20;
        this.time = 10
    }
    function Noodle() {
        this.price = 8;
        this.time = 5;
    }
    let o = null;
    switch (val){
        case "Steak":
            o = new Steak();
            break;
        case "Noodle":
            o = new Noodle();
            break;
    }
    return o;
}
// 改进版 上面的扩展性不好
function Shop(name) {
    return new this[name]();
}
Shop.prototype = {
    constructor:Shop,
    Steak:function () {
        this.price = 20;
        this.time = 10
    }
};
/*
原型模式
   其实就是原型继承
*/
function Banner(dom) {
    this.dom = dom;
    this.init();
}
Banner.prototype.init = function () {
    let ulDom = this.dom.getElementsByTagName("ul")[0];
    setInterval(function () {
        ulDom.style.marginLeft = parseInt(ulDom.style.marginLeft || 0) - 150 + "px";
        (ulDom.style.marginLeft==="-600px") && (ulDom.style.marginLeft = "0px");
    },1000)
};
// 扩展 需要左右按钮
function Banner2(dom) {
    // 是有属性的继承
    Banner.call(this);
}
function Fn() {

}
// 原型的继承
Fn.prototype = Banner.prototype;
Banner2.prototype = new Fn();