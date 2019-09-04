/*
Created by 14486 on 2019/9/4.
*/
/*
适配器模式
    定义: 将一个类的接口转换成另外一个接口,以满足用户需求,
         主要解决接口不一样而产生的兼容问题;
*/
// 代理模式 proxy 为对象提供一个代理,用来控制对这个对象的访问;
let obj = {
    name: "罗恒",
    age: 19
};
let outObj = new Proxy(obj,{
    get(target,key){
        if (key === "name"){
            return "对不起你没有权限访问";
        }
    },
    set (target,key,value){
        if (key === "name"){
            throw new Error("该属性不可以修改");
        }
    }
});
outObj.name = "乌拉";
