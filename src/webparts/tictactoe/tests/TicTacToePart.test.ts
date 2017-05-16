/// <reference types="mocha" />

import { assert } from 'chai';
import {TicTacToePart,IReactCrudState} from '../components/TicTacToePart';

describe('TicTacToePart', () => {
  it('Gives an error because requires player configuration', () => {
    var crudState : IReactCrudState = null;
    var part : TicTacToePart = new TicTacToePart(null,crudState);
  });
});
