import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { Link } from 'react-router';
import sinon from 'sinon';
import { shallow, mount} from 'enzyme';

import ForwarderListItem from './index.js';

import fakeForwarder from '../../../test/fake-forwarder.json';

chai.use(chaiEnzyme());

describe('<ForwarderListItem />', () => {
  let sut;

  beforeEach(() => {
    sut = shallow(<ForwarderListItem />);
  });

  it('should exist', () => {
    expect(sut).to.be.present();
  });

  it('should be blank when forwarder does not exist', () => {
    expect(sut).to.be.blank();
  });
});
