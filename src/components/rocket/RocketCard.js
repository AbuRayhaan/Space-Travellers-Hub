import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FetchRockets, reserveRocket, cancelReserve } from '../../redux/rocket/rocketSlice';
import '../../scss/RocketCard.scss';

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

  return (
    <section>
      <div className="rocketCard d-flex">
        <div className="rocketImage">
          <img src={rocket.rocket_img} alt={rocket.rocket_name} className="rocketImage" />
        </div>

        <div className="rocketInfo d-flex">
          <span className="rocketTitle">{rocket.rocket_name}</span>
          <p className="rocketDetail">
            {rocket.reserved ? (<span className="mini-btn">Reserved</span>) : (false)}
            {rocket.rocket_description}
          </p>

          {rocket.reserved ? (
            <button
              onClick={() => cancelBooking(rocket.rocket_id)}
              type="button"
              className="cancel-reserve"
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              onClick={() => rocketBooking(rocket.rocket_id)}
              type="button"
              className="rocket-btn"
            >
              Reserve Rocket
            </button>
          )}
        </div>

      </div>
    </section>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    reserved: PropTypes.string,
    rocket_description: PropTypes.string,
    rocket_img: PropTypes.number,
  }).isRequired,
};

export default RocketCard;
