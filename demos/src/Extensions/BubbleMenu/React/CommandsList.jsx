import * as React from "react";

class CommandList extends React.Component {
  constructor(props) {
    super(props);
  }

  selectItem(index) {
    const { items, command } = this.props;
    const item = items[index];
    if (item) {
      command(item);
    }
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((item, index) => (
          <button key={index} onClick={() => this.selectItem(index)}>
            {item.title}
          </button>
        ))}
      </div>
    );
  }
}

export default CommandList;
