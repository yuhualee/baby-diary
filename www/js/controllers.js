angular.module('starter.controllers', [])

.controller('DiaryCtrl', function($scope, Diarys) {
	$scope.diarys = Diarys.all();
  $scope.remove = function(diary) {
    Diarys.remove(diary);
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('RegisterCtrl', function($scope) {
})

.controller('InfoCtrl', function($scope) {
})

.controller('WriteDiaryCtrl', function($scope) {
})

.controller('DiaryDetailCtrl', function($scope, $ionicActionSheet, $timeout,$stateParams, Diarys) {
	$scope.diary = Diarys.get($stateParams.diaryId);

 // Triggered on a button click, or some other target
 $scope.show = function() {
   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>分享</b>' },
       { text: '编辑' }
     ],
     destructiveText: '删除',
     titleText: '选择你要的操作',
     cancelText: '取消',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });
   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);
 };
});