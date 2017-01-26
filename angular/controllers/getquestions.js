// this is without $scope
myApp.controller('getQuestions',['$http','$routeParams','BlogService',function($http,$routeParams,BlogService) {

  //create a context
  var main = this;


  this.pageHeading = 'Survey App';
  this.pageSubHeading = 'A collection of Survey of different peoples'
  
  // i knew the result is going to be array, so i declared an empty array to initialize
  this.blogs = [];
  console.log(this.blogs);

  this.options = [] ;


   this.baseUrl = 'https://projectsapi.edwisor.com/api/surveys';

  this.surveyId = $routeParams.surveyId;

  console.log(this.surveyId);

  this.questionId = $routeParams.questionId;

  console.log(this.questionId);

  

     this.loadAllQuestions = function(){
   
      $http({
        method: 'GET',
        url: main.baseUrl+'/'+main.surveyId+'/questions'+'/all'
      }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response.data.data);
                main.blogs = response.data.data;
               
                

          }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
                //return console.log(response);
                $location.path('/error');

          });
      
      
      


  }// end load all blogs

this.deleteQuestion = function(questionId,index){

      // no body parameters are needed
      var myData = {};
      console.log(index);
      
      console.log(main.blogs.length);
      BlogService.deletequestion(questionId).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("question deleted successfully");
          
          main.blogs.splice(index,1);
          console.log(main.blogs.length);
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end delete blog

   


}]); // end controller