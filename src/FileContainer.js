import React, { useState } from "react";

import FileUpload from "./FileUpload";
import ReportContainer from "./ReportContainer";

const FileContainer = (props) => {
    const [data, setData] = useState([])

    const addData = (csvtojsonData) => {
        setData(csvtojsonData)
    }

    return (
        <div>
            <FileUpload addData={addData} />
            {data.length > 0 && <ReportContainer data={data} />}
        </div>
    )
}

export default FileContainer