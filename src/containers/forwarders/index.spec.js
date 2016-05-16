import _ from 'lodash';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { Link } from 'react-router';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { ForwardersIndex } from './';
import ForwarderList from '../../components/ForwarderList';
import fakeFowarders from '../../../test/fake-forwarders.json';

chai.use(chaiEnzyme());

describe('<ForwardersIndex />', () => {
  let sut;

  beforeEach(() => {
    sut = shallow(<ForwardersIndex />);
  });

  it('should exist', () => {
    expect(sut).to.be.present();
  });

  describe('-> componentDidMount', () => {
    const dispatch = sinon.spy();

    it('should dispatch fetch forwarders action', () => {
      sut = mount(<ForwardersIndex dispatch={dispatch} />);
      sut.mount();

      expect(dispatch.called).to.be.true;
    })
  });

  describe('-> Render', () => {
    it('should render loading indicator when fetching', () => {
      sut = shallow(<ForwardersIndex fetching={true} />)
      expect(sut.equals(<div>Loading...</div>)).to.be.true
    });

    it('should render an error message when an error is returned', () => {
      sut = shallow(<ForwardersIndex error={new Error('Unfornate')} />);
      expect(sut.equals(<div>Error: Unfornate</div>)).to.be.true;
    });

    it('should render an empty state message if there are no items', () => {
      sut = shallow(<ForwardersIndex items={[]} />);
      expect(sut.equals(<div>Empty State</div>)).to.be.true;
    });

    it('should render Forwarders when not fetching, has no error and items exist', () => {
      sut = shallow(
        <ForwardersIndex error={null} fetching={false} items={fakeFowarders} />
      )

      expect(sut.equals(<ForwarderList forwarders={fakeFowarders} />)).to.be.true
    });
  })

});
