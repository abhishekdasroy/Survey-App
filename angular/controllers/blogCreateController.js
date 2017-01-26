myApp.controller('blogCreateController',['$http','$location',function($http,$location) {

  //create a context
  var main = this;


  this.pageHeading = 'Create a survey post';
  this.pageSubHeading = 'please fill all the data'
 

  this.baseUrl = 'https://projectsapi.edwisor.com/api/surveys';

  this.createPost = function(){

      var myData = {

          surveyTitle : main.surveyTitle,
          surveySubtitle : main.surveySubtitle,
         instructions : main.instructions

      }

      console.log(myData);
   
      $http({

        method: 'POST',
        data  : myData,
        url: main.baseUrl+'/create'
        
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("blog created successfully");
          $location.path('/')

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller