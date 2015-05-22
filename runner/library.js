var carlike = function(obj, loc) {
obj.loc = loc;
obj.move = function() {
  this.loc++;
}
return obj
};
