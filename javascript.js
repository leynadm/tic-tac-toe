(function (){
    var gameBoard = {
        gameState: ["X","0","X","0","X","0","X","0","X"],
        init: function(){
            this.cacheDom();
        },

        cacheDom: function(){
            var boardSquares = document.querySelectorAll('[data-tablesquare]')
            var playerOne = document.querySelector('.player-one');
            console.log(playerOne);
            var playerTwo = document.querySelector('.player-two');
        }

        

    }

    gameBoard.init();

})();


// Factory function to create the player instances
const player = (playerName) => {

}

