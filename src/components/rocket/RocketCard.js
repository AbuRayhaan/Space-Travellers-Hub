import React, { useEffect } from 'react';
import { FetchRockets, reserveRocket, cancelReserve } from '../../redux/rocket/rocketSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../../scss/RocketCard.scss'

function RocketCard({ rocket }) {
  const rocketsinfo = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  const getRockets = () => {
    if (rocketsinfo.length === 0) {
      dispatch(FetchRockets());
    }
  };

  const rocketBooking = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelBooking = (id) => {
    dispatch(cancelReserve(id));
  };

  useEffect(() => {
    getRockets();
  }, []);

  return(
    <section>
      <div className='rocketCard d-flex'>
        <div className='rocketImage'>
          <img src={rocket.rocket_img} alt ={rocket.rocket_name} className='rocketImage'/>
        </div>

        <div className='rocketInfo d-flex'>
          <span className='rocketTitle'>{rocket.rocket_name}</span>
          <p className='rocketDetail'>
            {rocket.reserved ? (<span className='mini-btn'>Reserved</span>) : (false)}
            {rocket.rocket_description}
          </p>

          {rocket.reserved ? (
            <button 
              onClick={() => cancelBooking(rocket.rocket_id)}
              type='button'
              className='cancel-reserve'
            >
              Cancel Reservation
            </button>
          ) : (
            <button 
              onClick={() => rocketBooking(rocket.rocket_id)}
              type='button'
              className='rocket-btn'
          >
            Reserve Rocket
          </button>
          )}
        </div>

      </div>
    </section>
  )
}

export default RocketCard;