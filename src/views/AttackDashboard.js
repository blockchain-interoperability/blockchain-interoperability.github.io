import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import AttackAmountLine from '../charts/AttackAmountLine.js'
import AttackAmountBubble from "charts/AttackAmountBubble.js";

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
            <Card>
                <CardHeader>
                    <CardTitle tag="h2">Attack Data</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table className="tablesorter" responsive>
                        <thead className="text-primary">
                            <tr>{
                                columns.map(
                                    col => (
                                        <th className="text-center">
                                            {col}
                                        </th>
                                    )
                                )
                            }
                            </tr>
                        </thead>
                        <tbody>{
                            attackData.slice(0).reverse().map(attack => (
                                <tr 
                                    className='tr-clickable'
                                    onClick = {
                                        () => {
                                            window.open(
                                                attack.ref,'_blank'
                                            )
                                        }
                                    }
                                >
                                    {columns.map( col => (
                                        <td
                                            className="text-center"
                                        >
                                            {parseValue(col,attack[col])}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    </>)

}

export default AttackDashboard;

