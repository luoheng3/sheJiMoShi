/**
 * Created by 14486 on 2019/4/4.
 */
/*
二叉搜索树
    左侧存储比父级小的数,右侧存储比父级打的值
        遍历
            中序遍历 先序遍历 后序遍历

*/
let binarySearchTree = (function () {
    let root = Symbol();
    class Node{
        constructor(key){
            this.key = key;
            this.left = null;
            this.right = null;
        }
    }
    // 递归判断
    function fn(root,node) {
        // 判断在左侧还是右侧
        if(node.key<root.key){
            // 如果在左侧 继续判断 左侧是否有值
            if(root.left){
                // 如果有值 继续递归判断 是左侧还是右侧;
                fn(root.left,node);
            }else{
                // 没有值就赋值
                root.left = node;
            }
        }else{
            if(root.right){
                fn(root.right,node);
            }else{
                root.right = node;
            }
        }
    }
    // 用于中序遍历的递归函数  左中右
    function middle(root,arr) {
        if(!root) return;
        middle(root.left,arr);
        arr.push(root.key);
        middle(root.right,arr);
    }
    // 先序遍历的递归函数 中 左 右
    function first(root,arr) {
        if(!root) return;
        arr.push(root);
        first(root.left,arr);
        first(root.right,arr);
    }
    // 判断是否存在的递归函数
    function eFn(root,key) {
        if(!root) return false;
        if(key<root.key){
            // 说明如果存在一定在树的左边
            return eFn(root.left,key);
        }else if(key===root.key){
            return true;
        }else{
            // 说明 如果存在 一定在树的右边
            return eFn(root.right,key);
        }
    }
    function getMin(root) {
        // 获取右侧最小值
        while(root.left){
            root = root.left;
        }
        return root;
    }
    // 用于删除节点的递归函数
    function remove(root,key) {
        if(!root) return;
        if(key<root.key){
            // 树左边
            root.left = remove(root.left,key)
        }else if(key>root.key){
            // 树右边
            arr.push("right");
            root.right = remove(root.right,key)
        }else{
            // 节点的几种情况
            // 没有左节点 也没有右节点
            if(!root.left && !root.right){
                root = null;
                return null;
            }
            // 只有左  没有右
            if(root.left && !root.right){
                return root.left;
            }
            // 只有右 没有左
            if(root.right && !root.left){
                return root.right;
            }
            // 都有
            if(root.left && root.right){
                // 找到右侧最小值
                let minNode = getMin(root.right);
                root.key = minNode;
                root.right = remove(root.right,minNode);
            }
        }
        return root;
    }
    return class{
        constructor(){
            this[root] = null;
        }
        insert(key){
            let node = new Node(key);
            let root1 = this[root];
            if(root1===null){
                this[root] = node;
            }else{
                fn(root1,node);
            }
        }
        // 得到最大值
        getMax(){
            let r = this[root];
            while(r.right){
                r = r.right;
            }
            return r.key;
        }
        // 获取最小值
        getMin(){
            let r = this[root];
            while(r.left){
                r = r.left;
            }
            return r.key;
        }
        has(key){
            // let arr = this.f();
            // if(arr.indexOf(key)===-1){
            //     return false
            // }
            // return true;
            // 上面的感觉效率不好 全部遍历了一遍
            let r = this[root];
            return eFn(r,key);
        }
        // 删除
        delete(key){
            let r = this[root];
            remove(r,key);
        }
        f(){
            let arr = [];
            let r = this[root];
            middle(r,arr);
            return arr;
        }
    }
})();
let tree = new binarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(40);
console.log(tree);
console.log(tree.getMin());
console.log(tree.getMax());
console.log(tree.has(30));
console.log(tree.has(60));
tree.delete(40);
tree.delete(30);
tree.delete(10);
console.log(tree);