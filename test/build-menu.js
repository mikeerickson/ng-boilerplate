var msg    = require('gulp-messenger');
var lodash = require('lodash');         // dont use _ here so we can move it to queryTool

function flatten(input, output, stack) {

  var _output      = output || [];
  var _stack      = stack || [];
  var _parentItem = '';
  var _separator  = ':';
  var _skipKeys   = ['id','disabled','divider'];
  var _keys       = ['name','submenu'];

  if (lodash.isArray(input)) {
    for (var index = 0, length = input.length; index < length; index++) {
      flatten(input[index], _output, _stack);
      _stack.pop();
    }
    _stack = [];
  }
  else if (lodash.isObject(input)) {
    for (var item in input) {
      var bContinue = ( _keys.length === 0 ) || ((_keys.length > 0 ) && (_keys.indexOf(item) !== -1));
      var bSkip     = (( _keys.length === 0 ) && ( _skipKeys.indexOf(item) !== -1 ));
      if ( bContinue && ! bSkip ) {
        if (input.hasOwnProperty(item)) {
          if (! lodash.isObject(input[item])) {
            if(! input.hasOwnProperty('id')) {
              _stack.push('[' + input[item] +']');
            } else {
              _stack.push(input[item]);
            }
          }
          flatten(input[item], _output, _stack);
        }
      }
    }
  }
  else {
    _parentItem = '';
    _stack.forEach(function (item, index) {
      if ( item.length > 0 ) {
        _parentItem += (index === 0) ? item : ' ' + _separator + ' ' + item;
      }
    });

    return _output.push(_parentItem);
  }

  _output = lodash.filter(_output, function(item) {
    return item.slice(-1) !== ']';
  });

  _output = lodash.map(_output, function(item){
    return item.replace(/[\[\]']/g,'' );
  });

  return _output;

}


var familyTree = [{
  id: 1,
  name: 'Surber, Carolyne',
  submenu: [{
    id: 10001,
    name: 'Erickson, Mike',
    submenu: [{
      id: 100001,
      name: 'Asoau (Erickson), Joelle',
      submenu: [{
        id: 1000002,
        name: 'Asoau, Alaya',
        disabled: true
      }]
    },{
      id: 100002,
      name: 'Erickson, Brady'
    },{
      id: 100003,
      name: 'Erickson, Trevor'
    }]
  }, {
    id: 10002,
    name: 'Erickson, David',
    submenu: [{
      id: 100004,
      name: 'Erickson, Tristan'
    }]
  }]
},{
  id: 2,
  name: 'Surber, Joe',
  submenu: [{
    id: 10003,
    name: 'Surber, Jeff',
    submenu: [{
      id: 100005,
      name: 'Baby Surber'
    }]
  },{
    id: 10004,
    name: 'Surber, Jaysen'
  }]
},{
  id: 3,
  name: 'Felter, Cheri',
  submenu: [{
    id: 10004,
    name: 'Buffington, Bryan',
    submenu: [{
      id: 100006,
      name: 'Buffington, Kylie',
      submenu: [{
        id: 100083,
        name: 'Buffington, Ryder'
      }]
    },{
      id: 100007,
      name: 'Buffington, Hayden'
    }]
  },{
    id: 10005,
    name: 'Erickson (Buffington), Kira',
    submenu: [{
      id: 100008,
      name: 'Erickson (Buffington), Bailey'
    }]
  }]
},{
  id: 4,
  name: 'Felter, Ed',
  submenu: [{
    id: 10006,
    name: 'Lonsway (Felter), Codi',
    submenu: [{
      id: 100009,
      name: 'Lonsway, Holden'
    }]
  }]
},{
  name: 'Clients',
  submenu: [{
    id: 5,
    name: 'ASG'
  }]
}];

msg.chalkline.green();
console.log('\n');

console.time('flatten');
var result = [];
result = flatten(familyTree);
console.timeEnd('flatten');

msg.dump(result);

console.log('\n');





