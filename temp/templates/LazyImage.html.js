angular.module('ghLazyLoad').run(['$templateCache', function($templateCache) {
  $templateCache.put("templates/LazyImage.html",
    "<img ng-class=\"options.classes\" ng-attr-alt=\"{{imageModel.alt}}\" ng-src=\"{{realSrc}}\"/>\n" +
    "");
}]);
