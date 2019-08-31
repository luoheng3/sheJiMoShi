/*
Created by 14486 on 2019/8/30.
*/
// 找出一个字符出现最多的字符
function fn(str) {
    //  let arr = [...str];  es6
    let arr = str.split("");
    let s = "";
    let num = 0;
    let obj = arr.reduce(function (a,b) {
        if(!a[b]){
            a[b] = 1;
        }else{
            a[b]++;
            // 将num作为字符出现最多的次数, 判断当前字符出现次数是否大于 num
            if(a[b]>=num){
                num = a[b]; // 更新当前次数最大值;
                s = b;     // 更新最大值的字符;
            }
        }
        return a;
    },{});
    return `出现最多的字符是${s},一共出现了${num}次`;
}
var str = "fajeufhdshjf8jQH9DSNUFJHQW8HUIDHFDSAHF8WH";
console.log(fn(str));
