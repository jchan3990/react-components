// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onItemHover() {
    this.setState(
      {hover: !this.state.hover}
    )
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <div style={style} onMouseOver={this.onItemHover.bind(this)}>{this.props.item}</div>
    )
  }
}

var GroceryList = (props) => (
  <div>
      <h3> My Grocery List </h3>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
  </div>
);

ReactDOM.render(<GroceryList items={['Honey Bunches of Oats', 'Whole Milk']}/>, document.getElementById('app'));
