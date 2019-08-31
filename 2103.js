/**
 * Created by 14486 on 2019/8/30.
 */
// 数组去重
function f1(arr) {
    let length = arr.length;
    let obj = {};
    for (var i = 0; i < length; i++) {
        if(obj[arr[i]]){
            arr.splice(i,1);
        }else{
            obj[arr[i]] = true;
        }
    }
}
let arr = [1,34,531,3,1,31,34];
f1(arr);
console.log(arr);
function f2(arr) {
    let newArr = [];
    let obj = {};
    arr.reduce(function (a,b) {
        // 如果给了初始值 那么a就代表这个初始值 b就是当前项的值;
        // obj == a;
        if(!obj[b]){
            obj[b] = true;
            newArr.push(b);
        }
    },obj);
    return newArr;
}
console.log(f2(arr));

function f3(arr) {
    let newArr = [];
    arr.reduce(function (a,b) {
        if(newArr.indexOf(b) === -1){
            newArr.push(b);
        }
    },newArr);
    return newArr;
}
console.log(f3(arr));
// 判断回文字符串
