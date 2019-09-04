/**
 * Created by 14486 on 2019/9/4.
 */
/*
  单例模式: 解决了全局命名空间污染的问题
  简单工厂模式: 把功能相同的函数归类到一起,方便使用
  原型模式: 通过原型继承,减少代码量,复用,1:点击变文字模式; 2: 变文字 加颜色;

  建造者模式 (需求不断变化,使用)
    解决方案: 将一个对象分步骤创建出来
        创建一个主对象,将每一个功能抽离出来,在将各个功能挂载到实例化对象下面
*/
// 建造者模式
// 简历 人  姓名 职位
function Person(name,kill) {
    this.name = name;
    this.kill = kill;

}
Person.prototype.getSkill = function () {
    return this.kill || "保密"
};
var Work = function (work) {
    switch (work){
        case "code":
            this.work = "每天沉醉于编程";
            break;
        case "ui":
            this.work = "设计是一种态度";
            break;
        case "teacher":
            this.work = "园丁";
            break;
    }
};
var obj = new Person("罗恒","study");

// 判断
//3>2 && (fn(),1) || alert(1);

/*
  装饰着模式
      让我们的代码便于扩展
*/

// 过了一段时间除了变颜色 还要变大字体
let decorate = function (dom,fn,ev) {
    dom.onclick && (ev = dom.onclick,dom.onclick = function () {
        // 用ev存储原来的点击事件
        ev.call(dom);
        fn.call(dom);
    }) || (dom.onclick = fn)
};
/*
  外观模式:
     为一组复杂的子接口提供一个更高级的统一接口,
     以便更方便的去实现子接口的功能,常见兼容处理 主要做兼容
*/
function addEvent(el,type,callback) {
    if (document.attachEvent){
        el.attachEvent("on"+type,function () {
            callback.call(el,window.event);
        });
    }else{
        el.addEventListener(type,callback);
    }
}
addEvent(document,"click",function () {
    alert(1);
});

// 学习设计模式不要着急用 应该按照原本的思路写出来  然后再慢慢改进

/*
    适配器模式
        主要做兼容
    提供更通用更高级的接口
*/
let obj2 = {
    name:"luoheng",
    age:28,
    sex:"男"
};
Object.values(obj); // 将一个对象转化为数组; [luoheng,28,男];