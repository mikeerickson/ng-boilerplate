var mockData = (function() {

  return {
    getMockPeople: getMockPeople,
    getMockDogs:   getMockDogs
  };

  function getMockDogs() {
    return [
      { name: 'Shilo' },
      { name: 'Honu' },
      { name: 'Gunner'}
    ];
  }

  function getMockPeople() {
    return [
      {fname: 'Mike',   lname: 'Erickson'},
      {fname: 'Kira',   lname: 'Erickson'},
      {fname: 'Joelle', lname: 'Asoau'},
      {fname: 'Brady',  lname: 'Erickson'},
      {fname: 'Bailey', lname: 'Erickson'},
      {fname: 'Trevor', lname: 'Erickson'}
    ];
  }
})();
