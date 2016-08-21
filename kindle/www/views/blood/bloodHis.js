angular.module('App')
	.controller('BloodHisCtrl', function($scope, userHistory, $ionicPopup, $http, $ionicLoading) {

		var uid = window.localStorage.uid;

		$scope.show = function() {

			$scope.data = {};

			// 一个精心制作的自定义弹窗
			var myPopup = $ionicPopup.show({
				template: '<input type="tel" ng-model="data.his1"><br/><input type="tel" ng-model="data.his2"><br/><input type="tel" ng-model="data.his3">',
				title: 'The values of input record',
				subTitle: 'Please use normal things',
				scope: $scope,
				buttons: [{
					text: 'Cancel',

				}, {
					text: '<b>Save</b>',
					type: 'button-positive',
					onTap: function(e) {

						if(!$scope.data.his1 && !$scope.data.his2 && !$scope.data.his3) {
							//don't allow the user to close unless he enters wifi password
							e.preventDefault();
						} else {
							
							$ionicLoading.show({
								template: 'Loading...'
							});

							$http.get("http://api.3eat.net/kinleeb/data_xueya_post.php?code=kinlee&uid=" + uid + "&gaoya=" + $scope.data.his1 + "&maibo=" + $scope.data.his3 + "&diya=" + $scope.data.his2)
								.success(function(response) {
									
									if(response[0]["_postok"] == 1) {

									}
									$ionicLoading.hide();
								}).error(function(data) {
									$ionicLoading.hide();
									alert("err");
								});

						}
					}
				}, ]
			});
			myPopup.then(function(res) {
				//console.log('Tapped!', res);
			});

		}

		$(function() {

			setTimeout(function() {

				$('#container4').highcharts({
					chart: {
						type: 'area'
					},
					legend: {
						align: 'right',
						verticalAlign: 'top',
						y: -2
					},
					credits: {
						enabled: false //取消右下角版权信息
					},
					navigation: {
						buttonOptions: {
							enabled: false //隐藏右上角功能按钮
						}
					},
					title: {
						text: 'Adult Weight History'
					},
					//				subtitle: {
					//					text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
					//						'thebulletin.metapress.com</a>'
					//				},
					xAxis: {
						allowDecimals: false,
						labels: {
							formatter: function() {
								return this.value; // clean, unformatted number for year
							}
						},
						//categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
						categories: userHistory.data[3][1][0]["_Adate"]
					},
					yAxis: {
						title: {
							text: null
						},
						labels: {
							formatter: function() {
								return this.value + 'kg';
							}
						}
					},
					tooltip: {
						pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
					},

					series: [{
						name: 'USA',
						//data: [45, 42, 10, 80, 52, 46, 21, 32, 70, 25, 79, 64]
						data: userHistory.data[3][1][0]["_Acontent"]
					}]
				});

				//================================

				$('#container5').highcharts({
					chart: {
						type: 'area'
					},
					legend: {
						align: 'right',
						verticalAlign: 'top',
						y: -2
					},
					credits: {
						enabled: false //取消右下角版权信息
					},
					navigation: {
						buttonOptions: {
							enabled: false //隐藏右上角功能按钮
						}
					},
					title: {
						text: 'BMI'
					},
					//				subtitle: {
					//					text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
					//						'thebulletin.metapress.com</a>'
					//				},
					xAxis: {
						allowDecimals: false,
						labels: {
							formatter: function() {
								return this.value; // clean, unformatted number for year
							}
						},
						//categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
						categories: userHistory.data[3][1][0]["_Adate"]
					},
					yAxis: {
						title: {
							text: null
						},
						labels: {
							formatter: function() {
								return this.value + 'kg';
							}
						}
					},
					tooltip: {
						pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
					},

					series: [{
						name: 'USA',
						//data: [15, 10, 10, 14, 14, 18, 21, 32, 12, 10, 11, 14]
						data: userHistory.data[3][1][0]["_Bcontent"]
					}]
				});

				//================================

				//================================

				$('#container6').highcharts({
					chart: {
						type: 'area'
					},
					legend: {
						align: 'right',
						verticalAlign: 'top',
						y: -2
					},
					credits: {
						enabled: false //取消右下角版权信息
					},
					navigation: {
						buttonOptions: {
							enabled: false //隐藏右上角功能按钮
						}
					},
					title: {
						text: 'BMI'
					},
					//				subtitle: {
					//					text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
					//						'thebulletin.metapress.com</a>'
					//				},
					xAxis: {
						allowDecimals: false,
						labels: {
							formatter: function() {
								return this.value; // clean, unformatted number for year
							}
						},
						//categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
						categories: userHistory.data[3][1][0]["_Adate"]
					},
					yAxis: {
						title: {
							text: null
						},
						labels: {
							formatter: function() {
								return this.value + 'kg';
							}
						}
					},
					tooltip: {
						pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
					},

					series: [{
						name: 'USA',
						//data: [15, 10, 10, 14, 14, 18, 21, 32, 12, 10, 11, 14]
						data: userHistory.data[3][1][0]["_Ccontent"]
					}]
				});

				//================================

			}, 500);

		});
	});