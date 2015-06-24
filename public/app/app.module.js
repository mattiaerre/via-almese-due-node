var config = {
    appName: 'via-almese-due',
};

(function (angular) {
    angular.module(config.appName, ['uiGmapgoogle-maps']);
    angular.module(config.appName).controller('MainController', [MainController]);
})(angular, config);