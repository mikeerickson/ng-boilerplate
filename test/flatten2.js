var _ = require('lodash');
var console = require('gulp-messenger');

var data = [{
  name: "Some Name",
  value: 1234,
  children: [
    { name: "Another name", value: 3456 },
    { name: "A third name", value: 9876 }
  ]
}, {
  name: "Omg Lazer Guns",
  value: 3333,
  children: [
    { name: "PewPewPew", value: 4444 }
  ]
}, {
  name: "Empty Children",
  value: 1123,
  children: [ ],
}, {
  name: "No Children",
  value: 4206
}];

var list = [];
_.each(data, function(item){
  list.push(_.omit(item, 'children'));
  list.push(_.flatten(_.pick(item, 'children')));
});
var result = _.flatten(list);

console.dump(result);
