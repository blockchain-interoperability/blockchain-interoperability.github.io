// import the desired module from react library
import { PolarArea } from "react-chartjs-2";

// defined type of colors so that it would be used in future graphing
const colors = [
    "#7eb0d5", "#b2e061", "#fd7f6f", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"
]


// main function for graphing a Polar chart
const AttackAmountPolar = ({data}) => {
    // defining the required chartoptions for options under
    const chartOptions = {
        maintainAspectRatio: false,
        // legend: {
        //     display: false
        // },
        tooltips: {
            backgroundColor: "#000000",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
        },
        responsive: true,
        
        plugins: {
            tooltip: {
                callbacks : {
                    title: context => (
                        data[context[0].dataIndex].name
                    ),
                    label: context => (
                        data[context.dataIndex].amount.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          }).slice(0,-3)
                    )
                }
            }
        }
    }

    // uncomment this part of code would merge the different tags of attacks into "unique" ones
    // so that all duplicate tags would be removed except one
    /* 
    const new_arr = data.reduce((acc, obj) => {
        if(acc[obj.tags]){
            acc[obj.tags].amount += obj.amount;
        } else{
            acc[obj.tags] = obj;
        }
        return acc;
    },{});

    
    const unique = [];
    Object.values(new_arr).forEach((obj) => {
        unique.push(obj);
    });
    */
    
    // set the surrounding data and variable for charts
    const MAX_DATA = Math.max(...data.map(attack => attack.amount))

    const chartData = (canvas) => {
        return {
            // setups and data for polar graph
            labels: data.map(attack => attack.tags),
            datasets: [
                {
                    label: "Amount stolen from attacks",
                    fill: true,
                    backgroundColor: data.map(
                        attack => 
                        colors[Math.round((attack.amount / MAX_DATA) * 8)]
                    ),
                    borderColor: data.map(
                        attack => 
                        colors[Math.round((attack.amount / MAX_DATA) * 8)]
                    ),

                    borderDash: [],
                    data: data.map(
                        attack => (
                        attack.amount/ 1000
                    )),
                    hoverOffset: 50,
                    borderWidth: 3,
                }
            ]
        };
    }

    // return the polar chart
    return(    
        <PolarArea
            data={chartData}
            options={chartOptions}
        />
    )
}

// export the requiring function for another js file
export default AttackAmountPolar