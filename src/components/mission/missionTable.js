import React, { useEffect } from 'react';
import MissionCard from './MissionCard'
import '../../scss/MissionTable.scss';

const Mission = () => {
  return (
    <div className='missionTable'>
      <MissionCard />
    </div>
  );
};

export default Mission;