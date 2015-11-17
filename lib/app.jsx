'use strict';

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
   getInitialState: function() {
    return {
      'value': this.props.initialValue
    };
   },

   changeState : function() {
     this.setState({value: this.state.value == "X" ? "O" : "X"});
   },

  'render': function onRender () {
    return (
      <button onClick={this.changeState} style={bStyle}>{this.state.value}</button>
    );
  },
});

var Row = React.createClass({
  /**
   * Render 3 Box elements
   * @return {ReactElement}
   */

   getInitialState: function() {
    return {
      'children': this.props.initialValue
    };
   },

   'render': function onRender() {
    var results = this.state.children;
    return (
      <div id="row">
          {results.map(function(result) {
           return <Box initialValue={result} />;
          })}
      </div>
    );
   },
});

var bStyle = {
  height: '100px',
  width: '100px'
};

React.render(<Row initialValue={['-','-','-']} />, document.body);
