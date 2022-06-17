import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/rocket/RocketList';

const RocketProvider = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

describe('Test rockets components', () => {
  it('check for proper rendering', () => {
    const rocketItems = renderer.create(<RocketProvider />).toJSON();
    expect(rocketItems).toMatchSnapshot();
  });

  it('has a text in the DOM', () => {
    const { rocketList } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rocketList.getElementsByClassName('rocketList').length).toBe(1);
  });
});
