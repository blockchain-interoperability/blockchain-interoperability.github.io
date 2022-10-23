import { Line, Bar } from "react-chartjs-2";


const AttackAmountLine = ({data}) => {
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
            position: "nearest"
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
                    fontColor: "#9a9a9a",
                    callback: (value,index,ticks) => '$' + value
                }
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
                        data[context[0].dataIndex].name+ ' - ' + data[context[0].dataIndex].date
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


    const chartData = (canvas) => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        return {
            labels: data.map(attack => attack.date),
            datasets: [
                {
                    label: "USD stolen from attacks",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: "#1f8ef1",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: "#1f8ef1",
                    pointBorderColor: "rgba(255,255,255,0)",
                    pointHoverBackgroundColor: "#1f8ef1",
                    pointBorderWidth: 20,
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: data.map(attack => attack.amountOverTime)
                }
            ]
        };
    }

    return(    
        <div className="chart-area">
            <Line
                data={chartData}
                options={chartOptions}
            />
        </div>
    )
}

export default AttackAmountLine