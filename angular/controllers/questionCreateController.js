myApp.controller('questionCreate',['$http','$location','$routeParams',function($http,$location,$routeParams) {

  //create a context
  var main = this;


  this.pageHeading = 'Create a survey question';
  this.pageSubHeading = 'please fill all the data'
 
this.surveyId = $routeParams.surveyId;
console.log(this.surveyId)

this.baseUrl = 'https://projectsapi.edwisor.com/api/surveys';

  
  this.createQuestion = function(surveyId){

      var myData = {

          questionText : main.questionText
          
      }

      console.log(myData);
   
      $http({

        method: 'POST',
        data  : myData,
        url: main.baseUrl+'/'+surveyId+'/question'+'/create'
        
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("question created successfully");
          $location.path('/blog/'+surveyId+'/questions'+'/all')

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller