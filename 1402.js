/*
 Created by 14486 on 2019/9/2.
    集合
        由一组无序并且唯一的的数据组成
        其实就是es6的set结构
*/

let set = new Set();
set.add(123);  // 添加数据
set.add(234);
set.entries(); //
for(let k of set){
    // 123 456;
    console.log(k);
}
for(let k of set.entries()){
    // [ 123, 123 ]
    // [ 234, 234 ]
    console.log(k);
}
set.delete(123);  // 删除数据
console.log(set); // Set { 234 }
set.clear(); //清空
let s = new Set([1,2,3,2,1]); // 数组去重
console.log([...s]);     // [ 1, 2, 3 ]

// 并集
function merge(s1,s2) {
    return new Set([...s1,...s2]);
}

// 交集  也就是重复项 大家都有的
function jiaoji(s1,s2) {
    let s3 = new Set();
    for (let key of s1){
        if(s2.has(key)){
            s3.add(key);
        }
    }
    return s3;
}
// 差集
function chaji(s1,s2) {
    let s3 = new Set();
    for (let key of s1){
        if(!s2.has(key)){
            s3.add(key);
        }
    }
    for (let key of s2){
        if(!s1.has(key)){
            s3.add(key);
        }
    }
    return s3;
}