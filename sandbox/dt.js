// dt.js
// merickson <codedungeon@gmail.com>
// 2/17/2016 3:32 PM
// =============================================================================

var moment = require('moment');

var now = new Date();
now.setHours(9);
now.setMinutes(50);
now.setSeconds(0);

var dt  = moment(now).format('YYYY-MM-DD');
var ts  = getTime(dt);
var dts = setTime(dt, ts);

console.log('current date only:  ', dt);
console.log('ts from date:       ', ts);
console.log('dts from date:      ', dts);
console.log('current date/time:  ', getTime());
console.log('specific date/time: ', getTime('2016-02-14 21:12:45'));

function getTime(inDate) {
  var currTime = (inDate) ? inDate : new Date();
  return moment(currTime).format('HH:mm:ss');
}

function setTime (dt, ts) {

  var dt = new Date(dt);
  var mon = dt.getMonth();
  var day = dt.getDate();
  var year = dt.getFullYear();
  var hour = dt.getHours();
  var min = dt.getMinutes();
  var sec = dt.getSeconds();

  // get hour and minute from supplied string
  var parts = parseTime(ts);

  // update hours and minutes from time stamp
  if (parts.length >= 1) {
    hour = parseInt(parts[0]);
    min = parseInt(parts[1]);
  }

  var dtValue = year + '-' + formatNumberStr((mon+1)) + '-' + formatNumberStr(day) + ' ' + formatNumberStr(hour) + ':' + formatNumberStr(min) + ':' + formatNumberStr(sec);
  return dtValue;
};

function parseTime (ts) {
  var hour = 0;
  var min = 0;
  var sec = 0;
  var ampm = 'am';
  var parts = [];

  if ((typeof ts === 'undefined') || (ts.length === 0)) {
    parts.push('');
    parts.push('');
    parts.push('');
    return parts;
  }

  parts = ts.split(':');
  hour = parseInt(parts[0]);
  if (parts.length >= 2) {
    min = parts[1] || 0;
    min = min.replace('am', '');
    min = min.replace('pm', '');
    min = parseInt(min);
    if (parts.length === 3) {
      sec = parseInt(parts[2]);
    }
  }

  var pos = ts.indexOf('a');
  if (pos === -1) {
    pos = ts.indexOf('p');
    if (pos > 0) {
      if (hour <= 11) {
        hour += 12;
      }
      ampm = 'pm';
      parts[0] = hour;
    }
  }

  parts[0] = hour;
  parts[1] = min;
  parts[2] = sec;
  return parts;
}

function formatNumberStr(value) {
  if (isNaN(value)){
    return '00';
  }
  return (value < 10) ? '0' + value : value;
}