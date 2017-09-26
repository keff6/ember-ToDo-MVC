import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createTodo: function () {
            let title = this.get('newTitle');

            if (!title) {
                return false;
            }
            if (!title.trim()) {
                return;
            }

            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            //Clear out the text field
            this.set('newTitle', '');

            todo.save();
        }
    },
    remaining: Ember.computed('model.@each.isCompleted', function () {
        let todos = this.get('model');
        return todos.filterBy('isCompleted', false).get('length');
    }),
    inflection: function(){
        let remaining = this.get('remaining');
        return remaining === 1? 'item': 'items';
    }.property('remaining')

});

