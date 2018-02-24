//application
var boardFunctions = require('./projectboard'),
    board = JSON.parse(process.argv[2] || '[]');

console.log('%s', boardFunctions.validateBoard(board) ?
                    boardFunctions.toString(boardFunctions.nextGeneration(board)) :
                    'Input must be a 2 dimensional array with a least 2 elements in each row');
