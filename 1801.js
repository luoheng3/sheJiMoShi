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
    return {
        constructor(){
            // 存储所有顶点
            this.vertices = [];
        }
    }
})();