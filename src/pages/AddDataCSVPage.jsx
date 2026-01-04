import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Hero from '../components/Hero';
import FileForm from '../components/FileForm';

const AddDataCSVPage = () => {

    return (
        <>
            <Hero />
            <FileForm />
        </>
    )
}

export default AddDataCSVPage;
