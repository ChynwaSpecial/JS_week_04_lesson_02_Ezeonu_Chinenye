class Dog {
    constructor(breed, colour, size, tail) {
      this.breed = breed;
      this.colour = colour;
      this.size = size;
      this.tail = tail;
    }
  
    bark() {
      return `${this.breed} is barking! Woof! Woof!`;
    }
  
    walk() {
      return `${this.breed} is going for a walk.`;
    }
  
    run() {
      return `${this.breed} is running fast!`;
    }
  
    wiggleTail() {
      return `${this.breed} is wiggling its tail!`;
    }
  
    getAngry() {
      return `${this.breed} is getting angry! Grrr!`;
    }
  }
  
  // Instances of different dog breeds
  const labrador = new Dog('Labrador', 'Yellow', 'Large', 'Long');
  const bulldog = new Dog('Bulldog', 'White', 'Medium', 'Stumpy');
  const beagle = new Dog('Beagle', 'Tri-color', 'Small', 'Curly');

  // Adding events listerner
  function displayAction(action) { 
    let result = '';
    switch(action) { 
      case 'bark': 
        result = bulldog.bark(); 
        break; 
      case 'walk':
       result = bulldog.walk(); 
       break; 
      case 'run': 
       result = bulldog.run(); 
       break; 
      case 'wiggleTail': 
       result = bulldog.wiggleTail();
        break; 
      case 'getAngry': 
        result = bulldog.getAngry();
         break;
        } 
         document.getElementById('result').innerText = result;
        }
  