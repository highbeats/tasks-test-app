export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('queue', params.queue_id);
  }
});
