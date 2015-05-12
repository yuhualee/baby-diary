angular.module('starter.controllers', [])

.controller('DiaryCtrl', function($scope,$ionicPopup, $timeout, Diarys) {
	$scope.diarys = Diarys.all();
  $scope.remove = function(diary) {
    Diarys.remove(diary);
  };
 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: '你确定要删除吗？',
     template: '温馨提示：删除后将无法恢复，请谨慎操作！',
     cancelText: '取消',
     cancelType: 'button  button-light',
     okText: '确定',
     okType: 'button button-positive'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };
})

.controller('FirstCtrl', function($scope, Diarys) {
  $scope.diarys = Diarys.all();
  $scope.remove = function(diary) {
    Diarys.remove(diary);
  };
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('RegisterCtrl', function($scope) {
})

.controller('LocationCtrl', function($scope, Locations) {
  $scope.locations = Locations.all();
})

.controller('BabyCtrl', function($scope) {
})

.controller('WriteDiaryCtrl', function($scope) {
  
})

.controller('AddRecordCtrl', function($scope) {
})

.controller('DiaryDetailCtrl', function($scope, $ionicActionSheet, $timeout,$stateParams,$ionicBackdrop, Diarys) {
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
  $scope.picShow = function() {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '发送给朋友' },
        { text: '保存图片' }
      ],
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