/// <reference types="mocha" />

import { assert } from 'chai';
import {TicTacToePart,IReactCrudState, IGame, ICols} from '../components/TicTacToePart';

describe('TicTacToePart', () => {
  beforeEach(() => {
  
  });

  it('Gives an error because requires player configuration', () => {
    var crudState : IReactCrudState = null;
    var props: any = {FirstPlayer : null};
    var part : TicTacToePart = new TicTacToePart(props,crudState);
    assert.notOk(props.FirstPlayer);
  });
});
