app.service('mealDataService',[ function(){

	var mealArray = [];

	var totals = {};

return {

				getMeals: function(){
					return mealArray;
				},

				getCumulative: function(){
					return totals;
				},

				addMeal: function(meal){
					mealArray.push(meal);

				},

				resetAll: function(){
					mealArray = [];
					totals = {};
				}

			}

}]);
