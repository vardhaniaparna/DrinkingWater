var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope',function($scope) {
$scope.appu=[
	 {icon:'button_50ml.jpg'},
		 {icon:'button_100ml.jpg'},
    {icon:'button_125ml.jpg'},
	{icon:'button_150ml.jpg'}
    ];
	//$scope.goal=0;
    $scope.weight=[
    {wt:'Select Your Weight'},
	{wt:20},
	{wt:25},
	{wt:30},
	{wt:35},
	{wt:40},
	{wt:45},
	{wt:50},
	{wt:55},
	{wt:60},
	{wt:65},
	{wt:70},
	{wt:75},
	{wt:80},
	{wt:85},
	{wt:90},
	{wt:100},
    {wt:110},
	{wt:130},	
	{wt:140},
    {wt:150}	
    ];
	$scope.myFunc=function(sc)
	{
		if($scope.selectedWeight.wt == "Select Your Weight")
		window.alert("Please select your appropriate weight");
	};
	$scope.submit=function()
	{
		var gender=$scope.gender;
		var wht=$scope.selectedWeight.wt;
		
		if(gender == "Male")
		{	
	      if(wht==20 || wht==25 || wht==30 || wht==35 || wht==40)
			  $scope.goal=1500;
          if(wht==45 || wht==50)
			  $scope.goal=1608;
		  if(wht==55 || wht==60)
			  $scope.goal=1874;
		  if(wht==75 || wht==80)
			  $scope.goal=2379;
		  if(wht==85 || wht==90)
			  $scope.goal=2632;
		  if(wht==100 || wht==110)
			  $scope.goal=3074;
		  if(wht==140 || wht==150)
			  $scope.goal=3600;
		}
		if(gender == "Female")
		{
			if(wht==20 || wht==25 || wht==30 || wht==35 || wht==40 || wht==50 || wht==55)
			  $scope.goal=1500;
          if(wht==60 || wht==65)
			  $scope.goal=1653;
		  if(wht==70 || wht==75)
			  $scope.goal=1862;
		  if(wht==80 || wht==85)
			  $scope.goal=2071;
		  if(wht==90 || wht==100)
			  $scope.goal=2332;
		  if(wht==110 || wht==130)
			  $scope.goal=2854;
		  if(wht==140 || wht==150)
			  $scope.goal=3376;
			
			
		}
		
		if(gender == "Others")
		{
			if(wht==20 || wht==25 || wht==30 || wht==35 || wht==40 || wht==50 || wht==55)
			  $scope.goal=1500;
          if(wht==60 || wht==65)
			  $scope.goal=1653;
		  if(wht==70 || wht==75)
			  $scope.goal=1862;
		  if(wht==80 || wht==85)
			  $scope.goal=2071;
		  if(wht==90 || wht==100)
			  $scope.goal=2332;
		  if(wht==110 || wht==130)
			  $scope.goal=2854;
		  if(wht==140 || wht==150)
			  $scope.goal=3376;
			
			
		}
			
		
	}
 }]);