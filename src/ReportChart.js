import React from "react";
import {Chart} from 'react-google-charts'

const ReportChart=(props)=>{
    const {data}=props
    
    const result=[
        ['Student Names','Minutes attended']
    ]
    data.forEach(ele=>{
        result.push([ele['Name (Original Name)'],ele['Total Duration (Minutes)']])
    })


    return(
        <div>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={result} />
        </div>
    )
}

export default ReportChart