"use strict";angular.module("colorConverterApp",[]),function(){angular.module("colorConverterApp").controller("MainCtrl",["$scope",function(a){function b(a){if(!a)return null;var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a),b?{r:parseInt(b[1],16),g:parseInt(b[2],16),b:parseInt(b[3],16)}:null}function c(a){var b=a.toString(16);return 1===b.length?"0"+b:b}function d(a,b,d){return 0>a||0>b||0>d||a>255||b>255||d>255?null:(a||(a=0),b||(b=0),d||(d=0),"#"+c(a)+c(b)+c(d))}a.hexChange=function(){var c=b(a.hex);c&&(a.r=c.r,a.g=c.g,a.b=c.b)},a.rgbChange=function(){var b=d(a.r,a.g,a.b);b&&(a.hex=b)},a.hexColor=function(){return a.hex&&a.form.hex.$valid?0!==a.hex.indexOf("#")?"#"+a.hex:a.hex:"#fff"},a.hex="#00b0ff",a.hexChange()}])}(),angular.module("colorConverterApp").run(["$templateCache",function(a){a.put("views/main.html",'<div ng-controller="MainCtrl" ng-form="form"> <h3>Color</h3> <div class="color-indicator" ng-style="{\'background-color\': hexColor()}"></div> <h3>RGB</h3> <div class="row"> <div class="col-sm-3"> <pre class="with-empty-label">rgb({{r}},{{g}},{{b}})</pre> </div> <div class="col-sm-3"> <div class="form-group" ng-class="{\'has-error\' : form.r.$invalid}"> <label for="r">R</label> <input type="number" name="r" ng-model="r" ng-change="rgbChange()" class="form-control" id="r" placeholder="0-255" min="0" max="255"> </div> </div> <div class="col-sm-3"> <div class="form-group" ng-class="{\'has-error\' : form.g.$invalid}"> <label for="g">G</label> <input type="number" name="g" ng-model="g" ng-change="rgbChange()" class="form-control" id="g" placeholder="0-255" min="0" max="255"> </div> </div> <div class="col-sm-3"> <div class="form-group" ng-class="{\'has-error\' : form.b.$invalid}"> <label for="b">B</label> <input type="number" name="b" ng-model="b" ng-change="rgbChange()" class="form-control" id="b" placeholder="0-255" min="0" max="255"> </div> </div> </div> <h3>HEX</h3> <div class="row"> <div class="col-sm-3"> <pre>{{ hexColor() }}</pre> </div> <div class="col-sm-3" ng-class="{\'has-error\' : form.hex.$invalid}"> <div class="form-group"> <input type="text" name="hex" ng-model="hex" ng-change="hexChange()" class="form-control" id="hex" placeholder="#012345" pattern="^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"> </div> </div> </div> </div>')}]);