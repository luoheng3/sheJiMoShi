/*
Created by 14486 on 2019/9/1.
*/
// 优先队列
let Queue = (function(){
    let symbol = Symbol();
    let arr = [];
    return class{
        constructor(){
            this[symbol] = [];
            this.i = 0;
        }
        enqueue(ele,vip){
            // 老师是用一个节点来存储数据 在做判断 splice
            arr[this.i] = {};
            arr[this.i]["num"] = vip;
            arr[this.i]["val"] = ele;
            arr.sort(function (x,y) {
                return y["num"] - x["num"];
            });
            this[symbol] = [];
            for (var i = 0,length = arr.length; i < length; i++) {
                this[symbol].push(arr[i]["val"]);
            }
            this.i++;
        }
        dequeue(){
            return this[symbol].shift();
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
            while (this[symbol].length)
                console.log( this.dequeue() );
        }
    }
})();
let queue = new Queue();
queue.enqueue("罗恒",5);
queue.enqueue("范雨菲",10);
queue.enqueue("薛勇",6);
// 优先队列 老师的写法;
let Queue2 = (function(){
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
// 双向队列 允许从前面加 也允许从后面加 ,允许从前面出 允许从后面出
// 和数组一模一样 unshift() push()   shift()  pop()