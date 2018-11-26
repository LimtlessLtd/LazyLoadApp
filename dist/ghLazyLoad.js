(function() {}(
    angular.module('ghLazyLoad', [])
    .directive("ghLazyLoad", ['$window', '$document', '$timeout',
        function ($window, $document, $timeout) {
        return {
            restrict: 'E',
            scope: {
                image: "=ngModel",
                options: "=ghOptions"
            },
            templateUrl: 'templates/LazyImage.html',
            link: function ($scope, $element) {
                var defaults = {
                    debug: false,
                    scroller: 'window',
                    classes: "ghLazyLoad",
                    mode: 'URL'
                };

                if (angular.isUndefined($scope.options.debug)) {
                    $scope.options.debug = defaults.debug;
                }

                if (angular.isUndefined($scope.options.scroller)) {
                    $scope.options.scroller = defaults.scroller;
                }

                if (angular.isUndefined($scope.options.classes)) {
                    $scope.options.classes = defaults.classes;
                }

                if (angular.isUndefined($scope.options.mode)) {
                    $scope.options.mode = defaults.mode;
                }



                if ($scope.options.mode.toLowerCase() === 'url') {
                    $scope.imageModel = {};
                    $scope.imageModel.name = "";
                    $scope.imageModel.fullPath = $scope.image;
                    $scope.imageModel.alt = "";
                } else {
                    $scope.imageModel = $scope.image;
                }


                var scroller = $scope.options.scroller === 'window' ? $window : $document[0].querySelector($scope.options.scroller);
                var latestKnownScrollY = 0;

                $scope.$onScreen = false;

                var throttle = function (func) {
                    var timeout;
                    return function () {
                        var context = this;
                        var args = arguments;

                        if ($window.requestAnimationFrame) {
                            $window.cancelAnimationFrame(timeout);
                            timeout = $window.requestAnimationFrame(function () {
                                func.apply(context, args);
                                timeout = null;
                            });

                        } else {
                            $timeout.cancel(timeout);
                            timeout = $timeout(function () {
                                func.apply(context, args);
                                timeout = null;
                            }, 1000 / 16);
                        }
                    };
                };

                var update = function () {
                    var currentScrollY = latestKnownScrollY;
                    var elementTop = $element.children()[0].getBoundingClientRect().top;
                    var elTopYPos = elementTop - currentScrollY;
                    var scrollerHeight = $scope.options.scroller === 'window' ? $window.innerHeight : scroller.clientHeight;


                    if ($scope.options.scroller === 'window') {
                        //if we aren't using the window as the scrollable area
                        //we will use getBoundingClientRect.top to determine the top position of this element. otherwise the original way is fine
                        elTopYPos = elementTop - currentScrollY;
                    }

                    // where elment is in the current range of the screen view
                    var onScreen = elTopYPos <= (currentScrollY + scrollerHeight);

                    if ($scope.options.debug)
                        console.dir($scope.imageModel.fullPath + ": " + onScreen.toString());

                    $scope.$onScreen = onScreen;

                    if ($scope.$onScreen) {
                        //element is ON screen so put the src in
                        $scope.realSrc = $scope.imageModel.fullPath;
                        $element.find("img").bind('load', function () {
                            var imgElement = $element.find("img")[0];
                            $scope.image.naturalHeight = imgElement.naturalHeight;
                            $scope.image.naturalWidth = imgElement.naturalWidth;
                            $scope.image.height = imgElement.height;
                            $scope.image.width = imgElement.width;
                        });

                        if ($scope.options.debug)
                            console.dir($scope.imageModel.fullPath + " -- Has been loaded.");

                        $scope.$apply();
                    }

                    if (onScreen) {
                        onDestroy();
                    }
                };

                var throttledUpdate = throttle(update);

                var onScroll = function () {
                    latestKnownScrollY = $scope.options.scroller === 'window' ? scroller.scrollY : scroller.scrollTop;

                    throttledUpdate(update);
                };

                var onDestroy = function () {
                    angular.element(scroller).off('scroll', onScroll);
                };

                var init = function () {
                    update();
                };

                angular.element(scroller).on('scroll', onScroll);
                $scope.$on('$destroy', onDestroy);
                $timeout(init); // delay init incase of ngRepeats

            }
        };
    } ]
    ))
);

angular.module('ghLazyLoad').run(['$templateCache', function($templateCache) {
  $templateCache.put("templates/LazyImage.html",
    "<img ng-class=\"options.classes\" ng-attr-alt=\"{{imageModel.alt}}\" ng-src=\"{{realSrc}}\"/>\n" +
    "");
}]);
