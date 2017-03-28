const insertionSort = function (inputArray) {
  for (int j = 1; j < inputArray.length; j++) {
    key = inputArray[j];

    var i = j - 1;
    while (i && inputArray[i] > key) {
      inputArray[i + 1] = inputArray[i];
    }
    inputArray[i] = key;
  }
};
