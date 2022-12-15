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
import hyperledger_cactusLogo from '../data/img/logos/hyperledger_cactus.png'
import hyperledger_fireflyLogo from '../data/img/logos/hyperledger_firefly.png'
import overledgerLogo from '../data/img/logos/Overledger.png'
import polynetworkLogo from '../data/img/logos/Polynetwork.png'
import venn_diagram from '../data/img/venn-diagram.png'
import how_polkadot_works from '../data/img/how/polkadot_how.png'
import how_polkadot_works2 from '../data/img/how/polkadot_how2.png'
import how_cosmos_works from '../data/img/how/cosmos_how.png'
import how_cosmos_works2 from '../data/img/how/cosmos_how2.png'
import how_chainlink_works from '../data/img/how/chainlink_how.png'
import how_chainlink_works2 from '../data/img/how/chainlink_how2.png'
import how_hyperledger_firefly_works from '../data/img/how/hyperledger_firefly_how.png'
import how_overledger_works from '../data/img/how/overledger_how.png'
import how_overledger_works2 from '../data/img/how/overledger_how2.png'
import summary_png from '../data/img/summary.png'

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
    'Hyperledger Cactus': hyperledger_cactusLogo,
    'Hyperledger Firefly': hyperledger_fireflyLogo,
    'Overledger': overledgerLogo,
    'Poly Network': polynetworkLogo,
}

const projecthow = {
    'Polkadot1': how_polkadot_works,
    'Polkadot2': how_polkadot_works2,
    'Cosmos1': how_cosmos_works,
    'Cosmos2': how_cosmos_works2,
    'Chainlink1': how_chainlink_works,
    'Chainlink2': how_chainlink_works2,
    'Hyperledger Firefly1': how_hyperledger_firefly_works,
    'Overledger1': how_overledger_works,
    'Overledger2': how_overledger_works2,
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
                            <Col md='10' className="align-items-center jusitfy-content-center">
                                <h2><font size="3" color="#000000">
                                    Keywords: {data.keywords}
                                </font></h2>
                            </Col>
                        </Row>
                    </CardTitle>
                </CardHeader>
                <Collapse
                    isOpen={i === state.showing }
                >
                    <CardBody>
                        <Row>
                            <Col md='12' className="align-items-center jusitfy-content-center">
                                <b><font size="5" color="808080">Brief Description</font></b>
                                <h2><font size="3" color="#000000">
                                    {data.extra.short_description}
                                </font></h2>
                            </Col>
                            <Col md='10' className="align-items-center jusitfy-content-center">
                                <h2><font size="5" color="#000000">
                                    How does {data.projectName} works:
                                    <center><img float="left" class="card-img-left" style={{height:'400px', width:'800px' }} src={projecthow[data.projectName+'1']}/></center>
                                    Explanations of above graph:
                                    <center><img float="left" class="card-img-left" style={{height:'400px', width:'600px' }} src={projecthow[data.projectName+'2']}/></center>
                                </font></h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                Explorer link: <a href={data.explorerLink} target={'_blank'}>{data.explorerLink}</a>
                            </Col>
                        </Row>
                    </CardBody>
                </Collapse>
            </Card>
            )}
            <div class="card">
                <center>
                    <div class="card-body">
                        <h5 class="card-title"><font size="5" color="#909090"><b>Venn Diagram for Nine Interoperability</b></font></h5>
                    </div>
                    <img float="left" class="card-img-left" style={{height:'490px', width:'560px' }} src={venn_diagram}/>
                </center>
            </div>

            <div class="card">
                <center>
                    <div class="card-body">
                        <h5 class="card-title"><font size="5" color="#909090"><b>Summary of Above Nine Interoperability</b></font></h5>
                    </div>
                    <img float="left" class="card-img-left" style={{height:'400px', width:'1260px' }} src={summary_png}/>
                </center>
            </div>
        </div>

        
    </>)

}

export default ProjectsView;

