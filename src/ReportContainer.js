import React from 'react'

import ReportInfo from './ReportInfo'
import SearchParticipant from './SearchParticipant'
import ReportChart from './ReportChart'

const ReportContainer=(props)=>{
    const {data}=props

    return(
        <div className='mt-5' >
            <ReportInfo data={data} />
            <div className='row' >
                <div className='col-md-4 mt-3' >
                    <SearchParticipant data={data} />
                </div>
                <div className='col-md-8' >
                    <ReportChart data={data} />
                </div>
            </div>
            
        </div>
    )
}

export default ReportContainer