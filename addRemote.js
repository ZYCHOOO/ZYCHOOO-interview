// 假如本地机器无法做加减乘除，需用请求服务端来实现
// 以加法为例，现有远程API的模拟实现 addRemote
const addRemote = async (a, b) => new Promise(resolve => {
  setTimeout(() => resolve(a + b), 1000)
})

// 请实现本地的add方法，调用addRemote，能够最优的实现输入数字的加法。
async function add (...args) {
  let total = 0
  for (let i = 0; i < args.length; i++) {
    total = await addRemote(total, args[i])
  }
  return total
}

// 请用示例验证运行结果:
add(1, 2)
  .then(result => {
    console.log(result) // 3
  })

add(3, 5, 2)
  .then(result => {
    console.log(result) // 10
  })


