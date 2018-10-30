export const xMax = 500
export const yMax = 500

export const rand = (high, low) => Math.random() * (high - low) + low

export const generatePoints = num =>
  Array.from({ length: num }).map(generateOnePoint)

export const generateOnePoint = () => ({
  x: rand(0, xMax),
  y: rand(0, yMax),
})

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
