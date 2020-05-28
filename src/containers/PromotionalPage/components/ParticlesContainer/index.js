import React from 'react';
import './styles.scss';

import Particles from 'react-particles-js';
import Params from '../../../../assets/particles.json'

export default function ParticlesContainer({ season }) {

  let colors = ["#6291AF", "#D46B7A", "#EA8C5C", "#E9C02E"];

  return (
    <div className="particlesContainer"
      style={{ background: colors[season] }}>
      <Particles
        params={Params}
      />
    </div>
  );
}