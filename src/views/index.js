import React, { useState, useEffect, Fragment } from "react";
import { Row } from "react-bootstrap";

//import loader
import Loader from '../components/loader';

//import Line chart
import LineChartComponent from '../components/chart';

const data = [
    {
        "timestamp": "2019-04-10",
        "game": "Callbreak Multiplier",
        "revenue": 25,
        "impressions": 1040555
    },
    {
        "timestamp": "2019-04-10",
        "game": "World Cricket Championship",
        "revenue": 150,
        "impressions": 1140555
    },
    {
        "timestamp": "2019-04-11",
        "game": "Callbreak Multiplier",
        "revenue": 140,
        "impressions": 1240000
    },
    {
        "timestamp": "2019-04-11",
        "game": "World Cricket Championship",
        "revenue": 130,
        "impressions": 1100666
    }
]

const Dashboard = () => {

    const [ loaded, setloaded ] = useState(true);
    const [ chartData, setchartData ] = useState([]);
    const [ startDate, setstartDate ] = useState("");
    const [ endDate, setendDate ] = useState("");

    useEffect(() => {
        data.map((data) => {
            data["eCPM"] = (data.revenue/data.impressions) * 1000;
            return data;
        })
        setchartData(data);
        setloaded(false);
    }, []);
    
    return (
        <Fragment>
            {loaded &&
                <Loader />
            }
            <Row className="page-content-innner-wrapper m-0">
                <div>
                    <LineChartComponent 
                        chartData = {chartData}
                        height= {480}
                    />
                </div>
            </Row>
        </Fragment>
    );  
}

export default Dashboard;