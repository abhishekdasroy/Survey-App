

myApp.directive("specialCard",function(){

	
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/post-card.html",
		controller  : function($scope){			
				

		},// end controller 
		link  : function(scope,element,attrs){
			
			console.log("link function called")
			element.on("mouseover",function(){
				
				//console.log("mouseover called");
				//element.css("background-color", "yellow");

			});
			console.log(attrs); // atts is used to access directive attributes
			
		}

	}




});// end post preview card directive