var Queue = DS.Model.extend({
  name: DS.attr('string'),
  tasks: DS.hasMany('task')
});

Queue.reopenClass({
  FIXTURES: [
    { id: 'must', name: 'must' },
    { id: 'should', name: 'should' },
    { id: 'could', name: 'could' }
  ]
});

export default Queue;
