const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

function testUnroll() {
  let squareArray1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ];
  let expected1 = [1, 2, 3, 6, 9, 8, 7, 4, 5];
  console.assert(JSON.stringify(unroll(squareArray1)) === JSON.stringify(expected1), 'Test Case 1 Failed');

  let squareArray2 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
  ];
  let expected2 = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
  console.assert(JSON.stringify(unroll(squareArray2)) === JSON.stringify(expected2), 'Test Case 2 Failed');

  let squareArray3 = [
      [1, 2],
      [3, 4]
  ];
  let expected3 = [1, 2, 4, 3];
  console.assert(JSON.stringify(unroll(squareArray3)) === JSON.stringify(expected3), 'Test Case 3 Failed');

  let squareArray4 = [
      [1]
  ];
  let expected4 = [1];
  console.assert(JSON.stringify(unroll(squareArray4)) === JSON.stringify(expected4), 'Test Case 4 Failed');

  let squareArray5 = [];
  let expected5 = [];
  console.assert(JSON.stringify(unroll(squareArray5)) === JSON.stringify(expected5), 'Test Case 5 Failed');

  let squareArray6 = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
  ];
  let expected6 = [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];
  console.assert(JSON.stringify(unroll(squareArray6)) === JSON.stringify(expected6), 'Test Case 6 Failed');

  console.log('All test cases passed!');
}

testUnroll();
