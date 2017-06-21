import React from 'react';

import '../../styles/components/ui/_Tabs.scss';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.MIN = 0;
    this.state = {
      selectedIndex: this.props.selectedIndex || 0,
      headerTitles: this.getHeaderTitles(this.props.children),
      panels: this.getPanels(this.props.children)
    }
    this.switchTab = this.switchTab.bind(this);
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
          onClick={(e) => this.handleHeaderClick(e)}
        >
          {header}
        </li>
      );
    });
  }

  renderPanels(panels) {
    console.log('RENDER PANELS');
    return panels.map((panel, index) => {
      console.log('PANEL', panel);
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

  render() {
    console.log('RENDER TABS');
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
