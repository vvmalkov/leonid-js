const array = {
  data: [],
  push: function addInfo(value) {
    console.log(this);
    this.data.push(value);
  },
  // () =>{} не будет работать, this не имеет сосбсвенного констекста
  newPush: () => {
    console.log(this);
  },
};

array.push(5);
console.log(array.data);
array.push(10);
console.log(array.data);
array.newPush();
