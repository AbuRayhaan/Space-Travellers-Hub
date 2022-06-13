const SHOW_MISSIONS = 'space-travellers-hub/redux/mission/SHOW_MISSIONS';
const TOGGLE_MISSION = 'space-travellers-hub/redux/mission/TOGGLE_MISSION';

const initialState = {
  missions: [],
};

const url = 'https://api.spacexdata.com/v3/missions';

const showMission = (missions) => ({
  type: SHOW_MISSIONS,
  payload: missions,
});

export const toggleMission = (id) => ({
  type: TOGGLE_MISSION,
  payload: id,
});

export const FetchMissions = () => (async (dispatch) => {
  const response = await fetch(url);
  const info = await response.json();
  dispatch(showMission(info));
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MISSIONS:
      return { missions: action.payload };

    case TOGGLE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, reserved: !mission.reserved }
          }
          return mission;
        })
      }

    default:
      return state;
  }
};

export default reducer;
