import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import AttackAmountLine from '../charts/AttackAmountLine.js'
import AttackAmountBubble from "charts/AttackAmountBubble.js";

import rawAttackData from '../data/attackData.json'

import wordcloudHashtag from '../data/img/hashtags.png'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


const MainView = () => {
    return (
    <>
        <div className="content">
            <Card className="card-chart">
            <CardHeader>
                <CardTitle tag="h2" style={{fontWeight:'bold'}}>
                    What is Blockchain Interoperability?
                </CardTitle>
            </CardHeader>
            <CardBody>
                <p>

                    Blockchain Interoperability is the ability for a blockchain to interact with other systems outside of its environment. 
                    This can take many forms, ranging from Ethereum Sidechains to Blockchain Gateways.
                </p>
                <p>
                    This dashboard collects information about ongoing projects that aim to achieve interoperability, as well as other related stastics.
                </p>
            </CardBody>
            </Card>
            <Card>
                <img src={wordcloudHashtag}/>
            </Card>
        </div>
    </>)

}

export default MainView;

