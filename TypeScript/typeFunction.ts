// let isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Poul";

const userData = "{'isBirthdayData':true, 'ageData':40,' userNameData':'Poul'}";

const userObj: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData);

const createError = (msg: string): never => {
  //never - becouse this function don't return anything
  throw new Error(msg);
};

function logBrMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else if (!isBirthday) {
    return "Too bad";
  }
  return createError("Error");
}

console.log(userObj.isBirthdayData, userObj.userNameData, userObj.ageData);
