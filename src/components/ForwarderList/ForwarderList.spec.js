import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import ForwarderList from './';
import ForwarderListItem from './ForwarderListItem';

import fakeForwarders from '../../../test/fake-forwarders.json';

chai.use(chaiEnzyme());

describe('<ForwarderList />', () => {
  let sut;

  beforeEach(() => {
    sut = shallow(<ForwarderList forwarder={[]}/>);
  });

  it('should exist', () => {
    expect(sut).to.be.present();
  });

  it('should be blank when forwarders does not exist', () => {
    expect(sut).to.be.blank();
  });

  it('should render nothing when forwarders is empty', () => {
    sut = shallow(<ForwarderList forwarders={[]} />)
    expect(sut).to.be.blank();
  });

  describe('when forwarders has items', () => {
    let forwarders;

    beforeEach(() => {
      sut = shallow(<ForwarderList forwarders={fakeForwarders} />);
    });

    it('should render given item(s)', () => {
      expect(sut).to.not.be.blank();
      expect(sut.children().length).to.equal(fakeForwarders.length);
    });

    it('should render a <ForwarderListItem /> for each forwarder', () => {
      expect(sut.contains([
        <ForwarderListItem forwarder={fakeForwarders[0]} />,
        <ForwarderListItem forwarder={fakeForwarders[1]} />,
        <ForwarderListItem forwarder={fakeForwarders[2]} />
      ])).to.be.true;
    });
  });
});
