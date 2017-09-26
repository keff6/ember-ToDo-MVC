import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){        
        return this.store.findAll('todo');
        //this.get('store').findAll('todo');
    } 
});