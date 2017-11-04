import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
    render(){
        return(
            <button className='square' onClick={() => alert('click')}>
            {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component{
    renderSquare(i){
        return <Square value={i}/>;
    }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  