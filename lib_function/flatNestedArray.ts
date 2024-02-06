const items = [
  {
    name: 'shohan',
    age: 65,
    children: [
      {
        name: 'shohan1',
        age: 45,
      },
      {
        name: 'shohan2',
        age: 45,
        children: [
          { name: 'shohan11', age: 25, },
          { name: 'shohan222', age: 25, }
        ]
      }
    ]
  },
  {
    name: 'mhs',
    age: 65,
    children: [
      {
        name: 'mhs1',
        age: 45,
      },
      {
        name: 'mhs2',
        age: 45,
        children: [
          { name: 'mhs11', age: 25, },
          {
            name: 'mhs22',
            age: 25,
            children: [
              { name: 'mhs1111111', age: 25, },
              { name: 'mhs2222222', age: 25, }
            ]
          }
        ]
      }
    ]
  },
];

const res = items.reduce((acc, cur) => {
  acc.push({
    name: cur.name,
    age: cur.age
  });
  if (cur.children) {

    let child = cur.children;

    while (child) {
      cur.children.forEach(item => {
        acc.push({
          name: item.name,
          age: item.age
        });
      });

      child = cur.children?.children;
    }
  }

  return acc;
}, []);

console.log(res);
