import React, { Component } from 'react';
import Main from './student/Main.js';
import miniRouter from './util/miniRouter.js';


// [{key, route}]
const miniRoutes = [
  { key: 'student', route: { path: '/students/:studentId', exact: true, strict: true } }
];

// concerns:
//   auth
//   routing (and analytics on route change)
class App extends Component {
  render() {
    // TODO(kr) auth and educator loading

    // Determine route
    const branch = miniRouter(window.location, miniRoutes);
    if (branch === null) return null;

    // Render
    // TODO(kr) needs analytics sink on page views and changes
    const {routeKey} = branch;
    if (routeKey === 'student') return this.renderStudent(branch);
    return null;
  }

  // Mixpanel.registerUser(serializedData.currentEducator);
  // Mixpanel.track('PAGE_VISIT', { page_key: 'STUDENT_PROFILE' });
  renderStudent(branch) {
    const {routeParams, queryParams} = branch;
    const history = window.history;
    return (
      <Main
        studentId={parseInt(routeParams.studentId, 10)}
        queryParams={queryParams}
        history={history} />
    );
  }
}

export default App;
