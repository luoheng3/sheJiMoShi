/**
 * Created by 14486 on 2019/9/2.
 */
/*
 二叉搜索树
    左侧存储比父级小的数,右侧存储比父级大的值
    当数据量大的时候 你要查找这个数据存不存在,性能就会很好,
    一下可以砍掉一半;
 遍历
    中序遍历
        以根节点为基点 左 中 右 进行遍历
    先序遍历
        中 左 右 根节点在中间 就是中序 在前面就是先序
    后序遍历
        左 右 中
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
    // insert插入值判断的递归函数
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
        if(!root) return; // 首先应该判断root存不存在 不存在就直接返回
        middle(root.left,arr); // 对于每一个左树,他和根节点一样满足一样的规则;
        arr.push(root.key);
        middle(root.right,arr);  // 对于每一个右 树,他和根节点一样满足一样的规则;
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
                // 找到右侧最小值(绝对可行) 或者左侧最大值
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
        //
        delete1 (key){ // 自己写的删除节点
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
        print (){ // 我的中序遍历
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
    }
})();
let tree = new binarySearchTree();