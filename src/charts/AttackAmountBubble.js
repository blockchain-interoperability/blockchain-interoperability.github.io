import { Bubble } from "react-chartjs-2";




const colors = [
    // '#F8BBD0',
    '#F48FB1',
    '#F06292',
    '#EC407A',
    '#E91E63',
    '#D81B60',
    '#C2185B',
    '#AD1457',
    '#880E4F',
]




const AttackAmountBubble = ({data}) => {
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
            // callbacks: {
            //     title: tooltipItems => {
            //         console.log(tooltipItems)
            //         return data[tooltipItems[0].index]
            //     },
            //     // label: tooltipItem => (
            //     //     data[tooltipItem.index]
            //     // )
            // } 
        },
        responsive: true,
        scales: {
            yAxes: [
            {
                barPercentage: 1.6,
                gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent"
                },
                ticks: {
                suggestedMin: 60,
                suggestedMax: 125,
                padding: 20,
                fontColor: "#9a9a9a"
                },
                beginAtZero: true,
            }
            ],
            xAxes: [
            {
                type:'time',
                barPercentage: 1.6,
                gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.1)",
                zeroLineColor: "transparent"
                },
                ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
                }
            }
            ]
        },
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
                    // body: context => (
                    //     '$'+ data[context.dataIndex].amount
                    // )
                }
            }
        }
    }

    // parse data
    const maxAmount = Math.max(...data.map(attack => attack.amount))

    const chartData = (canvas) => {
        // let ctx = canvas.getContext("2d");
    
        // let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        // gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        // gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        // gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        return {
            labels: data.map(attack => attack.date),
            datasets: [
                {
                    label: "Amount stolen from attacks",
                    fill: true,
                    backgroundColor: data.map(
                        attack => 
                        colors[Math.round((attack.amount / maxAmount) * 7)]
                    ),
                    borderColor: data.map(
                        attack => 
                        colors[Math.round((attack.amount / maxAmount) * 7)]
                    ),
                    // borderWidth: 2,
                    borderDash: [],
                    // borderDashOffset: 0.0,
                    // pointBackgroundColor: "#1f8ef1",
                    // pointBorderColor: "rgba(255,255,255,0)",
                    // pointHoverBackgroundColor: "#1f8ef1",
                    // pointBorderWidth: 20,
                    // pointHoverRadius: 4,
                    // pointHoverBorderWidth: 15,
                    // pointRadius: 4,
                    data: data.map((attack,i) => ({
                        x: i,
                        y: attack.amount,
                        r: (attack.amount / maxAmount) * 80 ,
                        // r: attack.amount/10,
                    }))
                }
            ]
        };
    }

    return(    
        // <div className="chart-area">
            <Bubble
                data={chartData}
                options={chartOptions}
            />
        // </div>
    )
}

export default AttackAmountBubble