// let isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Poul";

const userData = "{'isBirthdayData':true, 'ageData':40,' userNameData':'Poul'}";

const userObj: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
} = JSON.parse(userData);

function logBrMsg(isBirthday: boolean, userName: string, age: number): string {
  let message: string = "";
  if (isBirthday) {
    message = `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  }

  return message;
}

console.log(logBrMsg());
