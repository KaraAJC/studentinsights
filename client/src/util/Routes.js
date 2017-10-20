import _ from 'lodash';
import qs from 'query-string';

const Routes = {
  studentProfile: function(id, queryParams) {
    const queryString = _.isObject(queryParams)
      ? '?' + qs.stringify(queryParams)
      : '';
    return '/students/' + id + queryString;
  },
  homeroom: function(id) {
    return '/homerooms/' + id;
  },
  school: function(id) {
    return '/schools/' + id;
  },
  section: function(id) {
    return '/sections/' + id;
  }
};

export default Routes;