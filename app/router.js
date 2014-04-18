var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function () {
  this.route('task', { path: '/:task_id' });
  this.route('queue', { path: '/:queue_id' });
});

export default Router;
