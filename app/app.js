(function (angular) {
    'use strict';

    angular.module('app', [
        'pascalprecht.translate',
        'ui.router',
        'ui.bootstrap',
        'angular.chosen',
        'ngMockE2E',
        'datatables',
        'backand',
        'uiGmapgoogle-maps',
        'ngMap',
        'ngMessages',
        'ui.validate'
    ])
    .config(config)
    .run(run);

    config.$inject = ['$urlRouterProvider', 'BackandProvider', '$translateProvider', 'translationDe'];
    function config($urlRouterProvider, BackandProvider, $translateProvider, translationDe) {
        $urlRouterProvider.otherwise('/login');

        BackandProvider.setAppName('betgame');
        BackandProvider.setSignUpToken('a9e5e2d4-df03-4fd2-9e91-a905f457e8a8');
        BackandProvider.setAnonymousToken('0a85e42b-dc7c-4f20-a23c-47480a6f88e0');

        // configure translations
        $translateProvider
        // there is no english translations because we will use it directly
        .translations('en', {})
        .translations('de', translationDe)
        .preferredLanguage('en');
    }

    run.$inject = ['$rootScope', 'mocks', 'conf', '$state', 'notify'];
    function run($rootScope, mocks, conf, $state, notify) {
        $rootScope.conf = conf;
        $rootScope.notify = notify;


        //ui function for preventing redirection without logging in
        $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams, options){
        if (toState.name == 'registration') {
            //$state.transitionTo('registration'); - tova vodi do maximum call stack size exceeded? transitionTo e problema ?
            window.location.hash = '#/registration';

        }  else if (toState.name != 'login' && !conf.user.id) {
            event.preventDefault();
            notify.info('Please Log In or Register!')
            $state.transitionTo('login');
            }

            })


    }

})(angular);
