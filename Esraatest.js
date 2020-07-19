// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var stackMethods = {};

// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var instance = {}
//   __.extend(instance,stackMethods);
//   instance.size = 0;
//   instance.storage = {};
//   return instance;
// };
// var stackMethods = {};
// stackMethods.push=function(value){
//   this.storage[this.size]=value;
//   this.size++;
//  };
//  stackMethods.pop = function(){
//   if(this.size > 0){
//     this.size--;
//     var result = this.storage[this.size];
//     delete this.storage[this.size];
//   }
//   return result;
// };
// stackMethods.size = function(){
//   return this.size;
// }



var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.size = 0;
  instance.storage ={};
  extend(instance, stackMethods);
  return instance;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.size]= value;
  this.size ++;
};
stackMethods.pop = function(){
  if(this.size > 0 ){
    this.size --;
    var result = this.storage[this.size];
    delete this.storage[this.size];
  }
  return result;
}
stackMethods.sizeFunc = function(){
  return this.size;
}
