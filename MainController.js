var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope',function($scope) {
$scope.appu=[
	 {icon:'button_50ml.jpg'},
		 {icon:'button_100ml.jpg'},
    {icon:'button_125ml.jpg'},
	{icon:'button_150ml.jpg'}
   
    
    ];
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
 }]);