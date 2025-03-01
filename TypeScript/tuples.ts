const userObj = {
  isBirthdayData: true,
  userNameData: "Poul",
  ageData: 40,
  messages: {
    error: "Error",
  },
};

const userDataTuple: [boolean, number, ...string[]] = [
  true,
  40,
  "Poul",
  "Alex",
  "Ann",
];
userDataTuple[3];
userDataTuple.push(50);
userDataTuple[3]; //т.к. определено 3 элемента в кортеже

const createError = (msg: string): never => {
  //never - becouse this function return nothing
  throw new Error(msg);
};

function logBrMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: {
    error: string;
  };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
}

console.log(logBrMsg(userObj));

export {};
