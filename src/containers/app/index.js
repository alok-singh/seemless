import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Claims from '../claims';
import Outages from '../outages';
import History from '../history';
import Messages from '../messages';
import Notifications from '../notifications';

import LeftPanel from '../../components/leftPanel';

import { deepCopy } from '../../utils/deepCopyObject';

import { config } from "../../data/config";
import "./styles.css";

const App = () => {
  const [leftPanelState, setLeftPanelState] = useState(config.leftPanel);
  
  const onClickLink = (clickedItem) => {
    const newLeftPanelState = deepCopy(leftPanelState);
    newLeftPanelState.linkList = leftPanelState.linkList.map(item => {
      item.isActive = false;
      if(item.link === clickedItem.link) {
        item.isActive = true;
      }
      return item;
    });
    setLeftPanelState(newLeftPanelState);
  }
  return <BrowserRouter>
    <LeftPanel linkList={leftPanelState.linkList} logo={config.leftPanel.logo} onClickLink={onClickLink} />
    <Switch>
      <Route key="path-1" path="/claims">
        <Claims config={config.claims} />
      </Route>
      <Route key="path-2" path="/outages" exact={true} component={Outages} />
      <Route key="path-3" path="/history" exact={true} component={History} />
      <Route key="path-4" path="/messages" exact={true} component={Messages} />
      <Route key="path-5" path="/notifications" exact={true} component={Notifications} />
      <Redirect key="path-6" from="*" to="/claims" />
    </Switch>
  </BrowserRouter>
}

export default App;
