//(function(){
var gameBoard = {
    gameState: [null,null,null,null,null,null,null,null,null],
    playerOneTurn:true,
    init: function(){
        this.cacheDom();
        this.bindEvents();
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

    render: function(squareSelected,playerInput){
        gameBoard.cacheDom().boardSquares[squareSelected].textContent = playerInput;
    },

    addPlayerInput: function(){
        let XorO;
        let squareSelected = this.dataset.tablesquare;
        let squareSelectedValue = this.textContent;

        if(squareSelectedValue!=''){
            alert('This cell has already been selected!');
            return;
        }

        if(gameBoard.playerOneTurn){
            XorO = "X";
            gameBoard.playerOneTurn = false;
        } else if (gameBoard.playerOneTurn==false){
            XorO = "O";           
            gameBoard.playerOneTurn = true;
        }

        gameBoard.gameState[squareSelected] = XorO;
        let playerInput = XorO;

        gameBoard.render(squareSelected,playerInput);
    },

    getPlayerName: function(){
        console.log(this.value);
    },

    cleanGameBoard: function(){

    },

    checkCurrentState: function(currentPlayer){
        let square_00 = gameBoard.gameState[0];
        let square_01 = gameBoard.gameState[1];
        let square_02 = gameBoard.gameState[2];
        let square_03 = gameBoard.gameState[3];
        let square_04 = gameBoard.gameState[4];
        let square_05 = gameBoard.gameState[5];
        let square_06 = gameBoard.gameState[6];
        let square_07 = gameBoard.gameState[7];
        let square_08 = gameBoard.gameState[8];
        let square_09 = gameBoard.gameState[9];
        
        let winner_series_01 = square_00+square_01+square_02;
        let winner_series_02 = square_00+square_03+square_06;
        let winner_series_03 = square_06+square_07+square_08;
        let winner_series_04 = square_02+square_05+square_08;
        let winner_series_05 = square_01+square_04+square_07;
        let winner_series_06 = square_00+square_04+square_05;
        let winner_series_07 = square_02+square_04+square_06;
        
        currentPlayer = "XXX";

        switch(currentPlayer){
            case winner_series_01:
                console.log("Works");
                break;
            case winner_series_02:
                console.log("Works");
                break;
            case winner_series_03:
                console.log("Works");
                break;
            case winner_series_04:
                console.log("Works");
                break;
            case winner_series_05:
                console.log("Works");
                break;
            case winner_series_06:
                console.log("Works");
                break;
            case winner_series_07:
                console.log("Works");
                break;
        }

    },

    declareWinner: function() {

    }

}

gameBoard.init();

//})();

