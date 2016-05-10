import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import MyDevices from './';

chai.use(chaiEnzyme());

describe('<MyDevices />', () => {
  let sut;

  beforeEach(() => {
    sut = shallow(<MyDevices />);
  });

  it('should exist', () => {
    expect(sut).to.be.present();
  });

});
