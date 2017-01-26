myApp.controller('editQuestions',['$http','$routeParams','$location',function($http,$routeParams,$location) {

  //create a context
  var main = this;


  this.pageHeading = 'Edit a question';
  this.pageSubHeading = 'Change the values you want to change'
 

  this.baseUrl = 'https://projectsapi.edwisor.com/api/surveys';

  this.surveyId = $routeParams.surveyId;
  console.log(this.surveyId)
   
  this.questionId = $routeParams.questionId;
  console.log(this.questionId)

 

  this.editQuestions = function(questionId){

      var myData = {

       questionText   : main.blog.questionText


      }

      console.log(myData);
   
      $http({

        method: 'PUT',
        data  : myData,
        url: main.baseUrl+'/questions'+'/'+questionId+'/edit'
        
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("blog edited successfully");
          console.log(response.data);
          $location.path("/blog/"+surveyId+"/questions"+'/all')

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller