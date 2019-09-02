/*
Created by 14486 on 2019/9/2.
*/
// 上一次采用的是链表解决重复问题,
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