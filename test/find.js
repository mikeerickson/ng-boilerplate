var msg  = require('gulp-messenger');
var _    = require('lodash');
var fs   = require('fs');

function getFieldObjectIdFromMenuItem (fieldMenu, menuItem) {

  var _fieldMenu   = fieldMenu || [];
  var _menuItem    = menuItem || '';
  var _menuItems   = _menuItem.split(':');
  var result       = -1; // default to invalid fieldId
  var _fieldname   = '';
  var _fieldObject = {};

  if ((_menuItems.length > 0 ) && ( _fieldMenu.length > 0 )){
    _.forEach(_menuItems, function(fieldname, idx){
      _fieldname = _.trim(fieldname);
      if ( (idx + 1) !== _menuItems.length ) {
        var temp = _.find(_fieldMenu, {label: _fieldname});
        if( temp.hasOwnProperty('menu')) {
          _fieldMenu = temp.menu;
        } else {
          return result; // if we reached this, our fieldMenu is malformed
        }
      } else {
        if( _fieldMenu.hasOwnProperty('menu')) {
          _fieldObject = _.find(_fieldMenu.menu, {label: _fieldname});
          if (_fieldObject.hasOwnProperty('fieldObject')) {
            result = _fieldObject.fieldObject.id;
          }
        } else {
          _fieldObject = _.find(_fieldMenu, {label: _fieldname});
          if(_fieldObject.hasOwnProperty('fieldObject')) {
            result = _fieldObject.fieldObject.id;
          }
        }
      }
    });
  }

  return result;
}


var fieldMenu = JSON.parse(fs.readFileSync('./test/data/fieldMenu.json'));


console.log('\n');
msg.chalkline.green();

// Get fieldObjectId from top level
var menuItem = 'Accession Number';
var fieldObjectId  = getFieldObjectIdFromMenuItem(fieldMenu, menuItem);
console.log('1 fieldObjectId: ',fieldObjectId);

//Get fieldObjectId from second level
menuItem = 'Client Information : Client Name';
fieldObjectId  = getFieldObjectIdFromMenuItem(fieldMenu, menuItem);
console.log('2 fieldObjectId: ',fieldObjectId);

// Get fieldObjectId from third level
menuItem = 'Patient Information : Specimen : Received Date';
fieldObjectId  = getFieldObjectIdFromMenuItem(fieldMenu, menuItem);
console.log('3 fieldObjectId: ',fieldObjectId);

// Get fieldObjectId from fourth level
menuItem = 'Patient Information : Specimen : Name : First Name';
fieldObjectId  = getFieldObjectIdFromMenuItem(fieldMenu, menuItem);
console.log('4 fieldObjectId: ',fieldObjectId);

// Get fieldObjectId from fifth level
menuItem = 'Patient Information : Specimen : Name : Last Name : Married Name';
fieldObjectId  = getFieldObjectIdFromMenuItem(fieldMenu, menuItem);
console.log('5 fieldObjectId: ',fieldObjectId);




