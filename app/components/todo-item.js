import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['isEditing'],
    isEditing: false,
    actions: {
        editTodo: function () {
            this.toggleProperty('isEditing'); 
        },
        acceptChanges: function(){
            this.set('isEditing',false);
            if(Ember.isEmpty(this.get('todo.title'))){
                this.send('removeTodo');
            }else{
                this.get('todo').save();
            }
        },
        removeTodo: function(){
            var todo = this.get('todo');
            todo.deleteRecord();
            todo.save();
        }
    },    
    isCompleted: function (key, value) {

        var model = this.get('todo');

        if (value === undefined) {
            return model.get('isCompleted');
        } else {
            model.set('isCompleted', value);
            model.save();
            return value;
        }

    }.property('todo.isCompleted')

});
