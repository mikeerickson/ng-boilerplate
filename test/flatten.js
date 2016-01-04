var msg = require('gulp-messenger');
var _   = require('lodash');

function flattenFamilyTree(obj, divider, padStr) {

  var result   = [];
  var _divider = divider || _.repeat('-', 35);
  var _padStr  = padStr || ' ';

  _.forEach(obj, function (node) {
    result.push(echoBranch(node, 0, result));
    _.forEach(node.submenu, function (node) {
      result.push(echoBranch(node, 1));
      _.forEach(node.submenu, function (node) {
        result.push(echoBranch(node, 2));
        _.forEach(node.submenu, function (node) {
          result.push(echoBranch(node, 3));
          _.forEach(node.submenu, function(node){
            result.push(echoBranch(node, 4));
            _.forEach(node.submenu, function(node){
              result.push(echoBranch(node, 5));
              _.forEach(node.submenu, function(node){
                result.push(echoBranch(node, 6));
              });
            });
          });
        });
      });
    });
  });

  function echoBranch(node, level, indent) {


    return node.divider ? _divider : _.repeat(_padStr, ((level || 0) * (indent || 3))) + node.name;
  }

  return result;

}

var familyTree  = [{
  name:'Surber, Carolyne',
  submenu: [{
    name: 'Erickson, Mike',
    submenu: [{
      name: 'Erickson, Joelle',
      submenu: [{
        name: 'Asoau, Alaya',
        disabled: true
      }]
    }, {
      name: 'Erickson, Brady'
    },{
      name: 'Erickson, Trevor'
    }]
  }, {
    name: 'Erickson, David',
    submenu: [{
      name: 'Erickson, Tristan'
    }]
  }]
}, {
  name: 'Surber, Joe',
  submenu: [{
    name: 'Surber, Jeff',
    submenu: [{
      name: 'Surber Baby'
    }]
  },{
    name: 'Surber, Jaysen'
  }]
}, {
  name: 'Erickson',
  divider: true,
  submenu: []
},{
  name:'Felter, Cheri',
  submenu: [{
    name: 'Buffington, Bryan',
    submenu: [{
      name: 'Buffington, Kylie',
      submenu: [{
        name: 'Buffington, Ryder'
      }]
    },{
      name: 'Buffington, Hayden'
    }]
  }, {
    name: 'Erickson, Kira',
    submenu: [{
      name: 'Erickson, Bailey'
    }]
  }]
}, {
  name: 'Felter, Ed',
  submenu: [{
    name: 'Lonsway, Cody',
    submenu: [{
      name: 'Lonsway, Holden'
    }]
  }]
}];

msg.chalkline.green();
var result = flattenFamilyTree(familyTree);
msg.dump(result);





