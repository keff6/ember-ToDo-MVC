import Ember from 'ember';

export default Ember.Component.extend({   
    remaining: Ember.computed('todos.@each.isCompleted', function() {
        let todos = this.get('todos');
        return todos.filterBy('isCompleted', false).get('length');
    }),
    inflection: Ember.computed('remaining', function() {
        var remaining = this.get('remaining');
        return (remaining === 1) ? 'item' : 'items';
    }),
    completed: Ember.computed('todos.@each.isCompleted', function() {
        var todos = this.get('todos');
        return todos.filterBy('isCompleted', true).get('length');
    }),
    hasCompleted: Ember.computed('completed', function() {
        return this.get('completed') > 0;
    }),
    didInsertElement() {
        let todos = this.get('todos');
        if (todos.get('length') > 0 && todos.isEvery('isCompleted', true)) {
            this.set('allAreDone', true);
        } else {
            this.set('allAreDone', false);
        }
    },
    actions: {
        clearCompleted() {
            let completed = this.get('todos').filterBy('isCompleted', true);
            completed.forEach((todo) => {
                todo.destroyRecord();
            });
        },
        toggleAll(completeValue) {
            this.set("allAreDone", completeValue);
            let todos = this.get('todos');
            todos.forEach((todo) => {
                todo.set('isCompleted', completeValue);
            });
        }
    }

});