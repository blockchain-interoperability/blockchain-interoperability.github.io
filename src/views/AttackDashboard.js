import React from "react";
// nodejs library that concatenates classes
import AttackAmountLine from '../charts/AttackAmountLine.js'
import AttackAmountBubble from "charts/AttackAmountBubble.js";
import AttackAmountDoughnut from "charts/AttackAmountDoughnut.js";
import AttackAmountPolar from "charts/AttackAmountPolar.js";

import rawAttackData from '../data/attackData.json'
import block_data from '../data/blockchain_Data.json'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "reactstrap";

const AttackDashboard = () => {

    const columns =  [
        'date',
        'name',
        'amount',
        'cause',
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

    // again parse the dates here
    const parseValue = (col,str) => {
        let parsed = str
        switch(col){
            case 'amount': parsed = '$' + str
        }
        return parsed
    }
    
    // data cleaning and preprocessing for future calculation and data visualization
    var total = 0;
    var last_attack;
    const iterator = rawAttackData.values();
    for (const value of iterator) {
        total += value.amount;
        last_attack = new Date(value.date);
    }
    // save the date for the last attack happened
    var Y = last_attack.getFullYear() + '-';
    var M = (last_attack.getMonth()+1 < 10 ? '0'+(last_attack.getMonth()+1) : last_attack.getMonth()+1) + '-';
    var D = last_attack.getDate() + ' ';

    // for top-10 crypto-currency, create lists to store the separate data for them
    var block_name = [];
    var block_abbr = [];
    var block_market_cap = [];
    var block_price = [];
    var block_one_Day_changes = [];
    var block_volumn = [];
    var block_transparent_volumn = [];
    var block_circulating_supply = [];
    const count = block_data.values();
    for (const valuea of count) {
        block_name.push(valuea.name);
        block_abbr.push(valuea.abbr);
        block_market_cap.push(valuea.market_cap);
        block_price.push(valuea.price);
        block_one_Day_changes.push(valuea.one_Day_changes);
        block_volumn.push(valuea.volumn);
        block_transparent_volumn.push(valuea.transparent_volumn);
        block_circulating_supply.push(valuea.circulating_supply);
    }

    /* The following part of code is trying to commit the following designs:
    1. Top Description of why are we studying Blockchain Interoperability with its explanation
    2. Besides the description, top four single box each showing a designed data: Total amount of money for all the steal;
    Total number of attacks happened; When did the last attack happened(up to date); Average amount of money stolen from each attack,
    please note this part of data is based on the real-time data from attackData.json, which could be changed once the file is modified
    3. A table containing three data visualization that are accomplished by the react-chartjs-3 module in react. For more detailed data,
    please visit: https://www.npmjs.com/package/react-chartjs-3?activeTab=readme. Those three visualization are bubble chart, line
    chart and doughnut chart.
    4. Also a Polar data visualiation as a table, please see above for the same information.
    5. Top 10 crypto-currency with their relavent data scraped by Webscrap.txt(python) on Nomics website, Nomics is an API-first
    cryptoasset data company delivering professional-grade market data APIs to institutional crypto investors & exchanges. Please visit
    https://nomics.com/ for more information. In order to comment this part on the webpage, please delete the code part of line 226-347.
    */
    return (
    <>
        <script type="text/javascript" src="jquery-3.2.1.min.js"></script>
        <div className="content">
            <div class="card">
                <div class="card-header">
                    <font size="6" color="#000000">Why are we studying Blockchain Interoperability?</font>
                </div>
                <div class="card-body">
                    <h5 class="card-title"><font size="5" color="#808080">Cryptocurrency is a fast-moving space, with a continuous influx of new projects every year. 
                    However, not all developments in the space are positive. There has been an increasing amount of incidents in the 
                    blockchain space as well, such as hacks and spams. In just 2022, over 1.9 million dollars were lost in various incidents.
                     These events have significant consequences for those who have invested in such projects.</font></h5>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><font size="6" color="#00FFFF"><b>Total Steals </b></font></h5>
                        <p class="card-text"><font size="5" color="#808080"> <b>${total} </b> </font></p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><font size="6" color="#00FFFF"><b>Amount of Attacks </b></font></h5>
                        <p class="card-text"><font size="5" color="#808080"> <b>{attackData.length} </b></font></p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><font size="6" color="#00FFFF"><b>Most Recent Attack </b></font></h5>
                        <p class="card-text"><font size="5" color="#808080"> <b>{Y+M+D}</b></font></p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title"><font size="6" color="#00FFFF"><b>Average of Attacks </b></font></h5>
                        <p class="card-text"><font size="5" color="#808080"> <b>${(total/attackData.length).toFixed(2)} </b></font></p>
                    </div>
                    </div>
                </div>
            </div>

            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="transparent">
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
            
            <script>
                // Single Polar Chart
            </script>
            <table width="100%" height="500" border="0" cellspacing="0" cellpadding="0" bgcolor="transparent">
            <tbody>
            <tr>
            <th valign="top">
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
            </th>
            </tr>
            </tbody>
            </table>
            
            <div class="row row-cols-1 row-cols-md-2 g-10">  
                
                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[0]} Abbr: {block_abbr[0]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[0]} Price: {block_price[0]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[0]} Volume: {block_volumn[0]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[0]} Percentage of Circulating Supply: {block_circulating_supply[0]}</font></p>
                    </div>
                    </div>
                </div> 

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://thegivingblock.com/wp-content/uploads/2021/07/Ethereum-ETH-Logo.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[1]} Abbr: {block_abbr[1]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[1]} Price: {block_price[1]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[1]} Volume: {block_volumn[1]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[1]} Percentage of Circulating Supply: {block_circulating_supply[1]}</font></p>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://pbs.twimg.com/profile_images/1551571911292903424/BEFooSs1_400x400.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[2]} Abbr: {block_abbr[2]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[2]} Price: {block_price[2]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[2]} Volume: {block_volumn[2]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[2]} Percentage of Circulating Supply: {block_circulating_supply[2]}</font></p>
                    </div>
                    </div>
                </div> 

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://tradingplatforms.com/wp-content/uploads/2021/11/1839.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[3]} Abbr: {block_abbr[3]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[3]} Price: {block_price[3]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[3]} Volume: {block_volumn[3]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[3]} Percentage of Circulating Supply: {block_circulating_supply[3]}</font></p>
                    </div>
                    </div>
                </div> 

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[4]} Abbr: {block_abbr[4]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[4]} Price: {block_price[4]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[4]} Volume: {block_volumn[4]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[4]} Percentage of Circulating Supply: {block_circulating_supply[4]}</font></p>
                    </div>
                    </div>
                </div> 

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://s3.coinmarketcap.com/static/img/portraits/62da512ff192d82df80012bb.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[5]} Abbr: {block_abbr[5]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[5]} Price: {block_price[5]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[5]} Volume: {block_volumn[5]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[5]} Percentage of Circulating Supply: {block_circulating_supply[5]}</font></p>
                    </div>
                    </div>
                </div> 

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://s2.coinmarketcap.com/static/img/coins/200x200/52.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[6]} Abbr: {block_abbr[6]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[6]} Price: {block_price[6]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[6]} Volume: {block_volumn[6]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[6]} Percentage of Circulating Supply: {block_circulating_supply[6]}</font></p>
                    </div>
                    </div>
                </div> 

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[7]} Abbr: {block_abbr[7]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[7]} Price: {block_price[7]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[7]} Volume: {block_volumn[7]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[7]} Percentage of Circulating Supply: {block_circulating_supply[7]}</font></p>
                    </div>
                    </div>
                </div> 

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://s3.coinmarketcap.com/static-gravity/image/4aec70f6f1254e4f89650cc68ae49f3c.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[8]} Abbr: {block_abbr[8]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[8]} Price: {block_price[8]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[8]} Volume: {block_volumn[8]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[8]} Percentage of Circulating Supply: {block_circulating_supply[8]}</font></p>
                    </div>
                    </div>
                </div> 

                <div class="col">
                    <div class="card">
                    <img class="card-img-top-left" src="https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png" alt="Card image" width="100" height="100"></img>
                    <div class="card-body">
                        <h4 class="card-title"><font size="6" color="#000000">Name: {block_name[9]} Abbr: {block_abbr[9]}</font></h4>
                        <h5 class="card-text"><font size="4" color="#6082B6">Market Cap: {block_market_cap[9]} Price: {block_price[9]}</font></h5>
                        <h6 class="card-text"><font size="3" color="#71797E">Price Changes within One Day: {block_one_Day_changes[9]} Volume: {block_volumn[9]}</font></h6>
                        <p class="card-text"><font size="2" color="#008000">Transparent Volume: {block_transparent_volumn[9]} Percentage of Circulating Supply: {block_circulating_supply[9]}</font></p>
                    </div>
                    </div>
                </div> 
            </div>          
        
        </div>
    </>)

}

export default AttackDashboard;

