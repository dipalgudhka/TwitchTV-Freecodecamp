//store all channel names in a variable
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// declare all global variables
var channelStreams = [];
var channelOffline = [];
var channelOnline = [];
var offline = [];
var onlineData = [];
var offlineData = [];
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var url1 = 'https://wind-bow.gomix.me/twitch-api/streams/';
var url2 = 'https://wind-bow.gomix.me/twitch-api/channels/';

// declare buttons
var buttonOff, buttonOn, buttonAll;

function preload() {
  
  //load JSON for each channel
  channels.forEach(function(key, index) {
    loadJSON(url1 + key, function (data) {
      channelStreams[index] = data;
      
    }, 'jsonp');
    
  });
}


function setup() {
  
  var x = 0;

  for (var i = 0; i < channelStreams.length; i++) {
    
    if (channelStreams[i].stream === null) {
      offline[counter1] = channels[i];
      // print(offline[counter1]);
      counter1++;
    }
    else {
      onlineData[counter2] = channelStreams[i];
      counter2++;
    }
  }
  
  //initialise the function for loading all offline data
  offD();
  
  // create buttons assign them functions
  buttonOn = createButton('Online');
  buttonOn.position(50, 10);
  buttonOn.mousePressed(onLine);
  buttonAll = createButton('All');
  buttonAll.position(100, 10);
  buttonAll.mousePressed(all);
  buttonOff = createButton('Offline');
  buttonOff.position(0, 10);
  buttonOff.mousePressed(poff);
  
}

function offD() {
  // console.log(offline);
  offline.forEach(function(key, index) {
    loadJSON(url2 + key + '?', function (data) {
      offlineData[index] = data;
      counter3++;
      
    }, 'jsonp');
    
  });
}

// The actual place where all will happen
function draw() {
 
  if (counter3 === 6) {
    var oncount = 0;
    var offcount = 0;
    var divoffcount = 0;
    
    print('offlineData=' + offlineData.length);
    
    for (var i = 0; i < onlineData.length; i++) {
      $('#box' + oncount).html('<img id="image1" class="col-md-4" src="' + onlineData[oncount].stream.channel.logo + '"><p id="header1" class="col-md-4"><a href="https://www.twitch.tv/' + onlineData[oncount].stream.channel.display_name + '">' + onlineData[oncount].stream.channel.display_name + '</a></p><p class="col-md-4">' + onlineData[oncount].stream.channel.status + '</p><br>');
      oncount++;
    }
    
    divoffcount = offcount + oncount;
    
    for (var j = 0; j < offlineData.length; j++) {
      document.getElementById("box" + divoffcount).innerHTML = '<img id="image1" class="col-md-4" src="' + offlineData[offcount].logo + '"/><p id="header1" class="col-md-4"><a href="https://www.twitch.tv/' + offlineData[offcount].display_name + '">' + offlineData[offcount].display_name + '</a></p><p class="col-md-4">Offline</p><br>';
      print(offcount);
      offcount++;
      divoffcount++;
    }
    
    noLoop();
  }
}

//for button online
function onLine() {
  var erase = 0;
  var oncount = 0;
  for (var i = 0; i < 8; i++) {
      $('#box' + erase).html('');
      erase++;
    }
    
  for (var j = 0; j < onlineData.length; j++) {
      $('#box' + oncount).html('<img id="image1" class="col-md-4" src="' + onlineData[oncount].stream.channel.logo + '"><p id="header1" class="col-md-4"><a href="https://www.twitch.tv/' + onlineData[oncount].stream.channel.display_name + '">' + onlineData[oncount].stream.channel.display_name + '</a></p><p class="col-md-4">' + onlineData[oncount].stream.channel.status + '</p><br>');
      oncount++;
    }
}

//for button all
function all() {
  var oncount = 0;
    var offcount = 0;
    var divoffcount = 0;
    
    print('offlineData=' + offlineData.length);
    
    for (var i = 0; i < onlineData.length; i++) {
      $('#box' + oncount).html('<img id="image1" class="col-md-4" src="' + onlineData[oncount].stream.channel.logo + '"><p id="header1" class="col-md-4"><a href="https://www.twitch.tv/' + onlineData[oncount].stream.channel.display_name + '">' + onlineData[oncount].stream.channel.display_name + '</a></p><p class="col-md-4">' + onlineData[oncount].stream.channel.status + '</p><br>');
      oncount++;
    }
    
    divoffcount = offcount + oncount;
    
    for (var j = 0; j < offlineData.length; j++) {
      document.getElementById("box" + divoffcount).innerHTML = '<img id="image1" class="col-md-4" src="' + offlineData[offcount].logo + '"/><p id="header1" class="col-md-4"><a href="https://www.twitch.tv/' + offlineData[offcount].display_name + '">' + offlineData[offcount].display_name + '</a></p><p class="col-md-4">Offline</p><br>';
      print(offcount);
      offcount++;
      divoffcount++;
}
}

//for button offline
function poff() {
  var erase = 0;
  var offcount = 0;
  for (var i = 0; i < 8; i++) {
      $('#box' + erase).html('');
      erase++;
    }
    
  for (var j = 0; j < offlineData.length; j++) {
      document.getElementById("box" + offcount).innerHTML = '<img id="image1" class="col-md-4" src="' + offlineData[offcount].logo + '"/><p id="header1" class="col-md-4"><a href="https://www.twitch.tv/' + offlineData[offcount].display_name + '">' + offlineData[offcount].display_name + '</a></p><p class="col-md-4">Offline</p><br>';
      offcount++;
    }
}