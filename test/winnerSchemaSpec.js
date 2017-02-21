/* global before, after, describe, it */
/* eslint-disable*/

import chai from 'chai';
import mongoose from 'mongoose';
import WinnerSchema from '../app/model/winnerSchema';

const data = require( './sampleData' )();
const expect = chai.expect;
const storage = require( '../app/config/storage' );
let connection;
let Winner;
let winner;

before( done => {
  connection = mongoose.createConnection( 'mongodb://127.0.0.1/example-test' );
  Winner = connection.model( 'Winner', WinnerSchema );
  winner = new Winner();
  connection.once( 'open', () => done());
});

after( done => {
  connection.close(() => done());
  mongoose.models = {};
  mongoose.modelSchemas = {};
});

describe( 'WinnerSchema methods and properties', () => {
  it( 'WinnerSchema has a lottoID property', done => {
    expect( WinnerSchema.obj ).to.have.deep.property( 'lottoID');
    done();
  });
  it( 'WinnerSchema has a date property', done => {
    expect( WinnerSchema.obj ).to.have.deep.property( 'date');
    done();
  });
  it( 'WinnerSchema has a allWinners property', done => {
    expect( WinnerSchema.obj ).to.have.deep.property( 'allWinners');
    done();
  });
  it( 'WinnerSchema has a extraInfo property', done => {
    expect( WinnerSchema.obj ).to.have.deep.property( 'extraInfo');
    done();
  });
});
