/*
Created by 14486 on 2019/9/2.
    字典 类似于map数据结构
        键值存储数据 [键,值]
*/
// 模拟代码,没有什么实际意义,实际使用直接用map就可以了
let Map = (function () {
    let sym = Symbol();
    return class{
        constructor(){
            this[sym] = [];
            // 用于查找存在值的位置
            this.i = 0;
        }
        set(key,value){
            // 判断是否存在key
            // 不存在就 push
            // 不用直接循环性能更好 flag也要用到for循环
            let flag = this.has(key);
            if(flag){
                this[sym].forEach(v=>{
                    if(v[0]===key){
                        v[1] = value;
                    }
                })
            }else{
                this[sym].push([key,value]);
            }
        }
        get(key){
            let length = this.size();
            for (var i = 0; i < length ; i++) {
                if(this[sym][i][0]===key){
                    return [this[sym][i][0],this[sym][i][1]];
                }
            }
        }
        has(key){
            let i = false;
            this[sym].forEach(v=>{
                if(v[0]===key){
                    return true;
                }
            });
            return false;
        }
        delete(key){
            let length = this.size();
            for (var i = 0; i < length; i++) {
                if(this[sym][i][0]===key){
                    return this[sym].splice(i,1);
                }
            }
        }
        size(){
            return this[sym].length;
        }
    }
})();
let map = new Map();
// 并不是很方便 存储值和取值 都要遍历
/*
哈希表 最重要的就是哈希函数
    哈希函数
        key => value
        怎么样将key转化为一个数字,存值的时候通过它存值,取也是取值;
        因为数组存取值直接找到对应序号就可以了
        解决办法 s = "" + str.charCodeAt(0) - 0; 得到一个数字

        具有唯一性,简单,
*/
let HashTab = (function () {
    let sym = Symbol();
    function hash(key) {
        let num = 0;
        [...key].forEach(item=>{
            num+=item.charCodeAt(0);
        });
        // 需要解决问题  afei 和 feia重复 数组长度过长( 用% )
        // 用链表解决 
        return num;
    }
    return class{
        constructor(){
            this[sym] = [];
            this.i = 0;
        }
        set(key,value){
            let index = hash(key);
            this[sym][index] = value;
        }
        get(key){
            let index = hash(key);
            return this[sym][index];
        }
    }
})();
var str = "罗恒";
console.log(str.charCodeAt(1));
// 解决办法 s = "" + str.charCodeAt(0) - 0;
