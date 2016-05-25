import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { Link } from 'react-router';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { Landing } from './';

chai.use(chaiEnzyme());

describe('<Landing />', () => {
  let sut;

  beforeEach(() => {
    sut = shallow(<Landing />);
  });

  it('should exist', () => {
    expect(sut).to.be.present();
  });

});
