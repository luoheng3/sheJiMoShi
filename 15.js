/**
 * Created by 14486 on 2019/4/2.
 */
/*
* 数据结构
*     es6新增的数据结构 Set Map
*     数组和对象存储数据在某个时候并不是很方便,就需要我们自己
*     创建数据结构来存储数据;
*       栈:
*         先进后出
*         功能:
*           1: push() 添加数据
*           2: pop() 取出数据并且删除该数据
*           3: 返回栈顶数据 peek
*           4: 清空栈 clear()
*           5: 返回栈中数据长度 size()
*         运用:
*           */
// 创建栈类
let Stack = (function () {
    let symbol = Symbol();
    return class {
        constructor(){
            // 用来存储栈的数据
            this[symbol] = [];
        }
        push (el){
            this[symbol].push(el);
        }
        pop (){
            return this[symbol].pop()
        }
        peek (){
            return this[symbol][this[symbol].length -1]
        }
        clear(){
            // 这个item应该不能被外界访问到,所以要创建独一无二的Symbol
            // 闭包为什么不行,共用了,这个数组必须每次都不一样
            this[symbol] = [];
        }
        size(){
            return this[symbol].length;
        }
    }
})();
// 进制转换 短除法
// 案例 利用栈结构做进制转换
function fn(data,num) {
    let stack = new Stack();
    let str = "0123456789abcdef";
    let res = "";
    while(data>0){
        // 余数入在
        stack.push(str.charAt(data%num));
        // 取商;
        data = Math.floor(data/num);
    }
    while(stack.size()){
        res += stack.pop();
    }
    return res;
}
console.log(fn(80, 16)); // 50
// 判断回文字符串
function isP(word) {
    let stack = new Stack();
    [...word].forEach(v =>{
        // 入栈
        stack.push(v);
    });
    // 出栈;
    let res = "";
    while(stack.size()){
        res += stack.pop();
    }
    return (res===word && true || false);
}
console.log(isP("上海来水来自海上")); // true
// APi
let a = "上海自来水来自海上".split("").reverse().join("");
console.log((a === "上海自来水来自海上"));
// 括号匹配
function f(str) {
    let stack = new Stack(),
        s1 = "([{",
        s2 = ")]}";
    [...str].forEach(v=>{
        // 入栈
        (s1.indexOf(v)!==-1) && stack.push(v);
        //
        (s2.indexOf(v)!==-1) && stack.pop(v);
    });
    return (stack.size()===0) && true || false
}
console.log(f("while(stack.size()){res += stack.pop()};"));