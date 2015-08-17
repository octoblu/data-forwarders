jest.dontMock('../device-row.jsx');
var React = require('react/addons');
var DeviceRow = require('../device-row.jsx');
var TestUtils = React.addons.TestUtils;

describe('DeviceRow', function() {
  var sut = (<DeviceRow device={{}} />);
  var renderedItem;

  beforeEach(function(){
    var shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(sut);
    renderedItem = shallowRenderer.getRenderOutput();
  });

  it('should render', function() {
    expect(renderedItem.type).toEqual('tr');
  });

  describe('when the device is selected', function(){
    var checkbox;

    beforeEach(function(){
      console.log(renderedItem.props);
      renderedItem.props.isInSubscriptionList = true;
      checkbox = renderedItem.props.children[0].props.children[0];
    });

    it('should have isInSubscriptionList set to true', function(){
      expect(checkbox.props.checked).toEqual(true);
    })
  });
});
