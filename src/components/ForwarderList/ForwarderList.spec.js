import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import ForwarderList from './ForwarderList';

chai.use(chaiEnzyme());

describe('<ForwarderList />', () => {
  let sut;

  beforeEach(() => {
    sut = shallow(<ForwarderList />);
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
      forwarders = ['Olu', 'Koshin', 'MiQL'];
      sut = shallow(<ForwarderList forwarders={forwarders} />);
    });

    it('should render item(s)', () => {
      expect(sut).to.not.be.blank();
      expect(sut.children().length).to.equal(forwarders.length);

      const forwarderNames = sut.find('li').map(node => node.text());
      expect(forwarderNames).to.eql(forwarders);
    });
  });
});
