import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchMissions, toggleMission } from '../../redux/mission/missionSlice';
import '../../scss/MissionCard.css';
import styles from './MissionCard.module.css';

let fetched = false;

function MissionCard() {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(FetchMissions());
      fetched = true;
    }
  }, []);

  const clickHandler = (e) => {
    const buttonId = e.target.getAttribute('data-target');
    dispatch(toggleMission(buttonId));
  };

  return (
    <table className="missionCard">
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missionsState.map(
          ({
            mission_name: missionName,
            mission_id: id,
            description,
            reserved,
          }) => (
            <tr key={id}>
              <td className="missionName">{missionName}</td>
              <td>{description}</td>
              <td className="status">
                <p
                  className={reserved ? styles.missionReserved : styles.notReserved}
                >
                  {reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
                </p>
              </td>
              <td key={id} className="status">
                <button
                  className={reserved ? styles.leave : styles.join}
                  data-target={id}
                  key={id}
                  type="button"
                  onClick={clickHandler}
                >
                  {reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default MissionCard;
