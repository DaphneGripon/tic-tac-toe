'use strict';

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button>{this.props.value}</button>
    );
  }
});

React.render(<Box value="HALLO, CAN YOU HERE MEH" />, document.body);
