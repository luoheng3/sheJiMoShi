/**
 * Created by 14486 on 2019/4/3.
 */
// 优先队列
let Queue = (function(){
    let symbol = Symbol();
    class Fn{
        constructor(el,id){
            this.el = el;
            this.id = id;
        }
    }
    return class{
        constructor(){
            this[symbol] = [];
        }
        enqueue(el,id){
            let node = new Fn(el,id);
            let i = 0;
            while( i < this.size()){
                if(this[symbol][i].id<id){
                    break;
                }
                i++;
            }
            this[symbol].splice(i,0,node);
        }
        dequeue(){
            return this[symbol].shift().el;
        }
        first(){
            return this[symbol][0];
        }
        clear(){
            this[symbol] = [];
        }
        size(){
            return this[symbol].length;
        }
        print(){
            while (this.size())
                console.log( this.dequeue() );
        }
    }
})();
let queue = new Queue();
queue.enqueue("罗恒",2);
queue.enqueue("范雨菲",5);
queue.enqueue("赖你",1);
queue.enqueue("妈妈",10);
queue.print();

/*
* 链表
*   数组取值很方便 但删除或者添加数据的时候 需要挪动后面所有的位置
*   链表 取值不是很方便 但是添加或者删除数据
*       功能:
*           存储数据经常会发生插入或者删除操作的时候;
*           1: append() 添加数据
*           2: 查找 find()
*           3: 指定位置添加 insert()
*           4: 删除 remove()
*           5: 返回长度 size()*/
let LinkList = (function () {
    // 避免外部访问
    let Head = Symbol();
    // 存储数据与下一个节点的类
    class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
    return class{
        constructor(){
            // 链头
            this[Head] = null;
        }
        append(data){
            // 创建对应的链接点
            let node = new Node(data);
            // 获取链头
            let head = this[Head];
            // 链头有两种情况 要么没添加是null 要么不是null
            if( head===null ){
                // 等于null 说明是第一次添加 就把链头指向node就行了
                this[Head] = node;
                return;
            }else{
                // 不是null 我们需要找到最后一条node数据 特点他的next指向null
                while(head.next !== null){
                    head = head.next;
                }
                head.next = node;
            }
        }
        find(index){
            let i = 0;
            // 获取链头
            let head = this[Head];
            while(head){
                if(i===index){
                    // 如果序号等于就返回对应的数据
                    return head;
                }
                // head.next指向下一个节点对象 将下一个节点对象赋值给head当成链头
                head = head.next;
                i++;
            }
            return null;
        }
        insert(data,index){
            let node = new Node(data);
            let beforeNode,
                currentNode = this.find(index);
            if(index===0){
                this[Head] = node;
            }else{
                beforeNode = this.find(index-1);
                beforeNode.next = node;
            }
            node.next = currentNode;
        }
        remove(data){
            let head = this[Head];
            let prev = null;
            if(head.data===data){
                this[Head]=head.next;
                return;
            }
            while(head){
                if(head.data===data){
                    break;
                }
                (head.next.data===data) && (prev = head);
                head = head.next;

            }
            if(prev){
                 prev.next = head.next
            }else{
                throw new Error("没有该数据")
            }
        }
        size(){
            let i = 0;
            let head = this[Head];
            while(head){
                i++;
                head = head.next;
            }
            return i;
        }

    }
})();
let link = new LinkList();
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