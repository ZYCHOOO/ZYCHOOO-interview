export function timestampFormat (timestamp) {
  function zerolize (num) {
    return num > 0 && num < 9 ? `0${num}` : num
  }
  timestamp = parseInt(new Date(timestamp).getTime() / 1000)
  // 当前时间戳
  const currentTimestamp = parseInt(new Date().getTime() / 1000)
  // 参数与当前时间戳相差秒数
  const timestampDiff = currentTimestamp - timestamp
  const currentDate = new Date(currentTimestamp * 1000)
  const timeDate = new Date(timestamp * 1000)
  const y = timeDate.getFullYear()
  const m = timeDate.getMonth() + 1
  const d = timeDate.getDate()
  const h = timeDate.getHours()
  const min = timeDate.getMinutes()
  if (timestampDiff < 60) {
    return '刚刚'
  }
  if (timestampDiff < 3600) {
    return Math.floor(timestampDiff / 60) + '分钟前'
  }
  if (
    currentDate.getFullYear() === y &&
    currentDate.getMonth() + 1 === m &&
    currentDate.getDate() === d
  ) {
    return `今天${zerolize(h)}:${zerolize(min)}`
  } else {
    const newDate = new Date((currentTimestamp - 86400) * 1000)
    if (
      newDate.getFullYear() === y &&
      newDate.getMonth() + 1 === m &&
      newDate.getDate() === d
    ) {
      return `昨天${zerolize(h)}:${zerolize(min)}`
    }
    if (currentDate.getFullYear() === y) {
      return `${zerolize(m)}月${zerolize(d)}日${zerolize(h)}:${zerolize(min)}`
    } else {
      return `${y}年${zerolize(m)}月${zerolize(d)}日${zerolize(h)}:${zerolize(
        min
      )}`
    }
  }
}
