function unroll(squareArray) {
    function unroll(squareArray) {
        let result = [];
        
        while (squareArray.length) {
            result = result.concat(squareArray.shift());
            
            squareArray.forEach(row => {
                if (row.length) {
                    result.push(row.pop());
                }
            });
            
            if (squareArray.length) {
                result = result.concat(squareArray.pop().reverse());
            }
            
            for (let i = squareArray.length - 1; i >= 0; i--) {
                if (squareArray[i].length) {
                    result.push(squareArray[i].shift());
                }
            }
        }
        
        return result;
    }
    
    let squareArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    console.log(unroll(squareArray));
    
}

module.exports = unroll;


