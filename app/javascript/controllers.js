app.controller('DetailsController', ['mealDataService','$routeParams','$scope', function(mealDataService, $routeParams, $scope){

		$scope.meal = {}

		$scope.newMeal = function(){
			// call the service, pass it data
			// clean the form
			mealDataService.addMeal($scope.meal);
			$scope.meal = {};
			console.log(mealDataService.getMeals());
		};

		$scope.cancel = function(){
			$scope.meal = {};
		};

}]);


app.controller('ChargesController', ['mealDataService','$routeParams','$scope', function(mealDataService, $routeParams, $scope){

	$scope.mealCount = 0;

	$scope.mealArray = mealDataService.getMeals();

	$scope.previousMeal = function(){
		if($scope.mealCount == 0){
			$scope.mealCount = $scope.mealArray.length - 1;
		} else {
			$scope.mealCount -= 1;
		}
	};
	$scope.nextMeal = function(){
		if($scope.mealCount == $scope.mealArray.length - 1){
			$scope.mealCount = 0;
		} else {
			$scope.mealCount += 1;
		}
	};

	console.log($scope.mealArray[0])

}]);


app.controller('EarningsController', ['mealDataService','$routeParams','$scope', function(mealDataService, $routeParams, $scope){

	var mealsArray = mealDataService.getMeals();

	$scope.mealCount = mealDataService.getMeals().length;

	$scope.tiptotal = mealsArray
			.map(function(meal){
				return (meal.price * ( 1 + meal.taxrate / 100)) * (meal.tippercentage / 100);
		}).reduce(function(accum, curr){
			return accum + curr;
		});

	console.log($scope.tiptotal);


}]);

app.controller('resetController', ['mealDataService','$location','$routeParams','$scope', function(mealDataService, $location, $routeParams, $scope){

	$scope.reset = function(){
		mealDataService.resetAll();
		console.log(mealDataService.getMeals());
		$location.url('/details');
	};


}]);
