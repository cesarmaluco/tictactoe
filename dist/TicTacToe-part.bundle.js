define("5b88d795-0ad6-4003-8692-80ae0a598250", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(2);
	var sp_core_library_1 = __webpack_require__(3);
	var sp_webpart_base_1 = __webpack_require__(4);
	var TicTacToePart_1 = __webpack_require__(5);
	var TicTacToePartWebPart = (function (_super) {
	    __extends(TicTacToePartWebPart, _super);
	    function TicTacToePartWebPart() {
	        _super.apply(this, arguments);
	    }
	    TicTacToePartWebPart.prototype.render = function () {
	        var element = React.createElement(TicTacToePart_1.TicTacToePart, {
	            FirstPlayer: this.properties.FirstPlayer,
	            SecondPlayer: this.properties.SecondPlayer
	        });
	        ReactDom.render(element, this.domElement);
	    };
	    Object.defineProperty(TicTacToePartWebPart.prototype, "dataVersion", {
	        get: function () {
	            return sp_core_library_1.Version.parse('1.0');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TicTacToePartWebPart.prototype.getPropertyPaneConfiguration = function () {
	        return {
	            pages: [
	                {
	                    header: {
	                        description: "Tic Tac Toe"
	                    },
	                    groups: [
	                        {
	                            groupName: "Tic Tac Toe",
	                            groupFields: [
	                                sp_webpart_base_1.PropertyPaneTextField('FirstPlayer', {
	                                    label: "First Player"
	                                }), sp_webpart_base_1.PropertyPaneTextField('SecondPlayer', {
	                                    label: "Second Player"
	                                })
	                            ]
	                        }
	                    ]
	                }
	            ]
	        };
	    };
	    return TicTacToePartWebPart;
	}(sp_webpart_base_1.BaseClientSideWebPart));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TicTacToePartWebPart;
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TicTacToePart = (function (_super) {
	    __extends(TicTacToePart, _super);
	    function TicTacToePart(props, state) {
	        _super.call(this, props);
	        this._players = [];
	        this._game = [];
	        this._currentRow = -1;
	        this._currentCol = -1;
	        this._currentPlayer = -1;
	        this.newGame();
	        this.state = {
	            status: this.playersNotConfigured(this.props) ? 'Please configure Players' : 'Ready',
	            players: this.fillPlayers(props),
	            selectedPlayer: this._players[0]
	        };
	    }
	    /**
	     * newGame: Starts an new game
	     */
	    TicTacToePart.prototype.newGame = function () {
	        this._game = [];
	        var _col0 = [{ col: 0, Player: null }, { col: 1, Player: null }, { col: 2, Player: null }];
	        var _col1 = [{ col: 0, Player: null }, { col: 1, Player: null }, { col: 2, Player: null }];
	        var _col2 = [{ col: 0, Player: null }, { col: 1, Player: null }, { col: 2, Player: null }];
	        this._game.push({ Cols: _col0 });
	        this._game.push({ Cols: _col1 });
	        this._game.push({ Cols: _col2 });
	    };
	    TicTacToePart.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState({
	            status: this.playersNotConfigured(nextProps) ? 'Please configure Players ' : 'Ready',
	            players: [],
	            selectedPlayer: this._players[0]
	        });
	    };
	    /**
	     * playersNotConfigured: Checks to sse if users are properly set up
	     */
	    TicTacToePart.prototype.playersNotConfigured = function (props) {
	        return props.FirstPlayer === undefined ||
	            props.FirstPlayer === null ||
	            props.FirstPlayer.length === 0 || props.SecondPlayer === undefined ||
	            props.SecondPlayer === null ||
	            props.FirstPlayer.length === 0;
	    };
	    /**
	     * getCurrentPlayer: look for the specific user symbol to paint it
	     * row: line of game
	     * col: column of game
	     */
	    TicTacToePart.prototype.getCurrentPlayer = function (row, col) {
	        if (this.state.status.indexOf("Playing") > -1)
	            if (this._game[row].Cols[col].Player)
	                return this._game[row].Cols[col].Player.Symbol;
	            else
	                return "ms-Icon ms-Icon--LightBulb";
	        else
	            return "ms-Icon ms-Icon--LightBulb";
	    };
	    /**
	     * Check the winner and shows it
	     */
	    TicTacToePart.prototype.checkWinner = function () {
	        var _winner = null;
	        for (var countGame = 0; countGame <= this._game.length - 1; countGame++) {
	            if (this.checkGame(countGame)) {
	                _winner = this._players[this._currentPlayer];
	                this.setState({
	                    status: "Winner is " + this._players[this._currentPlayer].Name,
	                    players: this.state.players,
	                    selectedPlayer: this._players[this._currentPlayer]
	                });
	                this.newGame();
	            }
	        }
	    };
	    /**
	     * checkGame: check every possibility for an winner
	     */
	    TicTacToePart.prototype.checkGame = function (game) {
	        if (this.checkLineGame(game))
	            return true;
	        else if (this.checkColGame(game))
	            return true;
	        else if (this.checkXGame())
	            return true;
	    };
	    /**
	     * checkXGame: checks if crossed game had an winner
	     */
	    TicTacToePart.prototype.checkXGame = function () {
	        if (this._game[0].Cols[0].Player &&
	            this._game[1].Cols[1].Player &&
	            this._game[2].Cols[2].Player) {
	            if (this._game[0].Cols[0].Player == this._players[this._currentPlayer] &&
	                this._game[1].Cols[1].Player == this._players[this._currentPlayer] &&
	                this._game[2].Cols[2].Player == this._players[this._currentPlayer])
	                return true;
	        }
	        if (this._game[0].Cols[2].Player &&
	            this._game[1].Cols[1].Player &&
	            this._game[2].Cols[0].Player) {
	            if (this._game[0].Cols[2].Player == this._players[this._currentPlayer] &&
	                this._game[1].Cols[1].Player == this._players[this._currentPlayer] &&
	                this._game[2].Cols[0].Player == this._players[this._currentPlayer])
	                return true;
	        }
	    };
	    /**
	     * checkLineGame: checks in line games for the Winner
	     */
	    TicTacToePart.prototype.checkLineGame = function (game) {
	        var result = 0;
	        for (var count = 0; count <= this._game[game].Cols.length - 1; count++) {
	            if (this._game[game].Cols[count].Player) {
	                if (this._game[game].Cols[count].Player == this._players[this._currentPlayer])
	                    result++;
	            }
	        }
	        return (result == 3 ? true : false);
	    };
	    /**
	     * checkColGame : checks columns games to see if current user is the Winner
	     * game: index for the game
	     */
	    TicTacToePart.prototype.checkColGame = function (game) {
	        var result = 0;
	        for (var count = 0; count <= this._game[game].Cols.length - 1; count++) {
	            if (this._game[count].Cols[game].Player) {
	                if (this._game[count].Cols[game].Player == this._players[this._currentPlayer])
	                    result++;
	            }
	        }
	        return (result == 3 ? true : false);
	    };
	    /**
	     * Play: Used for play an game
	     * row : line for the game
	     * col : column for the game
	     */
	    TicTacToePart.prototype.play = function (row, col) {
	        this._currentRow = row;
	        this._currentCol = col;
	        this._currentPlayer = this._currentPlayer == 0 ? 1 : 0;
	        if (!this._game[row].Cols[col].Player)
	            this._game[row].Cols[col].Player = this._players[this._currentPlayer];
	        this.setState({
	            status: "Playing",
	            players: this.state.players,
	            selectedPlayer: this._players[this._currentPlayer]
	        });
	        this.checkWinner();
	    };
	    /**
	     * Initializes the player collection
	     */
	    TicTacToePart.prototype.fillPlayers = function (nextProps) {
	        this._players.push({ Name: nextProps.FirstPlayer, Symbol: 'ms-Icon ms-Icon--LocationCircle', Games: null });
	        this._players.push({ Name: nextProps.SecondPlayer, Symbol: 'ms-Icon ms-Icon--Cancel', Games: null });
	        return this._players;
	    };
	    TicTacToePart.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", null, 
	            this.state.status, 
	            React.createElement("div", {className: "ms-Grid", style: { display: (this.playersNotConfigured(this.props) ? "none" : "block") }}, 
	                React.createElement("div", {className: "ms-Grid-row"}, 
	                    React.createElement("div", {onClick: function () { return _this.play(0, 0); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { borderRightStyle: "solid", borderBottomStyle: "solid", textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(0, 0)}, " ")
	                    ), 
	                    React.createElement("div", {onClick: function () { return _this.play(0, 1); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { borderRightStyle: "solid", borderBottomStyle: "solid", textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(0, 1)}, " ")
	                    ), 
	                    React.createElement("div", {onClick: function () { return _this.play(0, 2); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { borderBottomStyle: "solid", textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(0, 2)}, " ")
	                    )), 
	                React.createElement("div", {className: "ms-Grid-row"}, 
	                    React.createElement("div", {onClick: function () { return _this.play(1, 0); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { borderRightStyle: "solid", borderBottomStyle: "solid", textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(1, 0)}, " ")
	                    ), 
	                    React.createElement("div", {onClick: function () { return _this.play(1, 1); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { borderRightStyle: "solid", borderBottomStyle: "solid", textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(1, 1)}, " ")
	                    ), 
	                    React.createElement("div", {onClick: function () { return _this.play(1, 2); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { borderBottomStyle: "solid", textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(1, 2)}, " ")
	                    )), 
	                React.createElement("div", {className: "ms-Grid-row"}, 
	                    React.createElement("div", {onClick: function () { return _this.play(2, 0); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { borderRightStyle: "solid", textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(2, 0)}, " ")
	                    ), 
	                    React.createElement("div", {onClick: function () { return _this.play(2, 1); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { borderRightStyle: "solid", textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(2, 1)}, " ")
	                    ), 
	                    React.createElement("div", {onClick: function () { return _this.play(2, 2); }, className: "ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4", style: { textAlign: "center", cursor: "pointer" }}, 
	                        React.createElement("i", {className: this.getCurrentPlayer(2, 2)}, " ")
	                    )))));
	    };
	    return TicTacToePart;
	}(React.Component));
	exports.TicTacToePart = TicTacToePart;
	


/***/ }
/******/ ])});;
//# sourceMappingURL=TicTacToe-part.bundle.js.map