//(function(){
var gameBoard = {
    gameState: [null,null,null,null,null,null,null,null,null],
    init: function(){
        this.cacheDom();
        this.bindEvents();
        this.render();
    },
    cacheDom: function(){

        let boardSquares = document.querySelectorAll('[data-tablesquare]')
        let playerOneInput = document.querySelector('.player-one');
        let playerTwoInput = document.querySelector('.player-two');

        return {boardSquares, playerOneInput, playerTwoInput}
    },

    bindEvents: function(){
        this.cacheDom().boardSquares.forEach(element => {
            element.addEventListener('click',this.addPlayerInput);
        });

        this.cacheDom().playerOneInput.addEventListener('keyup',this.getPlayerName);

    },

    render: function(){
    
    },

    addPlayerInput: function(){
        let firstItemAdded;
        let squareSelected = this.dataset.tablesquare;

        if(firstItemAdded==null){
            firstItemAdded = "X";
        } else if (firstItemAdded != null && firstItemAdded == "O"){
            firstItemAdded = "O";
        } else {
            firstItemAdded = "X";
        }


        gameBoard.gameState.splice(squareSelected,0,firstItemAdded);
        console.log(gameBoard.gameState);    
               
    },

    getPlayerName: function(){
        console.log(this.value);
    },

    cleanGameBoard: function(){

    }

}

gameBoard.init();

//})();

