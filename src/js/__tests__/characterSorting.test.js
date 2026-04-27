import { characterSort} from "../characterSorting" ;

test ('characters sorted from bigger to smaller healthStatus', () => {
  const data = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const sortedData = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];

  expect (characterSort(data)).toEqual (sortedData);
});

