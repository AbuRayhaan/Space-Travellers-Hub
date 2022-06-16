import { useSelector } from 'react-redux';
import RocketsReserved from './reserved';
import styles from './profile.module.css';

const Profile = () => {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missionsState.filter(
    (missions) => missions.reserved === true,
  );

  return (
    <div className={styles.profile}>

      <div className={styles.box}>
        <h2 className="title">My Missions</h2>
        <table className={styles['Mission-ProfileTable']}>
          <tbody>
            {joinedMissions.map((mission) => (
                <tr key={mission.mission_id}>
                <td className={styles['title-entry']}>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RocketsReserved />
    </div>
  );
};

export default Profile;