'use strict';

angular.module('stoogeBloggerzApp')
  .service('Authorservice', function Authorservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
       getAuthors: function() {
     	return ['Moe','Curly', 'Larry', 'All'];
  	 
     }
    } 
  });
