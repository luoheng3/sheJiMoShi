/**
 * Created by 14486 on 2019/8/31.
 */
// 数据结构 栈
let Stack = (function () {
    let symbol = Symbol();
    return class{
        constructor(){
            this[symbol] = [];
        }
        push (data){
            this[symbol].push(data);
        }
        peek (){ // 返回栈顶数据
            return this[symbol][this.size()-1];
        }
        pop (){
            return this[symbol].pop();
        }
        size (){
            return this[symbol].length;
        }
        clear (){
            this[symbol] = [];
        }
    }
})();
let stack = new Stack();

// 队列
let Queue = (function () {
    let symbol = Symbol();
    return class{
        constructor(){
            this[symbol] = [];
        }
        push (data){
            this[symbol].push(data);
        }

    }
})();
let Tree = (function () {
    let symbol = Symbol();
    // 存储数据节点的类
    class Node{
        constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
    function fn(root,node) {
        if(root["data"] < node["data"]){
            // 放入右边
            if(root.right===null){
                root.right = node;
            }else{
                fn(root.right,node);
            }
        }else{
            // 放入左边
            if(root.left===null){
                root.left = node;
            }else{
                fn(root.left,node);
            }
        }
    }
    return class{
        constructor(){
            // 存储根节点;
            this[symbol] = null;
        }
        insert(data){
            let node = new Node(data);
            if(this[symbol]===null){
                // 等于 说明第一次进来
                this[symbol] = node;
            }else{
                fn(this[symbol],node);
            }
        }
        print (){
            let arr = [];
            function fn(root) {
                if(root.left){
                    if(root.left.left!==undefined || root.left.right!==undefined){
                        fn(root.left);
                    }else{
                        arr.push(root.left);
                    }
                }
                arr.push(root.data);
                if(root.right){
                    if(root.right.right!==undefined || root.right.left!==undefined){
                        fn(root.right);
                    }else{
                        arr.push(root.left);
                    }
                }
            }
            fn(this[symbol]);
            return arr;
        }
        has (num){
            // 获取根节点
            let root = this[symbol];
            function f(root,num) {
                if(root){
                    if (num < root.data){
                        // 如果存在 一定在左边
                        return f(root.left,num);
                    }else if(num === root.data){
                        return true;
                    }else{
                        // 在根节点右边;
                        return f(root.right,num);
                    }
                }else{
                    return false;
                }
            }
            return f(root,num);
        }
        delete (key){
            // 1: 找到key节点对应的根节点
            let root1 = this[symbol];
            f2(root1,key);
            if (root.data === key){
                this[symbol]=null;
                return;
            }
            function f2(root1,key) {
                if(root1.left){
                    if(root1.left.data === key){
                        root1.left = null;
                        return;
                    }else{
                        f2(root1.left,key);
                    }
                }
                if(root1.right){
                    if(root1.right.data === key){
                        root1.right = null;
                        return;
                    }else{
                        f2(root1.right,key);
                    }
                }

            }
        }
    }
})();
let tree = new Tree();
tree.insert(30);
tree.insert(23);
tree.insert(20);
tree.insert(21);
tree.insert(45);
console.log(tree);
tree.delete(23);
console.log(tree);
console.log(tree.print());


let arr = [1,324,31,43,54,4233,535,442];
// 冒泡排序代码
function bubble(arr) {
    let length = arr.length;
    let flag = 0;
    for (var i = 1; i < length-1; i++) {
        for (var j = 0; j < length-1-i; j++) {
            if(arr[j]>arr[j+1]){
                flag = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = flag;
            }
        }
    }
}

// 选择排序
function xuanzhe(arr) {
    let length = arr.length,
        flag = 0;
    for (var i = 0; i < length-1; i++) {
        for (var j = i+1; j < length; j++) {
            if(arr[i]>arr[j]){
                flag = arr[j];
                arr[j] = arr[i];
                arr[i] = flag;
            }
        }
    }
}

// 插入排序
function insertSort(arr) {
    let length = arr.length;
    let flag;
    for (var i = 1; i < length; i++) {
        for (var j = 0; j < i; j++) {
            if(arr[i] < arr[j]){
                flag = arr[j];
                arr[j] = arr[i];
                arr[i] = flag;
            }
        }
    }
}

// 归并排序
function mergeSort(arr) {
    let length = arr.length;
    let mid = Math.floor(length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    if(left.length>=2){
        left = mergeSort(left);
    }
    if(right.length>=2){
        right = mergeSort(right);
    }
    return merge(left,right);
}
function merge(left,right) {
    let res = [];
    while (left.length && right.length){
        if(left[0]<right[0]){
            res.push(left.shift());
        }else{
            res.push(right.shift());
        }
    }
    while (left.length){
        res.push(left.shift());
    }
    while (right.length){
        res.push(right.shift());
    }
    return res;
}
console.log(mergeSort(arr));
// 快速排序

// 堆排序

// 计数排序

// 桶排序

// 基数排序
console.log(arr);

