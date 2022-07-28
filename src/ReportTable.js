import React from "react";

import Heading2 from "./Heading2";

const ReportTable = (props) => {
    const { data } = props

    return (
        <div>
            {
                (data.length > 0 ? (
                    <div>
                        <table className=" table table-hover table-bordered " >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Duration(mins)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((ele) => {
                                        return (
                                            <tr key={ele.id} >
                                                <td>{ele['Name (Original Name)']} </td>
                                                <td>{ele['User Email']}</td>
                                                <td>{ele['Total Duration (Minutes)']}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <Heading2 text='Record Not Found' />
                ))
            }
        </div>
    )
}

export default ReportTable