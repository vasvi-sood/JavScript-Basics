//Arrow functions cant read te this propery of an object
const vasvi = {
  myname: 'vasvi',
  surname: 'sood',
  age: 19,
  inCollege: true,
  greet: () => {
    console.log(`hello ${this.myname}`); // It prints hello undefined because this here is the window object and it does not have myname attribute.
  }
};
//Note: So always use normal functions
