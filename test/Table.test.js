import { expect } from 'chai';
import { getLegs, getTops } from '../src/Table';

describe('Table', () => {
  it('has four legs', () => {
    expect(getLegs()).to.equal(4);
  });
  it('has one top', () => {
    expect(getTops()).to.equal(1);
  })
});