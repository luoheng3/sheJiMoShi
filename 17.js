/**
 * Created by 14486 on 2019/4/3.
 */

let queue = new Queue();
queue.enqueue("罗恒",2);
queue.enqueue("范雨菲",5);
queue.enqueue("赖你",1);
queue.enqueue("妈妈",10);
queue.print();


/*
* 集合
*   一组无序并且唯一的的数据  new Set()
*   */
let set = new Set();
set.add(123);
set.add(234);
set.entries();
for(let k of set){
    console.log(k);
}
set.delete(123);
console.log(set);
set.clear(); //清空
let s = new Set([1,2,3,2,1]); // 去重
console.log([...s]);