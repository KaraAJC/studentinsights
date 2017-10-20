import qs from 'query-string';
import __find from 'lodash/find';
import {matchPath} from 'react-router';
    
// Pure fn matcher, from react-router
// miniRoutes is [{key, route}], and we match on the first one
// For route, see https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/matchPath.md
export default function miniRouter(location, miniRoutes) {
  const {pathname} = location;
  const miniMatches = miniRoutes.map(miniRoute => {
    const {key, route} = miniRoute;
    const match = matchPath(pathname, route);
    return {match, key};
  });
  const miniMatch = __find(miniMatches, miniMatch => miniMatch.match !== null);
  if (miniMatch === undefined) return null;

  console.log(miniMatch);
  const routeKey = miniMatch.key;
  const routeParams = miniMatch.match.params;
  const queryParams = qs.parse(location.search);
  return {routeKey, routeParams, queryParams};
}
