import React from 'react'
import {xMax, yMax} from '../utils'

function Graph({points, getTeam}) {
  return (
    <svg width={xMax} height={yMax}>
      {points.map(point =>
        <circle
          cx={point.x}
          cy={point.y}
          r="3"
          fill={getTeam(point) === -1 ? 'blue' : 'red' }
          key={`${point.x} ${point.y}`}
        />
      )}
      <line x1="0" x2={xMax} y1="0" y2={yMax} stroke="purple" />
    </svg>

  )
}

export default Graph
