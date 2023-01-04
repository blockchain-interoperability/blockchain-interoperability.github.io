import React from "react";
// nodejs library that concatenates classes
import AttackAmountLine from '../charts/AttackAmountLine.js'
import AttackAmountBubble from "charts/AttackAmountBubble.js";
import AttackAmountDoughnut from "charts/AttackAmountDoughnut.js";
import AttackAmountPolar from "charts/AttackAmountPolar.js";

import rawAttackData from '../data/attackData.json'
import blockchainData from '../data/blockchainData.json'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

const AttackDashboard = () => {

    // const columns =  [
    //     'date',
    //     'name',
    //     'amount',
    //     'cause',
    //     'tags'
    // ]

    // parse the dates here
    const attackData = rawAttackData.map(attack => {
        let date = new Date(attack.date)
        return {
            ...attack, 
            tags: attack.tags.join(' / '),
            date: date.toDateString(),
        }
    })

    // group the blockchain data by two so we can do two cols per row
    const blockchainDataTwoCol = blockchainData.reduce(
        (rows, data, index) => {
            index % 2 === 0 ? rows.push([data]) : rows[rows.length-1].push(data)
            return rows
        },
    [])


    const totalAmountStolen = attackData.reduce((prev,now) => prev + now.amount, 0)
    

    return (
    <>
        <div className="content">
            <Card>
                <CardHeader>
                    <CardTitle tag="h2" style={{fontWeight:'bold'}}>
                        Why are we studying Blockchain Interoperability?
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    Cryptocurrency is a fast-moving space, with a continuous influx of new projects every year. 
                    However, not all developments in the space are positive. There has been an increasing amount of incidents in the 
                    blockchain space as well, such as hacks and spams. In just 2022, over 1.9 million dollars were lost in various incidents.
                    These events have significant consequences for those who have invested in such projects.
                </CardBody>
            </Card>

            <Row>
                <Col sm={3}>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h3" style={{fontWeight:'bold'}}>
                                Total Stolen
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            {totalAmountStolen.toLocaleString('en-US',{style:'currency',currency:"USD"})}
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h3" style={{fontWeight:'bold'}}>
                                Number of Attacks
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            {attackData.length}
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h3" style={{fontWeight:'bold'}}>
                                Most Recent Attack
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            {attackData[attackData.length-1].date}
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h3" style={{fontWeight:'bold'}}>
                                Average Amount Stolen
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            {(totalAmountStolen/attackData.length).toLocaleString('en-US',{style:'currency',currency:"USD"})}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Row>
                        <Card className="card-chart">
                            <CardHeader>
                                <CardTitle tag="h2">
                                    Total Amount Stolen from Attacks
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <AttackAmountLine data = {attackData}/>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row>
                        <Card 
                            className="card-chart"
                            style={{
                                height: '50vh'
                            }}
                        >
                            <CardHeader>
                                <CardTitle tag="h2">
                                    Attacks History
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <AttackAmountBubble data = {attackData}/>
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
                <Col xs={6} style={{height:'100%'}}>
                    <Card 
                        class="position-absolute top-0 start-50 translate-middle-x"
                        className="card-chart"
                        style={{
                            height: '100vh'
                        }}
                    >
                        <CardHeader>
                            <CardTitle tag="h2">
                                Stolen Percentage
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <AttackAmountDoughnut data = {attackData}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
            <Card className="card-chart" style={{
                    height: '100vh'
                }}>
            <CardHeader>
                <CardTitle tag="h2">
                    Comparsion between Attacks
                </CardTitle>
            </CardHeader>
            <CardBody>
                <AttackAmountPolar data = {attackData}/>
            </CardBody>
            </Card>
            {
                blockchainDataTwoCol.map( oneRow =>
                    <Row>
                        {
                            oneRow.map(blockchain => 
                            <Col xs={6}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3" style={{fontWeight:'bold'}}>
                                            <img 
                                                src = {require(`../data/img/blockchainLogos/${blockchain.abbr.toLowerCase()}.png`)}
                                                style ={{
                                                    width:'5%',
                                                    marginRight:'2%'
                                                }}
                                            
                                            />
                                            {blockchain.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <p style={{color:'#6082B6'}}>
                                            Market Cap: {blockchain.marketCap}
                                        </p>
                                        <p style={{color:'#71797E', fontWeight:'bold'}}>
                                            Price Change within One Day: {blockchain.oneDayChange} Volume: {blockchain.volume}
                                        </p>
                                        <p style={{color:'#008000'}}>
                                            Transparent Volume: {blockchain.transparentVolume}
                                        </p>
                                        <p style={{color:'#71797E'}}>

                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                                
                            )
                        }

                    </Row>
                )
            }        
        </div>
    </>)

}

export default AttackDashboard;

