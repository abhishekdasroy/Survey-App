myApp.controller('optionsCreate',['$http','$location','$routeParams',function($http,$location,$routeParams) {

  //create a context
  var main = this;


  this.pageHeading = 'Create a survey option';
  this.pageSubHeading = 'please fill all the data'
 
this.questionId = $routeParams.questionId;
console.log(this.questionId);


this.surveyId = $routeParams.surveyId;
console.log(this.surveyId)

this.baseUrl = 'https://projectsapi.edwisor.com/api/surveys';

  
  this.createOption = function(questionId){

      var myData = {

          optionText : main.optionText
          
      }

      console.log(myData);
   
      $http({

        method: 'POST',
        data  : myData,
        url: main.baseUrl+'/questions'+'/'+questionId+'/options'+'/create'
        
      }).then(function successCallback(response) {


          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("option created successfully");
          $location.path('/')

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller