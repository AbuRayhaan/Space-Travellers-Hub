import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchRockets } from '../../redux/rocket/rocketSlice';
import RocketCard from './RocketCard';
import '../../scss/RocketList.scss';

const Rockets = () => {
  const rocketsinfo = useSelector((state) => state.rocketsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchRockets());
  }, []);

  return (
    <div className='rocketList'>
      {rocketsinfo.map((rocket) => <RocketCard key={rocket.rocket_id} rocket={rocket}/>)}
    </div>
  );
};

export default Rockets;