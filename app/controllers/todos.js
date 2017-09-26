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
    }
});
