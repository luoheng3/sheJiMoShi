/*
Created by 14486 on 2019/9/2.
*/
/*
 链表
   数组取值很方便 当删除或者添加数据的时候 需要挪动后面所有的位置
        arr.splice(4,0,20); 从第四位开始删除 0个 添加 20;
   链表 取值不是很方便 适用于经常插入或者删除数据(优点) 不会影响后面的
       功能:
           存储数据经常会发生插入或者删除操作的时候;
           1: append() 添加节点
           2: 查找节点 find()
           3: 指定位置添加 insert()
           4: 删除 remove()
           5: 返回长度 size()
*/
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
            let beforeNode, // 当前序号的前后节点值都有可能不存在
                currentNode = this.find(index);
            if(index===0){
                this[Head] = node;
            }else{
                // 当前index对应的前后node值
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
// 双向链表 有next()指向下一个  也有prev指向上一个
// 循环链表 末尾指向第一个也就是链头