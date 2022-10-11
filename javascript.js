//(function(){
var gameBoard = {
    gameState: [null,null,null,null,null,null,null,null,null],
    playerOneTurn:true,
    gameStartedStatus:false,
    gamesPlayed:0,

    init: function(){
        this.cacheDom();
        this.bindEvents();
    },

    cacheDom: function(){
        let boardSquares = document.querySelectorAll('[data-tablesquare]')
        let playerOneInput = document.querySelector('.player-one');
        let playerTwoInput = document.querySelector('.player-two');
        let startGameBtn = document.querySelector('.btn-start-game');
        let battleResultBanner = document.querySelector('.battle-result');
        let heroImages = document.querySelectorAll('.hero');
        let heroPlayerOne = document.querySelector('.player-one-hero-spot');
        let heroPlayerTwo = document.querySelector('.player-two-hero-spot');

        return {boardSquares, playerOneInput, playerTwoInput, startGameBtn, battleResultBanner, heroImages, heroPlayerOne, heroPlayerTwo}
    },

    bindEvents: function(){
        this.cacheDom().boardSquares.forEach(element => {
            element.addEventListener('click',this.addPlayerInput);
        });

        this.cacheDom().heroImages.forEach(image => {
            image.addEventListener('click',this.selectHero);
        });

        this.cacheDom().startGameBtn.addEventListener('click',this.startGame);
    
    },

    render: function(squareSelected,playerInput){
        gameBoard.cacheDom().boardSquares[squareSelected].textContent = playerInput;
    },

    addPlayerInput: function(){
        
        let XorO;
        let squareSelected = this.dataset.tablesquare;
        let squareSelectedValue = this.textContent;

        if(gameBoard.gameStartedStatus!=true){
            return;
        }

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
        console.log("logging player one turn");
        console.log(gameBoard.playerOneTurn);

        let playerInput = XorO;
        gameBoard.gameState[squareSelected] = XorO;
        gameBoard.render(squareSelected,playerInput);
        gameBoard.checkCurrentState(XorO);
    },

    cleanGameBoard: function(){
        gameBoard.cacheDom().battleResultBanner.textContent = "";
        gameBoard.playerOneTurn = true;
        gameBoard.gameState = [null,null,null,null,null,null,null,null,null];
        this.cacheDom().boardSquares.forEach(element => {
            element.textContent = '';
        });
    
    },

    startGame: function(){

        if(gameBoard.gameStartedStatus){
            gameBoard.cleanGameBoard();
        }

        (function (){
            let playerOneName = gameBoard.cacheDom().playerOneInput.value;
            let playerTwoName = gameBoard.cacheDom().playerTwoInput.value;
    
            if(playerOneName == '' || playerTwoName==''){
                alert("Both player need to have a name!");
                return;   
            }
            
            gameBoard.gameStartedStatus = true;

        })();

    },

    checkCurrentState: function(XorO){
        let square_00 = gameBoard.gameState[0];
        let square_01 = gameBoard.gameState[1];
        let square_02 = gameBoard.gameState[2];
        let square_03 = gameBoard.gameState[3];
        let square_04 = gameBoard.gameState[4];
        let square_05 = gameBoard.gameState[5];
        let square_06 = gameBoard.gameState[6];
        let square_07 = gameBoard.gameState[7];
        let square_08 = gameBoard.gameState[8];
        
        let winner_series_01 = square_00+square_01+square_02;
        let winner_series_02 = square_00+square_03+square_06;
        let winner_series_03 = square_06+square_07+square_08;
        let winner_series_04 = square_02+square_05+square_08;
        let winner_series_05 = square_01+square_04+square_07;
        let winner_series_06 = square_00+square_04+square_05;
        let winner_series_07 = square_02+square_04+square_06;
        let winner_series_08 = square_03+square_04+square_05;
        let winner_series_09 = square_00+square_04+square_08;
        
        currentPlayer = XorO+XorO+XorO;
        console.log(currentPlayer);

        switch(currentPlayer){
            case winner_series_01:
            case winner_series_02:
            case winner_series_03:
            case winner_series_04:
            case winner_series_05:
            case winner_series_06:
            case winner_series_07:
            case winner_series_08:
            case winner_series_09:
                gameBoard.declareWinner();
                break;
        }
    },

    declareWinner: function() {
        let winningPlayer;
        console.log(gameBoard.cacheDom().playerOneInput.value);

        if(!gameBoard.playerOneTurn){
            winningPlayer = gameBoard.cacheDom().playerOneInput.value;
        } else{
            winningPlayer = gameBoard.cacheDom().playerTwoInput.value;
        }

        gameBoard.cacheDom().battleResultBanner.textContent = "Congratulations to " + winningPlayer + "! You won!";
    },

    selectHero: function() {

        let heroSelected = this.getAttribute('src');

        let dbzHeroAssignment = this.classList.contains('dbz-hero');
        let otherHeroAssignment = this.classList.contains('non-dbz-hero');
        
        console.log(this.classList.contains('non-dbz-hero'));

        if(dbzHeroAssignment){
            gameBoard.cacheDom().heroPlayerOne.src = heroSelected;
        } else if (otherHeroAssignment){
            gameBoard.cacheDom().heroPlayerTwo.src = heroSelected;
        }
    }
}

gameBoard.init();

//})();

