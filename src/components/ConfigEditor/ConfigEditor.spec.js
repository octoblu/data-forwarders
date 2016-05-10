import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import ConfigEditor from './';

chai.use(chaiEnzyme());

describe('<ConfigEditor />', () => {
  let sut;

  beforeEach(() => {
    sut = shallow(<ConfigEditor />);
  });

  it('should exist', () => {
    expect(sut).to.be.present();
  });

});
