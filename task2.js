class Phone {
    constructor(brand, model, storage, batteryCapacity, cameraAvailability) {
      this.brand = brand;
      this.model = model;
      this.storage = storage; // in gigabyte
      this.batteryCapacity = batteryCapacity; // in mAh
      this.cameraAvailability = cameraAvailability;
    }
  }
  
  // Instantiating the Phone class to create different types of phones
  const phone1 = new Phone('Apple', 'iPhone 13', 258, 3095, true);
  const phone2 = new Phone('Samsung', 'Galaxy S21', 128, 4000, true);
  const phone3 = new Phone('Nokia', '3310', 4, 1200, false);
  
  console.log(phone1);
  console.log(phone2);
  console.log(phone3);
  