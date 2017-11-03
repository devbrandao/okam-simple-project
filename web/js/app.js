const app = angular.module('app', []);

// Services
app.factory('dataServ', ['$http',($http) => {
	return {
		getQuestions: ()=>$http.get('/questions')
	}
}]);

// Filters
app.filter('trusted', function($sce){
    return function(html){
        return $sce.trustAsHtml(html);
    }
});

// Controllers
app.controller('appController', ['$scope','dataServ', ($scope, Data) => {

	$scope.summary = {};

	// start for first question in array
	$scope.currentQuestion = 0;

	// returns HTML icon with positive or negative answer
	$scope.getSummaryHtmlAnswer = (answer => {
		return answer===1?'<i class="fa fa-check-circle text-success"></i>':'<i class="fa fa-times-circle text-danger"></i>';
	});

	// save user answer and advances to the next step
	$scope.setAnswer = (resp => {
		$scope.summary[$scope.currentQuestion] = resp;

		if ($scope.currentQuestion < $scope.questions.length) {
            $scope.currentQuestion++;
		}
	});

	// Get questions from node.js server
	Data.getQuestions().success(questions => {
		$scope.questions = questions;
	});
}]);