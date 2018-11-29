import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Table from '../src/Table';

describe('Table', () => {
  it('has four legs', () => {
    const table = shallow(<Table />);
    expect(table.find('.leg')).to.have.length(4);
    expect(4).to.equal(4);
  });
});