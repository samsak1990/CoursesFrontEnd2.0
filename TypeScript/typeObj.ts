const userObj = {
  isBirthdayData: true,
  userNameData: "Poul",
  ageData: 40,
  messages: {
    error: "Error",
  },
};
const createError = (msg: string): never => {
  //never - becouse this function don't return anything
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
