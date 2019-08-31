/*
Created by 14486 on 2019/8/30.
    算法:
        1: 概念
            给定一个或多个值,通过一些列的运算输出所需要结果的过程,就叫算法;
        2: 算法好坏
            1: 时间复杂度 (该算法所需要的时间)
                用一个辅助函数 fn 当 Tn/fn 为一个不为0的常数
                我们就将fn看成是他的同类型函数; 用大O表示
                T(n) = O(fn);
            2: 空间复杂度 (该算法占用空间或者内存)
 */
// 时间频度
let a = 3;
let b = 4;
console.log(a);
// T(n) = 3; n代表问题的规模,在代码里面可以理解为循环的次数;
// O(1) 
function f(n) {
    let a = 1;  // 1
    for (var i = 0; i < length; i++) { // n
        a += i; // n
    }
    return a; // 1
}
// T(n) = 1 + n + n + 1 = 2n+2;
// 大O表示法   O(n);

function fn(n) {
    let a = 1;   // 1
    for (var j = 0; j < length; j++) { // n
        for (var i = 0; i < length; i++) { // n²
            a++;  // n²
        }
    }
    return a;
}
// T(n) = 1 + n + n² + n² + 1 = 2n² + n + 2;
// O(n²)