const user = {
  email: 'linsy.joyner@gmail.com',
  username: 'linsydeanna',
  password: 'supersecretpassword',
  _id: '592c8029c1e6f9d97b6b146b',
  trips: [
    {
      name: 'Europe 2017',
      id: '8675309', //what's up with this id?
      startDate: '10/9/17',
      endDate: '10/16/17',
      cities: [
        {
          city: 'Amsterdam',
          country: 'Netherlands',
          startDate: '10/10/17',
          endDate: '10/13/17',
          id: '1234'
        }
      ], //need to connect these locations to a city
      locations: [
        {
          name: 'Anne Frank House',
          type: 'site',
          address: 'Prinsengracht 263-267, 1016 GV, Amsterdam, NL',
          date: '10/11/17',
          startTime: '10:00am',
          endTime: '12:00pm',
          id: '1234'
        },
        {
          name: 'Alchemist Garden',
          type: 'restaurant',
          address: 'Overtoom 409, 1054 JP, Amsterdam, NL',
          date: '10/11/17',
          startTime: '12:00pm',
          endTime: '1:30pm',
          id: '1234'
        },
        {
          name: 'Harry Potter: The Exhibition!',
          type: 'event',
          address: 'CineMec Utrecht, Berlijnplein 100, 3541 CM UTRECHT',
          date: '10/12/17',
          startTime: '4:00pm',
          endTime: '7:00pm',
          id: '1234'
        }
      ]
    }
  ]
};
