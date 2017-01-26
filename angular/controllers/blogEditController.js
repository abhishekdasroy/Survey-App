myApp.controller('editBlogController',['$http','$routeParams','$location',function($http,$routeParams,$location) {

  //create a context
  var main = this;


  this.pageHeading = 'Edit a blog post';
  this.pageSubHeading = 'Change the values you want to change'
 

  this.baseUrl = 'https://projectsapi.edwisor.com/api/surveys';

  this.surveyId = $routeParams.surveyId;
  console.log(this.surveyId)

  this.getCurrentPost = function(){

      $http({
        method: 'GET',
        url: main.baseUrl+'/'+main.surveyId
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.blog = response.data.data;
          console.log(main.blog);

          main.pageHeading = main.blog.heading;
          main.pageSubHeading = main.blog.subHeading;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

  }

  this.editPost = function(surveyId){

      var myData = {

       surveyTitle    : main.blog.surveyTitle,
       surveySubtitle  : main.blog.surveySubtitle,
         instructions : main.blog.instructions


      }

      console.log(myData);
   
      $http({

        method: 'PUT',
        data  : myData,
        url: main.baseUrl+'/'+surveyId+'/edit'
        
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          alert("blog edited successfully");
          console.log(response.data);
          $location.path('/blog/'+surveyId)

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller