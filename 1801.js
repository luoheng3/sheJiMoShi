/**
 * Created by 14486 on 2019/9/4.
 */
/*
图结构
    点: A B C D E F
        A (两个点之间有连接就记1) 矩阵形式 (二维数组)
            0 AB 1 AC 1 0 1 0
        B
        C
        D
        E
        F
    邻接表
        A B C E
        B A E D
        C A F
        D B
        E A B F
        F E C
*/

let Graph = (function () {
    return class{
        constructor(){
            // 存储所有顶点
            this.vertices = [];
            // 存储每个顶点对应的相邻顶点(边);
            this.edges = {};
        }
        // 添加顶点
        addVertices(){
            let This = this;
            let rest = Array.from(arguments);
            rest.forEach(function (item) {
                // 如果已经添加过, return
                if (This.vertices.includes(item)) return;
                // 顶点不存在  添加顶点
                This.vertices.push(item);
                // 初始化顶点的边存储信息
                This.edges[item] = [];
            })
        }
        // 添加边
        addEdge (v1,v2){
            // 添加节点
            this.addVertices(v1,v2);
            // 互相添加对方为相邻
            // 如果有就不添加了
            if (this.edges[v1].includes(v2)) return;
            this.edges[v1].push(v2);
            this.edges[v2].includes(v1) || this.edges[v2].push(v1);
        }
    }
})();
let map = new Graph();
map.addEdge("A","B");
console.log(map);