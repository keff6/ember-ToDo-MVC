import Ember from 'ember';

export default Ember.Component.extend({
   actions:{
     edit: function(){
         console.log("jojosho");
     }  
   },
    
    isCompleted: function(key, value){
            
       var model = this.get('model')
       
       if(value === undefined){
           return model.get('isCompleted');
       }else{
           model.set('isCompleted',value);
           model.save();
           return value;
       }
       
   }.property('model.isCompleted')
       
});