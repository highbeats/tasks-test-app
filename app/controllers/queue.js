export default Ember.ObjectController.extend({
  title: '',
  body: '',
  actions: {
    addTask: function () {
      this.store.createRecord('task', {
        id: Math.floor(100000 * Math.random()),
        body: this.get('body'),
        title: this.get('title'),
        queue: this.get('model')
      });
      this.set('title', '');
      this.set('body', '');
    }
  }
});
