import * as React from 'react';

export interface IReactCrudState {
  status: string;
  players: IPlayer[];
  selectedPlayer: IPlayer;
}

export interface IPlayer {
  Name?: string;
  Symbol: string;
  Games: number[];
}

export interface ICols {
  col : number;
  Player : IPlayer;
}
export interface IGame {
  Cols : ICols[];
}

export  class TicTacToePart extends React.Component<any, IReactCrudState> {
  
  private _players : IPlayer[] = [];
  private _game : IGame[] = [];
  private _currentRow: number = -1;
  private _currentCol: number = -1;
  private _currentPlayer : number = -1;
  constructor(props: any, state: IReactCrudState) {
    super(props);
   
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
  private newGame() : void {
    this._game = [];
    var _col0 : ICols[] = [{col:0,Player:null},{col:1,Player:null},{col:2,Player:null}];
    var _col1 : ICols[] = [{col:0,Player:null},{col:1,Player:null},{col:2,Player:null}];
    var _col2 : ICols[] = [{col:0,Player:null},{col:1,Player:null},{col:2,Player:null}];
    this._game.push({Cols:_col0});
    this._game.push({Cols:_col1});
    this._game.push({Cols:_col2});
  }

  public componentWillReceiveProps(nextProps: any): void {
  
    this.setState({
      status: this.playersNotConfigured(nextProps) ? 'Please configure Players ' : 'Ready',
      players: [],
      selectedPlayer: this._players[0]
    });
    
  }
  /**
   * playersNotConfigured: Checks to sse if users are properly set up
   */
  private playersNotConfigured(props: any): boolean {
    return props.FirstPlayer === undefined ||
      props.FirstPlayer === null ||
      props.FirstPlayer.length === 0 || props.SecondPlayer === undefined ||
      props.SecondPlayer === null ||
      props.FirstPlayer.length === 0;
  }
  
  /**
   * getCurrentPlayer: look for the specific user symbol to paint it
   * row: line of game
   * col: column of game
   */
  public getCurrentPlayer(row,col): string {
    if (this.state.status.indexOf("Playing") > -1)
      if (this._game[row].Cols[col].Player)
        return this._game[row].Cols[col].Player.Symbol ;
      else
        return "ms-Icon ms-Icon--LightBulb"
    else
      return "ms-Icon ms-Icon--LightBulb";
  }

  /**
   * Check the winner and shows it
   */
  public checkWinner(): void {
    var _winner : IPlayer = null;
    for (var countGame = 0; countGame <= this._game.length-1; countGame++) {      
        if (this.checkGame(countGame)){
          _winner = this._players[this._currentPlayer];
          this.setState({
            status: "Winner is " + this._players[this._currentPlayer].Name,
            players: this.state.players,
            selectedPlayer: this._players[this._currentPlayer]
          });
          this.newGame();
          
        }
    }
  }

  /**
   * checkGame: check every possibility for an winner
   */
  public checkGame(game) : boolean {
    
    if (this.checkLineGame(game))
      return true;
    else if (this.checkColGame(game))
      return true;
    else if (this.checkXGame())
      return true;
  }

  /**
   * checkXGame: checks if crossed game had an winner
   */
  private checkXGame() : boolean
  {
      if (this._game[0].Cols[0].Player && 
          this._game[1].Cols[1].Player && 
          this._game[2].Cols[2].Player){
          if (this._game[0].Cols[0].Player == this._players[this._currentPlayer] && 
            this._game[1].Cols[1].Player == this._players[this._currentPlayer] && 
            this._game[2].Cols[2].Player == this._players[this._currentPlayer])
            return true;
      }

       if (this._game[0].Cols[2].Player && 
          this._game[1].Cols[1].Player && 
          this._game[2].Cols[0].Player){
          if (this._game[0].Cols[2].Player == this._players[this._currentPlayer] && 
            this._game[1].Cols[1].Player == this._players[this._currentPlayer] && 
            this._game[2].Cols[0].Player == this._players[this._currentPlayer])
            return true;
      }
        
  }
  /**
   * checkLineGame: checks in line games for the Winner
   */
  private checkLineGame(game) : boolean {
    
    var result : number = 0;
    for (var count=0;count <= this._game[game].Cols.length-1;count++){
        if (this._game[game].Cols[count].Player){
          if (this._game[game].Cols[count].Player == this._players[this._currentPlayer])
            result++;
        }
    }
    return (result==3?true:false);
  }
  /**
   * checkColGame : checks columns games to see if current user is the Winner
   * game: index for the game
   */
  private checkColGame(game) : boolean {
    
    var result : number = 0;
    for (var count=0;count <= this._game[game].Cols.length-1;count++){
        if (this._game[count].Cols[game].Player){
          if (this._game[count].Cols[game].Player == this._players[this._currentPlayer])
            result++;
        }
    }
    return (result==3?true:false);
  }

  /**
   * Play: Used for play an game
   * row : line for the game
   * col : column for the game
   */
  public play(row,col): void {
    this._currentRow = row;
    this._currentCol = col;
    this._currentPlayer = this._currentPlayer == 0 ? 1:0;
    if (!this._game[row].Cols[col].Player )
      this._game[row].Cols[col].Player = this._players[this._currentPlayer];

    this.setState({
      status: "Playing",
      players: this.state.players,
      selectedPlayer: this._players[this._currentPlayer]
    });
    this.checkWinner();
  }

  /**
   * Initializes the player collection
   */
  private fillPlayers(nextProps): IPlayer[]{
   
    this._players.push({Name:nextProps.FirstPlayer,Symbol:'ms-Icon ms-Icon--LocationCircle',Games: null});
    this. _players.push({Name:nextProps.SecondPlayer,Symbol:'ms-Icon ms-Icon--Cancel',Games: null});
    return this._players;
  }  

  public render(): JSX.Element {
    

    return (
      <div > 
      {this.state.status}
      <div className="ms-Grid" style={{display:(this.playersNotConfigured(this.props)?"none":"block")}}>
          
          <div className="ms-Grid-row" > 
            <div onClick={() => this.play(0,0)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{borderRightStyle:"solid",borderBottomStyle:"solid",textAlign:"center",cursor:"pointer"}}>
                <i className={this.getCurrentPlayer(0,0)}>&nbsp;</i>
            </div>
             <div onClick={() => this.play(0,1)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{borderRightStyle:"solid",borderBottomStyle:"solid",textAlign:"center",cursor:"pointer"}}>
              <i className={this.getCurrentPlayer(0,1)}>&nbsp;</i>
            </div>
             <div onClick={() => this.play(0,2)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{borderBottomStyle:"solid",textAlign:"center",cursor:"pointer"}}>
             <i className={this.getCurrentPlayer(0,2)}>&nbsp;</i>
            </div>
          </div>
           <div className="ms-Grid-row"> 
            <div onClick={() => this.play(1,0)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{borderRightStyle:"solid",borderBottomStyle:"solid",textAlign:"center",cursor:"pointer"}}>
               <i className={this.getCurrentPlayer(1,0)}>&nbsp;</i>
            </div>
             <div onClick={() => this.play(1,1)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{borderRightStyle:"solid",borderBottomStyle:"solid",textAlign:"center",cursor:"pointer"}}>
              <i className={this.getCurrentPlayer(1,1)}>&nbsp;</i>
            </div>
             <div onClick={() => this.play(1,2)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{borderBottomStyle:"solid",textAlign:"center",cursor:"pointer"}}>
              <i className={this.getCurrentPlayer(1,2)}>&nbsp;</i>
            </div>
          </div>
           <div className="ms-Grid-row"> 
           <div onClick={() => this.play(2,0)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{borderRightStyle:"solid",textAlign:"center",cursor:"pointer"}}>
                <i className={this.getCurrentPlayer(2,0)}>&nbsp;</i>
            </div>
             <div onClick={() => this.play(2,1)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{borderRightStyle:"solid",textAlign:"center",cursor:"pointer"}}>
              <i className={this.getCurrentPlayer(2,1)}>&nbsp;</i>
            </div>
             <div onClick={() => this.play(2,2)} className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4" style={{textAlign:"center",cursor:"pointer"}} >
              <i className={this.getCurrentPlayer(2,2)}>&nbsp;</i>
            </div>
          </div>
      </div>
      </div>
      
    );
  }
}
