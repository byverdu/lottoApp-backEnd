/*global before, it, describe*/
'use strict';

import { GlobalHelper } from '../app/helpers/globalHelper';
import chai from 'chai';

var expect     = chai.expect,
  globalHelper;

before(() => {
  globalHelper = new GlobalHelper();
});

describe('Helper and methods', () => {

  it('#Helper, has a compare2arrays method', () => {
    expect(globalHelper.compare2arrays).not.to.equal(undefined);
  });

  it('#Helper, has a saveScrappedDataToJson method', () => {
    expect(globalHelper.saveScrappedDataToJson).not.to.equal(undefined);
  });

  it('#Helper, has a customFindOneMongoose method', () => {
    expect(globalHelper.customFindOneMongoose).not.to.equal(undefined);
  });
});
