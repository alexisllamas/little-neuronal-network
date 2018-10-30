import React, { useState } from 'react';

import { generatePoints, rand } from '../utils';
import Graph from '../UI/Graph';
import Button from '../UI/Button';

const numberOfPoints = 250;

const guess = (weights, point) => {
  const sum = point.x * weights.x + point.y * weights.y;

  const team = sum >= 0 ? 1 : -1;

  return team;
};

const generateRandomWeights = () => ({
  x: rand(-1, 1),
  y: rand(-1, 1),
});

function Two() {
  const [randomPoints, setPoints] = useState(generatePoints(numberOfPoints));
  const regeneratePoints = () => setPoints(generatePoints(numberOfPoints));

  const [randomWeights, setRandomWeights] = useState(generateRandomWeights());
  const regenerateWeights = () => setRandomWeights(generateRandomWeights());

  return (
    <>
      <Graph
        points={randomPoints}
        getTeam={point => guess(randomWeights, point)}
      />
      <div
        className="button-container"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <Button onClick={regeneratePoints}>Regenerate points</Button>
        <Button onClick={regenerateWeights}>Regenerate weights</Button>
      </div>
    </>
  );
}

export default Two;
