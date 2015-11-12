/*global angular*/
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name colorConverterApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the colorConverterApp
     */
    angular.module('colorConverterApp')
        .controller('MainCtrl', ['$scope', function ($scope) {

            function hexToRgb(hex) {
                if (!hex) {
                    return null;
                }
                // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                var result, shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                });

                result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }

            function componentToHex(c) {
                var hex = c.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }

            function rgbToHex(r, g, b) {
                if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
                    return null;
                }
                if (!r) {
                    r = 0;
                }
                if (!g) {
                    g = 0;
                }
                if (!b) {
                    b = 0;
                }
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }

            $scope.hexChange = function () {
                var rgb = hexToRgb($scope.hex);
                if (rgb) {
                    $scope.r = rgb.r;
                    $scope.g = rgb.g;
                    $scope.b = rgb.b;
                }
            };

            $scope.rgbChange = function () {
                var hex = rgbToHex($scope.r, $scope.g, $scope.b);
                if (hex) {
                    $scope.hex = hex;
                }
            };

            $scope.hexColor = function () {
                if ($scope.hex && $scope.form.hex.$valid) {
                    if ($scope.hex.indexOf('#') !== 0) {
                        return '#' + $scope.hex;
                    }
                    return $scope.hex;
                }
                return '#fff';
            };

            $scope.hex = '#00b0ff';
            $scope.hexChange();

        }]);
}());