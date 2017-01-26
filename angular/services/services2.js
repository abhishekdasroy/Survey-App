// using service method 
// In this method, you will be provided with an instance of the functions
// this object instance becomes the service object that AngularJS registers
// and injects later to other services and controller if required


myApp.service('BlogService',function($http){

	this.baseUrl = 'https://blog.theguywithideas.com/api/blogs';


	this.getAllBlogs = function(){

		return $http.get(baseUrl+'/all');


	}// end get All Blogs

	this.createABlog = function(blogData){

		return $http.post(baseUrl+'/create',blogData)

	}// end create blog 

	this.editABlog = function(blogId,blogData){

		return $http.put(baseUrl+'/'+blogId+'/edit',blogData)

	}// end edit blog 

	this.deleteBlog = function(blogId){

		return $http.post(baseUrl+'/'+blogId+'/remove',null);

	}// end delete blog

	

});//end blog service 