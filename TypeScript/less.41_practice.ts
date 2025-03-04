type Animals = "cat" | "dog" | "bird";

enum AnumalStatus {
  Available = "available",
  NotAvailable = "not available",
}

interface IUserParamets {
  animal: "cat" | "dog" | "bird";
  breed: string;
  sterilized?: string;
}

interface AnimalAvailable extends IUserParamets {
  location: string;
  age?: number;
}

interface IResponseAvailable {
  status: AnumalStatus.Available;
  data: AnimalAvailable;
}

interface AnimalNotAvailable {
  message: string;
  nextUpdateIn: Date;
}

interface IResponseNotAvailable {
  status: AnumalStatus.NotAvailable;
  data: AnimalNotAvailable;
}

type TResponse = IResponseAvailable | IResponseNotAvailable;

function isAnimal(animal: TResponse): animal is IResponseAvailable {
  if (animal.status === AnumalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: TResponse): AnimalAvailable | string {
  if (isAnimal(animal)) {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
