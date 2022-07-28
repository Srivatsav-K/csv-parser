import React,{useState} from 'react'

import ReportTable from './ReportTable'

const SearchParticipant=(props)=>{
    const {data} = props

    const [search,setSearch]=useState('')

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }

    const filterParticipants=()=>{
        const result=data.filter(ele=>{
            return ele['Name (Original Name)'].toLowerCase().includes(search) || ele['User Email'].toLowerCase().includes(search)
        })
        return result
    }

    return(
        <div>
            <input type="text" value={search} onChange={handleSearch}  placeholder='Search by name or email' className='form-control mb-3' />
            <ReportTable data={filterParticipants()} />
        </div>
    )
}

export default SearchParticipant