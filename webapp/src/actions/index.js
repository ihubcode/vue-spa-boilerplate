import http from '../utils/http';
// import utils from '../utils/utils';
import action from '../action-types';

const INDEX = action.INDEX;

export const alert = ({ dispatch }, status) => {
    dispatch(INDEX.ALERT, status);
    // dispatch(INDEX.FAILURE, utils.error('error.......'));
};

export const async = ({ dispatch }, status) => {
  dispatch(INDEX.REQUEST);
  http.get('http://localhost:8080/static/assets/test.json', {
      time: Date.now()
    })
    .then((result) => dispatch(INDEX.SUCCESS, result))
    .catch((error) => dispatch(INDEX.FAILURE, error));
};
