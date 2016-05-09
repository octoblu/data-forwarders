import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { Link } from 'react-router';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import ForwarderListItem from './ForwarderListItem';

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

  describe('when given a forwarder', () => {
    beforeEach(() => {
      sut = shallow(<ForwarderListItem forwarder={fakeForwarder} />);
    });

    it('should render the forwarder', () => {
      const { name, subscriptions, type } = fakeForwarder;

      expect(sut.find('header').first().text()).to.equal(name);
      expect(sut.find('.ForwarderListItem-type').first().text())
        .to.equal(`Type: ${type}`);
      expect(sut.find('.ForwarderListItem-thingCount').first().text())
        .to.equal(`Listens to ${subscriptions.count} Things`);
    });

    it('should render the detail link', () => {
      expect(sut.contains(<Link to={`/forwarders/${fakeForwarder.uuid}`}>Detail</Link>)).to.be.true;
    });
  });
});
