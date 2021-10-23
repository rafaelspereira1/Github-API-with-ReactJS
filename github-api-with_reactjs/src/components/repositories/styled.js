import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%;
margin-top: 16px;
`

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 5px;
display: flex;
margin: 0px;

`
WrapperTabList.tabsRole = "TabList";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    padding: 16px;
    border: 1px solid #ccc;
    box-shadow: 0 0 1em rbga(0, 0, 0, 0.5);
    

        

    &.is-selected {
        display:block;
    }
`
// WrapperTabList.tabsRole = "TabPanel";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    box-shadow: 0 0 1px black;
    z-index: 100;
    margin-left: 5px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        border-bottom: 1px solid white;
    }

`
WrapperTab.tabsRole = "Tab";
