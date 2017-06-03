import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.MIN = 0;
    this.state = {
      selectedIndex: parseInt(this.props.selectedIndex, 10) || 0,
      headerTitles: this.getHeaderTitles(this.props.children),
      panels: this.getPanels(this.props.children)
    }
    this.switchTab = this.switchTab.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  getHeaderTitles(children) {
    return React.Children.map(children, child => child.props.title || "Unknown");
  }

  getPanels(children) {
    return React.Children.map(children, child => child.props.children);
  }

  renderHeaders(headers) {
    return headers.map((header, index) => {
      return (
        <li
          className={"tab-header" + (index === this.state.selectedIndex ? " active" : "")}
          data-index={index}
          key={index}
          onClick={this.handleHeaderClick}
        >
          {header}
        </li>
      );
    });
  }

  renderPanels(panels) {
    return panels.map((panel, index) => {
      return index === this.state.selectedIndex ?
        (<li className="tab-panel" key={index}>{panel}</li>) :
        undefined;
    });
  }

  switchTab(index) {
    let newIndex = parseInt(index, 10) || this.MIN;
    this.setState({
      selectedIndex: newIndex < this.MIN ? this.MIN : newIndex
    });
  }

  handleHeaderClick(e) {
    this.switchTab(e.target.dataset.index);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="tabs">
        <ul className="tab-headers">
          { this.renderHeaders(this.state.headerTitles) }
        </ul>
        <ul className="tab-panels">
          { this.renderPanels(this.state.panels) }
        </ul>
      </div>
    );
  }
}

const Tab = (props) => {};

export default Tabs;
export { Tabs, Tab };
