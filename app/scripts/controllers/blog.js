'use strict';

angular.module('stoogeBloggerzApp').
	controller('BlogCtrl', function ($scope, blog) {
  	
	/*blog.getPosts().success(function(data) {
		$scope.blogPosts = data.results;
		console.log($scope.blogPosts);
			
	});
	*/
	$scope.blogPosts = blog.getPosts();
	//var blog = {};  

  });
