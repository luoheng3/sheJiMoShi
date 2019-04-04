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
    // 用于中序遍历的递归函数
    function middle(root,arr) {
        if(!root) return;
        middle(root.left,arr);
        arr.push(root.key);
        middle(root.right,arr);
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
        or1ing(){
            let arr = [];
            root = this[root];
            middle(root,arr);
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