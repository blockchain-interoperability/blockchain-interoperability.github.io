import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import AttackAmountLine from '../charts/AttackAmountLine.js'
import AttackAmountBubble from "charts/AttackAmountBubble.js";
import AttackAmountDoughnut from "charts/AttackAmountDoughnut.js";

import rawAttackData from '../data/attackData.json'

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

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";




const AttackDashboard = () => {

    const columns =  [
        'date',
        'name',
        'amount',
        'cause',
        // 'notes',
        // 'ref',
        'tags'
    ]

    // parse the dates here
    const attackData = rawAttackData.map(attack => {
        let date = new Date(attack.date)
        return {
            ...attack, 
            tags: attack.tags.join(' / '),
            date: date.toDateString(),
        }
    })

    const parseValue = (col,str) => {
        let parsed = str
        switch(col){
            case 'amount': parsed = '$'+str
        }
        return parsed
    }

    
    return (
    <>
        <div className="content">
            <div class="row">
                <div class="col-sm-3">
                    <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><font size="6" color="#00FFFF"><b>Total Steals </b></font></h5>
                        <p class="card-text"><font size="5" color="#808080"> <b>900000000000 </b></font></p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><font size="6" color="#00FFFF"><b>Amount of Attacks </b></font></h5>
                        <p class="card-text"><font size="5" color="#808080"> <b>Some data </b></font></p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><font size="6" color="#00FFFF"><b>Most Recent Attack </b></font></h5>
                        <p class="card-text"><font size="5" color="#808080"> <b>Some data </b></font></p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><font size="6" color="#00FFFF"><b>Average of Attacks </b></font></h5>
                        <p class="card-text"><font size="5" color="#808080"> <b>Some data </b></font></p>
                    </div>
                    </div>
                </div>
            </div>

            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#29293E">
            <tbody>
            <tr>
            <th valign="top">
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
            </th>
            <th rowspan="2" width="60%">
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
            </th>
            </tr>
            <tr>
            <th>
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
            </th>
            </tr>
            </tbody>
            </table>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                    <img src="https://polkadot.network/content/images/2021/12/Polkadot_OG.png" class="card-img-top">
                    </img>
                    <div class="card-body">
                        <h5 class="card-title">Single Card for polkadot</h5>
                        <p class="card-text">A short introduction about polkadot</p>
                        <a href="https://polkadot.network/">Official website</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://external-preview.redd.it/9uhvOEa7kxijQXkregqTYFVHSDqPQs7Fo8Ahiutj9w8.jpg?width=640&crop=smart&auto=webp&s=743eb1aa4b0821c0963f814af61457d65ac7c5d8" class="card-img-top" alt="111">
                    </img>
                    <div class="card-body">
                        <h5 class="card-title">Single Card for cosmos</h5>
                        <p class="card-text">A short introduction about cosmos</p>
                        <a href="https://cosmos.network/">Official website</a>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
    </>)

}

export default AttackDashboard;

