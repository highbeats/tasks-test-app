var Task = DS.Model.extend({
  done: DS.attr('boolean'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  queue: DS.belongsTo('queue')
});

export default Task;
