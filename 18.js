/**
 * Created by 14486 on 2019/4/4.
 */
/*
* 字典
*   键值存储数据 [键,值]*/
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
            let flag = this.has(key);
            if(flag){
                this[sym].forEach(v=>{
                    if(v[0]===key){
                        v[1] = value;
                        return;
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
                    return [this[sym][i][1],i];
                }
            }
        }
        has(key){
            let i = false;
            this[sym].forEach(v=>{
                if(v[0]===key){
                    i = true;
                }
            })
            if(i){
                return true;
            }
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

/*
* 哈希表
*   哈希函数*/
let HashTab = (function () {
    let sym = Symbol();
    function hash(key) {
        let num = "";
        [...key].forEach(item=>{
            num+=item.charCodeAt(0);
        });
        
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