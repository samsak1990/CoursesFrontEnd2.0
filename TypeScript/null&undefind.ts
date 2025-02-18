const test: null = null;

function getRandomData() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return "    Some data    ";
  }
}

const data = getRandomData();

const trimmedData = data?.trim();
