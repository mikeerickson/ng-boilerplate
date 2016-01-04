// CONFIG (TASKS)
// =============================================================================

(function(){

  'use strict';

  var fs = require('fs');

  var data = JSON.parse(fs.readFileSync('./.bowerrc'));
  var componentBase = data.hasOwnProperty('directory') || './bower_components';

  module.exports = {

    fieldMenu: [{
      fieldObject: {
        id: 10013
      },
      name: 'Accession Number'
    },{
      name: 'Client Information',
      menu: [{
        fieldObject: {
          id: 10219
        },
        name: 'Contact Id'
      },{
        fieldObject: {
          id: 10185
        },
        name: 'Client Name'
      },{
        fieldObject: {
          id: 11812
        },
        name: 'Fax Number'
      }]
    },{
      name: 'Patient Information',
      menu: [{
        fieldObject: {
          id: 19121
        },
        name: 'Age'
      },{
        fieldObject: {
          id: 19242
        },
        name: 'Gender'
      },{
        name: 'Specimen',
        menu: [{
          name: 'Name',
          menu: [{
            fieldObject: {
              id: 35342
            },
            name: 'First Name'
          },{
            name: 'Last Name',
            menu: [{
              fieldObject: {
                id: 45321
              },
              name: 'Maiden Name'
            },{
              fieldObject: {
                id: 47431
              },
              name: 'Married Name'
            }]
          }]
        },{
          fieldObject: {
            id: 24921
          },
          name: 'Received Date'
        }]
      }]
    }]

  };

})();

