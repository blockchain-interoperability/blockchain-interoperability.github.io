import React, { useState } from "react";
// nodejs library that concatenates classes
// react plugin used to create charts

import SearchableTable from './SearchableTable'
import projectsData from '../data/sample.json'

// importing the picture of logos or explanation of how different blockchain interoperability solutions work
import polkadotLogo from '../data/img/projectLogos/polkadot.png'
import cosmosLogo from '../data/img/projectLogos/cosmos.png'
import chainlinkLogo from '../data/img/projectLogos/chainlink.png'
import loomLogo from '../data/img/projectLogos/loom-network.png'
import hybrixLogo from '../data/img/projectLogos/hybrix.png'
import hyperledger_cactusLogo from '../data/img/projectLogos/hyperledger_cactus.png'
import hyperledger_fireflyLogo from '../data/img/projectLogos/hyperledger_firefly.png'
import overledgerLogo from '../data/img/projectLogos/Overledger.png'
import polynetworkLogo from '../data/img/projectLogos/Polynetwork.png'
import venn_diagram from '../data/img/venn-diagram.png'
import how_polkadot_works from '../data/img/how/polkadot_how.png'
import how_polkadot_works2 from '../data/img/how/polkadot_how2.png'
import how_cosmos_works from '../data/img/how/cosmos_how.png'
import how_cosmos_works2 from '../data/img/how/cosmos_how2.png'
import how_chainlink_works from '../data/img/how/chainlink_how.png'
import how_chainlink_works2 from '../data/img/how/chainlink_how2.png'
import how_loom_network_works from '../data/img/how/loom_network_how.png'
import how_loom_network_works2 from '../data/img/how/loom_network_how2.png'
import how_hybrix_works from '../data/img/how/hybrix_how.png'
import how_hybrix_works2 from '../data/img/how/hybrix_how2.jpg'
import how_hyperledger_firefly_works from '../data/img/how/hyperledger_firefly_how.png'
import how_hyperledger_firefly_works2 from '../data/img/how/hyperledger_firefly_how2.png'
import how_hyperledger_cactus_works from '../data/img/how/hyperledger_cactus_how.png'
import how_hyperledger_cactus_works2 from '../data/img/how/hyperledger_cactus_how2.png'
import how_poly_network_works from '../data/img/how/Polynetwork_how.png'
import how_poly_network_works2 from '../data/img/how/Polynetwork_how2.png'
import how_overledger_works from '../data/img/how/overledger_how.png'
import how_overledger_works2 from '../data/img/how/overledger_how2.png'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Collapse
} from "reactstrap";

// const variable containing all the logos for different blockchain interoperability solutions
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

// const variable containing all the picture or graphing of how different blockchain interoperability solutions work
// most of the explanation and graph are designed through smartdraw online network diagram tool
const projecthow = {
    'Polkadot1': how_polkadot_works,
    'Polkadot2': how_polkadot_works2,
    'Cosmos1': how_cosmos_works,
    'Cosmos2': how_cosmos_works2,
    'Chainlink1': how_chainlink_works,
    'Chainlink2': how_chainlink_works2,
    'Loom Network1': how_loom_network_works,
    'Loom Network2': how_loom_network_works2,
    'Hybrix1': how_hybrix_works,
    'Hybrix2': how_hybrix_works2,
    'Hyperledger Cactus1': how_hyperledger_cactus_works,
    'Hyperledger Cactus2': how_hyperledger_cactus_works2,
    'Hyperledger Firefly1': how_hyperledger_firefly_works,
    'Hyperledger Firefly2': how_hyperledger_firefly_works2,
    'Poly Network1': how_poly_network_works,
    'Poly Network2': how_poly_network_works2,
    'Overledger1': how_overledger_works,
    'Overledger2': how_overledger_works2,
}

// total function of project views in the third webpage
const ProjectsView = () => {
    const [state,setState] = useState({showing:-1})

    const toggleCard = (idx) => {
        setState({...state,
            showing:state.showing === idx ?
            -1 : idx
        })
    }

    /* The following part of code is trying to commit the following design:
    1. Nine different blockchain interoperability solutions with their names, logos and a list of keywords for
    themselves would be showed firstly on the front page. After clicking on certain blockchain interoperability
    solutions, a short paragraph of description for this solution would be shown, as well as two net-work
    diagram, or graph explaining the details behind these solutions. Most of the information or data or 
    solutions are displayed on their official website, github, and whitepaper.
    2. A Venn Diagram for nine blockchain interoperability solutions. Three pie-area would be shown: 
    Decentralized Integration, On-chain Governance, and Open Source. Information included is cited from
    Characterization_of_Blockchain_Interoperability_Landscape-4.pdf paper.
    3. A searchable overview table for above nine blockchain solutions. The information is same as above from
    Characterization_of_Blockchain_Interoperability_Landscape-4.pdf paper.
    */
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
                                    Extra information for above graph:
                                    <center><img float="left" class="card-img-left" style={{height:'400px', width:'600px' }} src={projecthow[data.projectName+'2']}/></center>
                                </font></h2>
                            </Col>
                        </Row>
                    </CardBody>
                </Collapse>
            </Card>
            )}
            <div class="card">
                <center>
                    <div class="card-body">
                        <h5 class="card-title"><font size="5" color="#909090"><b>Venn Diagram for Nine Interoperability Solutions</b></font></h5>
                    </div>
                    <img float="left" class="card-img-left" style={{height:'490px', width:'560px' }} src={venn_diagram}/>
                </center>
            </div>
            
            <div>
                <center><b><font size="6" color="#808080">Searchable Overview Table for above Nine Blockchain Solutions</font></b></center>
                <SearchableTable/>
            </div>
        </div>
    </>)

}

export default ProjectsView;

