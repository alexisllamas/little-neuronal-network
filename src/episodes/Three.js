import React, {useState} from 'react'

import {generatePoints, rand, generateOnePoint, sleep} from '../utils'
import Graph from '../UI/Graph';
import Button from '../UI/Button';


const numberOfPoints = 250;

const team = point => point.x > point.y ? 1 : -1

const guess = (weights, point) => {
  const sum =
        point.x * weights.x +
        point.y * weights.y

  const team = sum >= 0 ? 1 : -1

  return team
}

const generateRandomWeights = () => ({
  x: rand(-1, 1),
  y: rand(-1, 1)
})

function train(weights, point, team) {
  const guessResult = guess(weights, point) // 1
  const error = team - guessResult
  return {
    x: weights.x + point.x * error,
    y: weights.y + point.y * error,
  }
}

function Four() {
  const [randomPoints, setPoints] = useState(generatePoints(numberOfPoints))
  const regeneratePoints = () => setPoints(generatePoints(numberOfPoints))

  const [timesTrained, setTimesTrained] = useState(0);

  const [weights, setWeights] = useState(generateRandomWeights())
  const trainNetwork = () => {
    const point = generateOnePoint()
    const correctResult = team(point)

    setWeights(weights => {
      const newWeights = train(weights, point, correctResult)
      setTimesTrained(times => times + 1)
      return newWeights
    })
  }

  const trainNetworkTimes = async times => {
    const iterator = Array.from({length: times})
    for (const _ of iterator) {
      // await sleep(25)
      trainNetwork()
    }
  }

  const trainInfinite = async () => {
    while(true) {
      await sleep(100)
      trainNetworkTimes(100)
    }
  }

  return (
    <>
      <Graph points={randomPoints} getTeam={point => guess(weights, point)} />
      <div className="times-trained">
        Times trained: {timesTrained}
      </div>
      <div className="weights">
        x = {weights.x} y = {weights.y}
      </div>
      <div className="button-container" style={{display: 'flex', justifyContent: 'space-around'}}>
        <Button onClick={regeneratePoints}>Regenerate points</Button>
        <Button onClick={trainNetwork}>Train the system!</Button>
        <Button onClick={() => trainNetworkTimes(100)}>x100!</Button>
        <Button onClick={() => trainNetworkTimes(5000)}>x5000!</Button>
        <Button onClick={() => trainInfinite()}>xinfinite!</Button>
      </div>
    </>
  )
}

export default Four
