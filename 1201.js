/*
Created by 14486 on 2019/9/1.
    数据结构
        es6新增的数据结构 Set Map
        数组和对象存储数据在某个时候并不是很方便,就需要我们自己
            这时候就需要创建数据结构来存储数据;
        栈:
            先进后出,
            功能:
                1: push() 添加数据
                2: pop() 取出数据并且删除该数据
                3: 返回栈顶数据 peek
                4: 清空栈 clear()
                5: 返回栈中数据长度 size()
        运用:
 */
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

// 栈案列
// 进制转换 短除法
// 案例 利用栈结构做进制转换
function fn(data,num) {
    let stack = new Stack();
    let str = "0123456789abcdef";
    let res = "";
    while(data>0){
        // 余数入栈
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


// 判断是不是回文字符串;
let str = "上海自来水来自海上";
let str1 = str.split("").reverse().join(""); // str === str1 就可以判断是不是回文字符串了
function fn2(str) {
    let length = str.length;
    let stack = new Stack();
    let res = "";
    for (let i = 0; i < length; i++) {
        // 字符入栈
        stack.push(str.charAt(i));
    }
    while (stack.size()){
        res += stack.pop();
    }
    return (res === str) && true || false;
}


// 括号匹配 () {} []
let str3 = "(res === str && true || false;";
function fn3(str) {
    let length = str.length;
    let stack = new Stack();
    let reg = /[(){}[\]]/;
    let reg1 = /[)}\]]/;
    let leftArr = ["[","(","{"];
    let rightArr = ["]",")","}"];
    for (var i = 0; i < length; i++) {
        let newStr = str.charAt(i);
        if(reg.test(newStr)){ // 判断是否有括号进行匹配
            // 判断第一次进来的是不是右括号
            if(reg1.test(newStr)){
                // 为真的话,说明第一次还没入栈就是右括号
                if(rightArr.indexOf(newStr)!== leftArr.indexOf(stack.peek())){
                    return false;
                }
                // 括号出栈
                stack.pop();
            }else{
                // 括号入栈
                stack.push(newStr);
            }
        }
    }
    console.log(stack.size());
    return stack.size()?false:true;
}
// 老师写的
function f(str) {
    let stack = new Stack(),
        s1 = "([{",
        s2 = ")]}";
    [...str].forEach(v=>{
        // 入栈
        if(s1.indexOf(v)!==-1) {
            stack.push(v)
        }else if(s2.indexOf(v)!==-1){
            if(s1.indexOf(stack.peek())!==s2.indexOf(v)){
                return false;
            }
            stack.pop();
        }
    });
    return stack.size()===0;
}