/*
Created by 14486 on 2019/9/3.
*/
// 平衡二叉树
// 左树深度减去右树深度为 1 0 -1 我们称之为平衡;
let Avt = (function () {
    let root = Symbol();
    class Node{
        constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
    // 计算树的深度 自己写的
    function deepTree1(root) {
        // 一个树的深度等于左树深度 与右树深度的最大值 + 1 (根节点);
        let leftNum = 0;
        let rightNum = 0;
        if(root.left){
            leftNum += deepTree(root.left);
        }
        if(root.right){
            rightNum += deepTree(root.right);
        }
        return Math.max(leftNum,rightNum) + 1;
    }
    function deepTree2(root) {
        if(!root) return 0;
        return Math.max(deepTree2(root.left),deepTree2(root.right)) + 1;
    }
    return class{
        constructor(){
            this[root] = null;
        }
        insert(data){
            let node = new Node(data);
            if(this[root]===null){
                this[root] = node;
                return;
            }
            fn(this[root],node);
            function fn(root,node) {
                if(root.data < node.data){
                    // 右树
                    if(!root.right){
                        root.right = node;
                        if(deepTree1(root.right) - deepTree1(root.left)> 1 ){

                        }
                    }else{
                        // 右树有节点的话 继续;
                        fn(root.right,node);
                    }

                }else{
                    if(!root.left){
                        root.left = node;
                        // 检测数的深度是否平衡
                        if(deepTree1(root.left) - deepTree1(root.right)> 1 ){

                        }
                    }else{
                        fn(root.left,node);
                    }
                }
            }
        }
        deep(){
            return deepTree(this[root]);
        }
    }
})();
let avt = new Avt();
avt.insert(20);
avt.insert(35);
avt.insert(18);
avt.insert(14);
avt.insert(6);
console.log(avt);
console.log(avt.deep());