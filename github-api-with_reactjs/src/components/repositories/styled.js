import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 50%;
`

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 5px;
display: flex;
margin: 0px;
`
WrapperTabList.tabsRole = 'TabList';

export const WrapperTabPanel = styled(TabPanel)``

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;

`