#LazyLoadApp
Angular v1 app that loads more images when they're in the viewport. There is a size required on the image.

#Parameters
ng-model - this specifies the imageModel or imageUrl depending on the options.mode.

gh-options - pass this an object with the below options to configure the directive

#Options
debug - will output debug info if set to true

scroller - this defines the viewport scroll object, defaulted to window.

classes - the class names that you want applied to the image, defaults to ghLazyLoad

mode - url or model
