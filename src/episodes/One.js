import React, { useState } from 'react'

import { generatePoints } from '../utils'
import Graph from '../UI/Graph'
import Button from '../UI/Button'

const numberOfPoints = 250
const team = point => (point.x > point.y ? 1 : -1)

function One() {
  const [randomPoints, setPoints] = useState(generatePoints(numberOfPoints))
  const regeneratePoints = () => setPoints(generatePoints(numberOfPoints))
  return (
    <>
      <Graph points={randomPoints} getTeam={team} />
      <div className="button-container">
        <Button onClick={regeneratePoints}>Regenerate points</Button>
      </div>
    </>
  )
}

export default One
