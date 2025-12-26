import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const AddDataCSVPage = ({ addDataCSVSubmit }) => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
    };

    return (
        <div>
            {<input type="file" accept=".csv" onChange={handleFileUpload} />}
     
        </div>
    );
}

export default AddDataCSVPage
