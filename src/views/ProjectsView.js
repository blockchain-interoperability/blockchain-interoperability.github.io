import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import AttackAmountLine from '../charts/AttackAmountLine.js'
import AttackAmountBubble from "charts/AttackAmountBubble.js";

import projectsData from '../data/sample.json'

import polkadotLogo from '../data/img/logos/polkadot.png'
import cosmosLogo from '../data/img/logos/cosmos.png'
import chainlinkLogo from '../data/img/logos/chainlink.png'
import loomLogo from '../data/img/logos/loom-network.png'
import hybrixLogo from '../data/img/logos/hybrix.png'

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
  UncontrolledTooltip,
  Collapse
} from "reactstrap";


const projectLogos = {
    'Polkadot': polkadotLogo,
    'Cosmos': cosmosLogo,
    'Chainlink': chainlinkLogo,
    'Loom Network': loomLogo,
    'Hybrix': hybrixLogo,
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

const ProjectsView = () => {
    const [state,setState] = useState({showing:-1})

    const toggleCard = (idx) => {
        setState({...state,
            showing:state.showing === idx ?
            -1 : idx
        })
    }

    return (
    <>
        <div className="content">
            {projectsData.map((data,i) => 
            
            <Card className="card-chart">
                <CardHeader onClick={() => toggleCard(i)} style={{cursor:'pointer'}}>
                    <CardTitle tag="h2" >
                        <Row>
                            <Col md='1'>
                                <img style={{height:'100px'}} src={projectLogos[data.projectName]} /> 
                            </Col>
                            <Col md='10' className="align-items-center jusitfy-content-center">
                                <h2>
                                    {data.projectName}
                                </h2>
                            </Col>
                        </Row>
                    </CardTitle>
                </CardHeader>
                <Collapse
                    isOpen={i === state.showing }
                >
                    <CardBody>
                        <Row>
                            <Col md='6'>
                                <b>Circulation Supply: </b>
                                {formatter.format(data.circulationSupply)}
                            </Col>
                            <Col md='6'>
                                <b>Total Supply: </b>
                                {formatter.format(data.totalSupply)}
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                Explorer link: <a href={data.explorerLink} target={'_blank'}>{data.explorerLink}</a>
                            </Col>
                        </Row>
                        {/* Hi! */}
                        {/* {JSON.parse(data)} */}
                    </CardBody>
                </Collapse>
            </Card>
            )}
        </div>
    </>)

}

export default ProjectsView;

