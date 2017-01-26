// using factory method

// Factory method uses the returned value of the function,
// it returns the values
//of the function returned after the execution
// 

myApp.factory('BlogService',function BlogFactory($http){

	// this method first 
	var blogAPIS  =  {};
	var baseUrl = 'https://projectsapi.edwisor.com/api/surveys';



	blogAPIS.getAllBlogs = function(){

		return $http({

		  method: 'GET',
		  url: baseUrl+'/'

		})	


	}// end get All Blogs

	blogAPIS.createABlog = function(blogData){

		return $http.post(baseUrl+'/create',blogData)

	}// end create blog 

	blogAPIS.editABlog = function(surveyId,blogData){

		return $http.put(baseUrl+'/'+surveyId+'/edit',blogData)

	}// end edit blog 

	blogAPIS.deleteBlog = function(surveyId){

		return $http.post(baseUrl+'/'+surveyId+'/delete',null);

	}// end delete blog

	blogAPIS.deletequestion = function(questionId){

		return $http.post(baseUrl+'/questions'+'/'+questionId+'/delete',null);

	}// end delete blog

	blogAPIS.getAllquestionsBlogs = function(surveyId){

		return $http({

		  method: 'GET',
		  url: baseUrl+'/'+surveyId+'/questions'+'/all'

		})	

			}// end get All Blogs

	

	return blogAPIS;



});//end blog service 