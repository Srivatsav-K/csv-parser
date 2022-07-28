import React, { useState, useEffect } from "react";
import csv from 'csvtojson'
import { v4 as uuidv4 } from 'uuid'
import swal from 'sweetalert'

import Heading1 from "./Heading1";

const FileUpload = (props) => {
    const { addData } = props

    const [file, setFile] = useState('')
    const [csvStr, setCsvStr] = useState('')
    const [hide, setHide] = useState(true)


    const handleFileChange = (e) => {   //upload file
        const result = e.target.files[0]
        if (e.target.files[0]) {
            setHide(false)
            setFile(result)
        }
    }


    const handleUploadFile = (e) => {   //formSubmit
        e.preventDefault()

        const reader = new FileReader() //read the input

        reader.readAsText(file) //read as text. file->line 14
        reader.onload = function () {
            // read the the text in the file and store to state
            setCsvStr(reader.result)
        };
        reader.onerror = () => {
            alert(reader.error)
        }

        swal({
            title: 'Upload Success',
            icon: 'success'
        })

    }

    useEffect(() => {   // csv to json
        csv({
            colParser: {
                "Total Duration (Minutes)": "number", //convert str to num

                "Guest": function (item) {
                    if (item === "Yes") { // yes--> true
                        return true
                    } else {
                        return false  // no --> false
                    }
                }
            },
            checkType: true
        })
            .fromString(csvStr)
            .then((jsonObj) => {
                const result = jsonObj.map(ele => {
                    return { id: uuidv4(), ...ele }
                })
                addData(result) // cb-to update in FileContainer state
            })
            .catch((err) => {
                alert(err)
            })
    }, [csvStr])

    return (
        <div>
            <Heading1 text='File Upload + CSV parser' />

            <form onSubmit={handleUploadFile} >
                <input type="file" file={file} onChange={handleFileChange} accept='.csv' className="form-control mb-3 " />
                <input type="submit" value='Upload File' disabled={hide} className="btn btn-primary mb-3 " />
            </form>

            <hr />
        </div>
    )
}

export default FileUpload