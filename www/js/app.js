// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('location', {
    url: '/location',
    templateUrl: 'templates/location.html',
    controller: 'LocationCtrl'
  })

  .state('write', {
    url: '/write',
    templateUrl: 'templates/write-diary.html',
    controller: 'WriteDiaryCtrl'
  })

  .state('add', {
    url: '/write/add',
    templateUrl: 'templates/add-record.html',
    controller: 'AddRecordCtrl'
  })


  .state('tab.diary', {
    url: '/diary',
    views: {
      'tab-diary': {
        templateUrl: 'templates/tab-diary.html',
        controller: 'DiaryCtrl'
      }
    }
  })

  .state('tab.diary-detail',{
    url:'/diary/:diaryId',
    views: {
      'tab-diary':{
        templateUrl: 'templates/diary-detail.html',
        controller: 'DiaryDetailCtrl'
      }
    }
  })


  .state('tab.first', {
    url: '/first',
    views: {
      'tab-first': {
        templateUrl: 'templates/tab-first.html',
        controller: 'FirstCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })

  .state('tab.baby', {
      url: '/baby',
      views: {
        'tab-baby': {
          templateUrl: 'templates/tab-baby.html',
          controller: 'BabyCtrl'
        }
      }
    });

  // .state('tab.write-diary', {
  //     url: '/register/babyinfo/write',
  //     views: {
  //       'tab-register': {
  //         templateUrl: 'templates/write-diary.html',
  //         controller: 'WriteDiaryCtrl'
  //       }
  //     }
  //   });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/register');

});
