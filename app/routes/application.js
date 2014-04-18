export default Ember.Route.extend({
  model: function () {
    return {
      queues: this.store.find('queue'),
      activeQueue: null
    }
  }
});
