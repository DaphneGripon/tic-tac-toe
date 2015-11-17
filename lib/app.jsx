'use strict';

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
   getInitialState: function() {
    return {value: this.props.initialValue};
   },

  'render': function onRender () {
    return (
      <button style={bStyle}>{this.state.value}</button>
    );
  }
});

var bStyle = {
  height: '100px',
  width: '100px'
};

React.render(<Box initialValue="X" />, document.body);
