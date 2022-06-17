import React from 'react';
import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import '../../scss/RocketList.scss';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  const data = rockets.map((rocket) => <RocketCard key={rocket.rocket_id} rocket={rocket} />);
  return (
    <div className="rocketList">
      {data}
    </div>
  );
};

export default Rockets;
