// reverse a string

const reverseString = (str) => {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let ch = str[i];

    revStr += ch;
  }

  console.log(revStr);
};

reverseString("Hello");
