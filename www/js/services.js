angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Diarys', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var diarys = [{
    id: 0,
    memorabilia: "第一上次叫妈妈",
    weather: "ion-android-cloud-outline",
    mood: "ion-android-happy",
    sound: "ion-android-microphone",
    content: "早晨正要上班，宝宝醒来，拉着我的手哭着不让上班。我告诉她下班带好吃的，也不同意。最终，我给了一张火车票，让她坐火车来找我...宝宝的条件是，不要好吃的，想要一本《王子的书》...",
    img: "http://pic10.nipic.com/20101014/3970232_130026012359_2.jpg",
    address: "北京市朝阳区东坝乡",
    name: "妈妈",
    time: "2013,05,02",
    birth: "两周6个月10天"
  }, {
    id: 1,
    memorabilia: "第一上次坐飞机",
   weather: "ion-android-cloud-outline",
    mood: "ion-android-happy",
    content: "上班后，宝宝学习的来源，已经不再单一...她喜欢看动画片《米奇妙妙屋》《熊出没》最近迷恋上《爱探险的朵拉》中英文的....她喜欢里面的朵拉，她说像《采蘑菇的小姑娘》所以，她称呼她为小蘑菇...",
    img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
    address: "北京市朝阳区东坝乡",
    name: "妈妈",
    time: "2013,05,02",
    birth: "两周6个月5天"
  }, {
    id: 2,
    memorabilia: "第一上次喝红酒",
    weather: "ion-android-cloud-outline",
    mood: "ion-android-happy",
    sound: "ion-android-microphone",
    content: "她拿着几支画笔，让我陪她数一下，谁知道张口就是：“one,two,four,five,six,seven.....”我不知道，她究竟明白不明白这些的意思，但我知道，她的理解已经超出我们的想象...",
    img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
    address: "北京市朝阳区东坝乡",
    name: "妈妈",
    time: "2013,05,02",
    birth: "两周3个月10天"
  }, {
    id: 3,
    memorabilia: "宝宝第一上次叫妈妈",
    weather: "ion-android-cloud-outline",
    mood: "ion-android-happy",
    sound: "ion-android-microphone",
    content: "昨晚，我坐在那，她指着我的腿说：“妈妈，这是什么形状？”我以为她还不能分辨颜色和形状是什么意思，指着裤子说，“这是黑色”。她着急了，用手指沿着腿弯曲的地方，画了一下“妈妈，这是三角形状”。",
    img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
    address: "北京市朝阳区东坝乡",
    name: "妈妈",
    time: "2013,05,02",
    birth: "两周2个月15天"
  }, {
    id: 4,
    memorabilia: "宝宝第一上次叫妈妈",
    weather: "ion-android-cloud-outline",
    mood: "ion-android-happy",
    sound: "ion-android-microphone",
    content: "那天宝爸给宝宝买了好吃的，宝宝说：“谢谢，爸爸，thank you!”那一句，惊呆了我，她的学习能力超出我的想象。",
    img: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png",
    address: "北京市朝阳区东坝乡",
    name: "妈妈",
    time: "2013,05,02",
    birth: "两周1个月20天"
  }];

  return {
    all: function() {
      return diarys;
    },
    remove: function(diary) {
      diarys.splice(diarys.indexOf(diary), 1);
    },
    get: function(diaryId) {
      for (var i = 0; i < diarys.length; i++) {
        if (diarys[i].id === parseInt(diaryId)) {
          return diarys[i];
        }
      }
      return null;
    }
  };
});
