import { Doughnut } from "react-chartjs-2";

// defined type of colors so that it would be used in future graphing
const colors = [
    "#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#ffa300", "#dc0ab4", "#b3d4ff", "#00bfa0"
]


// main function for graphing a donut chart
const AttackAmountDoughnut = ({data}) => {
    // defining the required chartoptions for options under
    const chartOptions = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
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

    // parse data
    
    
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
    // need to change data to unique for combining the data.tags
    
    const MAX_DATA = Math.max(...data.map(attack => attack.amount))
    const chartData = (canvas) => {
        return {
            // setups and data for dount graph
            labels: data.map(attack => attack.tags),
            datasets: [
                {
                    label: "Amount stolen from attacks",
                    fill: true,
                    backgroundColor: data.map(
                        attack => 
                        colors[Math.round((attack.amount / MAX_DATA) * 7)]
                    ),
                    borderColor: data.map(
                        attack => 
                        colors[Math.round((attack.amount / MAX_DATA) * 16)]
                    ),
                    
                    borderDash: [],
                    data: data.map(
                        attack => (
                        attack.amount/ 1000
                    )),
                    hoverOffset: 40,
                    borderWidth: 1,
                }
            ]
        };
    }

    return(    
        // <div className="chart-area">
            <Doughnut
                data={chartData}
                options={chartOptions}
            />
        // </div>
    )
}

export default AttackAmountDoughnut