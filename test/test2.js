var msg = require('gulp-messenger');

var add = function(a, b) {
  return (a+b);
};

var math = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

var result = add(1,2);

// this should be removed
console.log(result);

var mathResult = math.add(1,5);
msg.error('mathResult', mathResult);
// this sound remain
msg.success('result: ', result);

// this should remain as well

var family = ['mike','kira','joelle','brady','bailey','trevor'];
msg.success('Here is my result with data', family);

// what goes here
// and what goes here

  var familyObj = [
      {fname: 'Mike',    lname: 'Erickson', dob: '10/15/72'},
      {fname: 'Kira',    lname: 'Erickson', dob: '5/2/76'},
      {fname: 'Joelle',  lname: 'Asoau',    dob: '7/12/93'},
      {fname: 'Brayden', lname: 'Erickson', dob: '2/28/95'},
      {fname: 'Bailey',  lname: 'Erickson', dob: '3/19/96'},
      {fname: 'Trevor',  lname: 'Erickson', dob: '4/7/97'},
      {fname: 'Nate',    lname: 'Asoau',    dob: '11/21/74'},
      {fname: 'Alaya',   lname: 'Asoau',    dob: '11/21/13'}
    ];

msg.dump(familyObj);
