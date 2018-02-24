// Grunt tests for game of life functions
var should = require('should');
var boardFunctions = require('../app/board-functions');

describe('board functions', function () {
  describe('validate', function () {
    it('rejects a board with unequally sized rows', function () {
      boardFunctions.validateBoard([[0,1],[0,1,1]]).should.equal(false);
    });

    it('accepts a board with equally sized rows', function () {
      boardFunctions.validateBoard([[0,1],[0,1]]).should.equal(true);
    });

    it('rejects a board smaller than 2x2', function () {
      boardFunctions.validateBoard([[0]]).should.equal(false);
    });

    it('accepts a 2x2 board', function () {
      boardFunctions.validateBoard([[0,1],[0,1]]).should.equal(true);
    });

    it('accepts a larger than 2x2 board', function () {
      boardFunctions.validateBoard([[0,1,1],[0,1,1],[0,0,0]]).should.equal(true);
    });
  });

  describe('evolution', function () {
    var board = [[0,1,0,0,0],[1,0,0,1,1],[1,1,0,0,1],[0,1,0,0,0],[1,0,0,0,1]];

    it('counts the number a live neighbors for a cell', function () {
      boardFunctions.countLiveNeighbors(board, 2, 3).should.equal(3);
    });

    it('counts the number of live neighbors for the first cell on the board', function () {
      boardFunctions.countLiveNeighbors(board, 0, 0).should.equal(2);
    });

    it('counts the number of live neighbors for the last cell on the board', function () {
      boardFunctions.countLiveNeighbors(board, 4, 4).should.equal(0);
    });

    it('kills live cells with fewer that 2 live neighbors', function () {
      boardFunctions.cellIsAliveInNextGeneration(board, 0, 1).should.equal(false);
    });

    it('kills live cells with more than 3 live neighbors', function () {
      boardFunctions.cellIsAliveInNextGeneration(board, 1, 1).should.equal(false);
    });

    it('allows live cells with 2 or 3 neighbors to live', function () {
      boardFunctions.cellIsAliveInNextGeneration(board, 2, 1).should.equal(true);
    });

    it('allows dead cells with 3 live neighbors to reproduce', function () {
      boardFunctions.cellIsAliveInNextGeneration(board, 2, 3).should.equal(true);
    });

    it('does not allow dead cells with other than 3 live neighbors to reproduce', function () {
      boardFunctions.cellIsAliveInNextGeneration(board, 4, 1).should.equal(false);
    });

    it('produces the next generation', function () {
      boardFunctions.nextGeneration(board).should.eql([[0,0,0,0,0],[1,0,1,1,1],[1,1,1,1,1],[0,1,0,0,0],[0,0,0,0,0]]);
    });
  });
});
