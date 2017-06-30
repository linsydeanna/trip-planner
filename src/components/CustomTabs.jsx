import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../styles/components/_Tabs.scss';

const renderTabs = (children) => {
  return React.Children.map(children, child => (
    <Tab className="tab-list-item" selectedClassName="tab-list-item active">
      {child.props.title || 'Unknown'}
    </Tab>
  ));
};

const renderTabPanels = (children) => {
  return React.Children.map(children, child => (
    <TabPanel className="tab-panel" selectedClassName="tab-panel active">
      {child}
    </TabPanel>
  ));
};

const CustomTabs = ({ onSelect, children, ...rest }) => {
  return (
    <Tabs
      className="tabs"
      onSelect={(index, lastIndex, e) => onSelect(index, lastIndex, e)}
    >
      <TabList className="tab-list">
        { renderTabs(children) }
      </TabList>
      { renderTabPanels(children) }
    </Tabs>
  );
};

export default CustomTabs;
