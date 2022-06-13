const ADD_ROCKET = 'space-travellers-hub/redux/rocket/ADD_TICKET';
const RESERVE_ROCKET = 'space-travellers-hub/redux/rocket/RESERVE_TICKET';
const CANCEL_RESERVATION = 'space-travellers-hub/redux/rocket/CANCEL_RESERVATION';


const initialState = [];
const url = 'https://api.spacexdata.com/v3/rockets';

export const addRocket = (rockets) => ({
  type: ADD_ROCKET,
  rockets,
});

export const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  rocketId,
});

export const cancelReserve = (rocketId) => ({
  type: CANCEL_RESERVATION,
  rocketId,
});

export const FetchRockets = () => (async (dispatch) => {
  const response = await fetch(url);
  const info = await response.json();
  const rocketsArray = [];
  info.forEach((e) => {
    const rocket = {
      rocket_id: e.id,
      rocket_name: e.rocket_name,
      rocket_description: e.description,
      rocket_img: e.flickr_images[0],
      reserved: false,
    };
    rocketsArray.push(rocket);
  });
  dispatch(addRocket(rocketsArray));
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...action.rockets];
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.rocket_id !== action.rocketId) {
          return rocket;
        }

        return { ...rocket, reserved: true };
      });

      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.rocket_id !== action.rocketId) {
          return rocket;
        }

        return { ...rocket, reserved: false };
      });

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
