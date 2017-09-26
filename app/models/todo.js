import DS from "ember-data";

let Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
   FIXTURES: [
       {
           id: 1,
           title: 'learn Ember.js',
           isCompleted: true
       },
       {
           id: 2,
           title: '....',
           isCompleted: true
       },
       {
           id: 3,
           title: 'Profit!!',
           isCompleted: false
       }
   ] 
});

export default Todo;


