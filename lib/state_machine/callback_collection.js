
/* Private class */
SM.CallbackCollection = function() {
	  this.callbacks = [];
	  this.callbacks.before = [];
	  
	  this.callbacks.after = [];
	  return this;
};

SM.CallbackCollection.prototype = {
	add: function(type, options, machine, block) {
		var callback = new SM.Callback(options, machine, block);
		this.callbacks[type].push(callback);
	},
  all: function() {
    return this.callbacks;
  },
  before: function() {
    return this.callbacks.before;
  },
  after: function() {
    return this.callbacks.after;
  },
  run: function(type, from_state, to_state, event, params) {
    var callbacks = this.callbacks[type];
    for(var i=0;i<callbacks.length;i++){
	    if(callbacks[i].match(from_state, to_state, event)){
	      callbacks[i].run(params);
	    }
	  }
  }
  
};
