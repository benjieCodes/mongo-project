angular.module('starter.controllers', [])

.controller('RegisterCtrl', ['$http', '$scope', '$state', function($http, $scope, $state) {
  var API = 'http://localhost:8106/'
  let me = this;

  me.register = function (user) {
    return $http.post(API + 'user', user).then(function (res) {
      alert('User created!')
      $state.go('tab.create');
    })
  }
}])

.controller('BlogCtrl', function($scope) {})

.controller('CreateBlogCtrl', function($scope) {})

