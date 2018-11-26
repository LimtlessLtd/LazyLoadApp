var app = angular.module('app', [
  'ngRoute',
  'ghLazyLoad',
  'ui.bootstrap',
  'ngMaterial'
]);

app.config(['$routeProvider', function ($routeProvider) {

}]);

app.controller("MainCtrl", function ($scope, $templateCache, $mdDialog) {

    $scope.options = {
        mode: 'model',
        debug: true
    };

    $scope.images =
    [
        {
            alt: 0,
            fullPath: "http://i.imgur.com/Lm5u937.jpg",
            name: "ONEName",
            imgClass: "ONEClass"
        },
        {
            alt: 1,
            fullPath: "https://ichef.bbci.co.uk/images/ic/320xn/p01lcq9w.jpg",
            name: "TWOName",
            imgClass: "TWOClass"
        },
        {
            alt: 2,
            fullPath: "https://ichef.bbci.co.uk/live-experience/cps/96/cpsprodpb/vivo/live/images/2015/8/28/4f060c03-5d47-41b0-9e3f-e1662759d206.jpg",
            name: "THREEName",
            imgClass: "THREEClass"
        },
        {
            alt: 3,
            fullPath: "http://lorempixel.com/500/500/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 4,
            fullPath: "http://lorempixel.com/700/700/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 5,
            fullPath: "http://lorempixel.com/900/900/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 6,
            fullPath: "http://lorempixel.com/1200/900/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 7,
            fullPath: "http://via.placeholder.com/1200x900",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 8,
            fullPath: "http://via.placeholder.com/350x150",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 9,
            fullPath: "http://via.placeholder.com/500x150",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 10,
            fullPath: "http://via.placeholder.com/500x300",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 11,
            fullPath: "http://via.placeholder.com/800x600",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 0,
            fullPath: "http://i.imgur.com/Lm5u937.jpg",
            name: "ONEName",
            imgClass: "ONEClass"
        },
        {
            alt: 1,
            fullPath: "https://ichef.bbci.co.uk/images/ic/320xn/p01lcq9w.jpg",
            name: "TWOName",
            imgClass: "TWOClass"
        },
        {
            alt: 2,
            fullPath: "https://ichef.bbci.co.uk/live-experience/cps/96/cpsprodpb/vivo/live/images/2015/8/28/4f060c03-5d47-41b0-9e3f-e1662759d206.jpg",
            name: "THREEName",
            imgClass: "THREEClass"
        },
        {
            alt: 3,
            fullPath: "http://lorempixel.com/500/500/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 4,
            fullPath: "http://lorempixel.com/700/700/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 5,
            fullPath: "http://lorempixel.com/900/900/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 6,
            fullPath: "http://lorempixel.com/1200/900/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 7,
            fullPath: "http://via.placeholder.com/1200x900",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 8,
            fullPath: "http://via.placeholder.com/350x150",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 9,
            fullPath: "http://via.placeholder.com/500x150",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 10,
            fullPath: "http://via.placeholder.com/500x300",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 11,
            fullPath: "http://via.placeholder.com/800x600",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 0,
            fullPath: "http://i.imgur.com/Lm5u937.jpg",
            name: "ONEName",
            imgClass: "ONEClass"
        },
        {
            alt: 1,
            fullPath: "https://ichef.bbci.co.uk/images/ic/320xn/p01lcq9w.jpg",
            name: "TWOName",
            imgClass: "TWOClass"
        },
        {
            alt: 2,
            fullPath: "https://ichef.bbci.co.uk/live-experience/cps/96/cpsprodpb/vivo/live/images/2015/8/28/4f060c03-5d47-41b0-9e3f-e1662759d206.jpg",
            name: "THREEName",
            imgClass: "THREEClass"
        },
        {
            alt: 3,
            fullPath: "http://lorempixel.com/500/500/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 4,
            fullPath: "http://lorempixel.com/700/700/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 5,
            fullPath: "http://lorempixel.com/900/900/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 6,
            fullPath: "http://lorempixel.com/1200/900/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 7,
            fullPath: "http://via.placeholder.com/1200x900",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 8,
            fullPath: "http://via.placeholder.com/350x150",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 9,
            fullPath: "http://via.placeholder.com/500x150",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 10,
            fullPath: "http://via.placeholder.com/500x300",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 11,
            fullPath: "http://via.placeholder.com/800x600",
            name: "FOURName",
            imgClass: "FOURClass"
        }, {
            alt: 0,
            fullPath: "http://i.imgur.com/Lm5u937.jpg",
            name: "ONEName",
            imgClass: "ONEClass"
        },
        {
            alt: 1,
            fullPath: "https://ichef.bbci.co.uk/images/ic/320xn/p01lcq9w.jpg",
            name: "TWOName",
            imgClass: "TWOClass"
        },
        {
            alt: 2,
            fullPath: "https://ichef.bbci.co.uk/live-experience/cps/96/cpsprodpb/vivo/live/images/2015/8/28/4f060c03-5d47-41b0-9e3f-e1662759d206.jpg",
            name: "THREEName",
            imgClass: "THREEClass"
        },
        {
            alt: 3,
            fullPath: "http://lorempixel.com/500/500/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 4,
            fullPath: "http://lorempixel.com/700/700/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 5,
            fullPath: "http://lorempixel.com/900/900/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 6,
            fullPath: "http://lorempixel.com/1200/900/",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 7,
            fullPath: "http://via.placeholder.com/1200x900",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 8,
            fullPath: "http://via.placeholder.com/350x150",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 9,
            fullPath: "http://via.placeholder.com/500x150",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 10,
            fullPath: "http://via.placeholder.com/500x300",
            name: "FOURName",
            imgClass: "FOURClass"
        },
        {
            alt: 11,
            fullPath: "http://via.placeholder.com/800x600",
            name: "FOURName",
            imgClass: "FOURClass"
        }
    ];



});