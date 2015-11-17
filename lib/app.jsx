'use strict';

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */

  'render': function onRender () {
    return (
      <button id={this.props.id} style={bStyle}>{this.props.value}</button>
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

   boxClick: function(rank) {
    var children = this.state.children;
    children[rank] = children[rank] === 'X' ? 'O' : 'X';
    this.setState({
      'children': children
    })
   },

   'render': function onRender() {
    var results = this.state.children;
    return (
      <div id="row">
          {results.map(function(result, i) {
           return <span onClick={this.boxClick.bind(this, i)}>
                    <Box id={i} value={this.state.children[i]} />
                  </span>;
          }, this)}
      </div>
    );
   },
});

var bStyle = {
  height: '100px',
  width: '100px'
};

React.render(<Row initialValue={['-','-','-']} />, document.body);
