import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../styles/components/ui/_Tabs.scss';

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

const CustomTabs = ({ children, ...rest }) => {
  return (
    <Tabs className="tabs">
      <TabList className="tab-list">
        { renderTabs(children) }
      </TabList>
      { renderTabPanels(children) }
    </Tabs>
  );
};

export default CustomTabs;
