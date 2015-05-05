'use strict';

angular.module('prodapps').provider('prodooPrint',[ function prodooPrintProvider() {

	this.$get = ['$http', 'prodooConfig', function ($http, prodooConfig) {
			return function (payload) {
				var req = {
					args: ['laser', payload.label],
					kwargs: { options : { 'copies': payload.quantities }}
				};
				$http.post(prodooConfig.printServer+'/printData', req);
				console.log('print !!!!', payload);
			};
	}];

	return this;
}])