### ZYCHOOO-interview

用于记录在面试中碰到的题目，有些可能是触及到知识盲区的，有些可能是个人觉得比较有趣的，记录一下和兄弟萌共勉，如果在复习中给您提供了帮助，希望能 star 一下，谢谢～

掘金也有在同步更新，[欢迎前往](https://juejin.cn/column/7196931784328429626)

---

#### 230206 面试记录

1.  假如本地机器无法做加减乘除，需用请求服务端来实现

    ```javascript
    // 以加法为例，现有远程API的模拟实现 addRemote
    const addRemote = async (a, b) =>
      new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 1000);
      });

    // 请实现本地的add方法，调用addRemote，能够最优的实现输入数字的加法。
    async function add(...args) {}

    // 请用示例验证运行结果:
    add(1, 2).then((result) => {
      console.log(result); // 3
    });

    add(3, 5, 2).then((result) => {
      console.log(result); // 10
    });
    ```

2.  根据图片实现一个评论的 demo
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63af2ace04ae4233a252296b3bb00b18~tplv-k3u1fbpfcp-watermark.image?)

#### 230227 面试记录

1. n 个请求一起执行，如何拿到所有请求成功的数据？
2. 列表数据量过大造成的卡顿，如何解决？
3. 从筛选后的列表（第 n 页）点击进入详情，如何做到退出来之后保持搜索条件，且从其他页面进入后清空搜索条件且从第一页请求数据？

---
