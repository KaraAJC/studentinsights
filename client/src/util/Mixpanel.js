var Env = undefined;

// Holds a singleton Env that needs to be set for it to work
const Mixpanel = {
  registerUser: function(env, currentEducator) {
    if (Env !== undefined) {
      console.error('Mixpanel#registerUser called twice, ignoring');
    }
    Env = env;

    const enabled = (window.mixpanel && Env && Env.shouldReportAnalytics);
    if (!enabled) return;

    try {
      window.mixpanel.identify(currentEducator.id);
      window.mixpanel.register({
        'deployment_key': Env.deploymentKey,
        'educator_id': currentEducator.id,
        'educator_is_admin': currentEducator.admin,
        'educator_school_id': currentEducator.school_id
      });
    }
    catch (err) {
      console.error(err); // eslint-disable-line no-console
    }
  },

  track: function(key, attrs) {
    const enabled = (window.mixpanel && Env && Env.shouldReportAnalytics);

    if (!enabled) return;

    try {
      return window.mixpanel.track(key, attrs);
    }
    catch (err) {
      console.error(err); // eslint-disable-line no-console
    }
  }
};

export default Mixpanel;