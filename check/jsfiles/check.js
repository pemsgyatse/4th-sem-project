arr1 = [
  {
    stid: 1,
    name: "pems",
    class: 2,
  },
  {
    stid: 2,
    name: "gyatse",
    class: 3,
  },
  {
    stid: 4,
    name: "tamang",
    class: 4,
  },
];

arr2 = [
  {
    id: 1,
    math: 20,
    nepali: 30,
    english: 100,
  },
  {
    id: 2,
    math: 20,
    nepali: 30,
    english: 40,
  },
];

const merged = arr1.map((element) => {
  const matched = arr2.find((element2) => element.stid === element2.id);
  return { ...element, matched };
});
console.log(merged);
