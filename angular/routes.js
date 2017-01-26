//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myBlog'
        })
        .when('/create',{
        	templateUrl     : 'views/create-view.html',
        	controller 		: 'blogCreateController',
        	controllerAs 	: 'currentBlog'
        })
        .when('/blog/:surveyId',{

        	templateUrl     : 'views/blog-view.html',
        	controller 		: 'singleBlogController',
        	controllerAs 	: 'singleBlog'
        })
        .when('/blog/:surveyId/edit',{

            templateUrl     : 'views/edit-view.html',
            controller      : 'editBlogController',
            controllerAs    : 'currentBlog'
        })
        .when('/blog/:surveyId/question/create',{

            templateUrl     : 'views/create-question.html',
            controller      : 'questionCreate',
            controllerAs    : 'newBlog'
        })
        .when('/blog/:surveyId/questions/all',{

            templateUrl     : 'views/get-questions.html',
            controller      : 'getQuestions',
            controllerAs    : 'getBlog'
        })
        .when('/blog/questions/:questionId/edit',{

            templateUrl     : 'views/edit-questions.html',
            controller      : 'editQuestions',
            controllerAs    : 'editBlog'
        })
          .when('/blog/questions/:questionId/options/create',{

            templateUrl     : 'views/create-options.html',
            controller      : 'optionsCreate',
            controllerAs    : 'optionBlog'
        })
        .when('/error',{

            template   : '<h1>Some error occured while connecting to backend</h1>'

        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);