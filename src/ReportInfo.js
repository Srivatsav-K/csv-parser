import React from "react";

import Heading1 from "./Heading1";

const ReportInfo=(props)=>{
    const {data}=props

    const hosts=()=>{
        const host=data.filter(ele=>ele['Guest']===false).map((e)=>{
            return e['Name (Original Name)']
        })

        return (host.join(', '))
    }

    const minutes=data[0]['Total Duration (Minutes)']

    const hrs=`(${Math.trunc(minutes/60)} ${Math.trunc(minutes/60) > 1 ? 'hours' : 'hour'}  ${minutes%60} minutes )`

    return(
        <div>
            <Heading1 text='Report'/>
        
            <h2 className="lead" >
                <b> { hosts().length>0 ? 'Hosts' : 'Host' } - </b>
                {
                    hosts()
                }
            </h2>

            <h2 className="lead"> <b>Total Participants -  </b> {data.length}</h2>

            <h2 className="lead"> <b>Duration - </b>  {minutes}mins {hrs}</h2>
        </div>
    )
}

export default ReportInfo