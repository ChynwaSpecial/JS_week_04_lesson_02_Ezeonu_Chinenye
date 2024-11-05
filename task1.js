class Car {
    constructor(numSeats, numbHeadLamps, fuelTankMaxLitre, numbExhaustPipe, convertible, numbOfDoors, numbOfEnginePlug = 4) {
      this.numSeats = numSeats;
      this.numbHeadLamps = numbHeadLamps;
      this.fuelTankMaxLitre = fuelTankMaxLitre;
      this.numbExhaustPipe = numbExhaustPipe;
      this.convertible = convertible;
      this.numbOfDoors = numbOfDoors;
      this.numbOfEnginePlug = numbOfEnginePlug;
    }
  }
  
  // Instantiating the Car class to create different types of cars
  const jeep = new Car(5, 2, 50, 1, true, 4);
  const suv = new Car(7, 2, 70, 1, false, 4);
  const sportsCar = new Car(2, 4, 60, 2, true, 2);
  const sedan = new Car(5, 2, 50, 1, false, 4);
  
  console.log(jeep);
  console.log(suv);
  console.log(sportsCar);
  console.log(sedan);
  
  