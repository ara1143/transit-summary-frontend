import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//arrow function
const FileForm = () => {
    const navigate = useNavigate();
    //setter function: setFile
    //used to set the state of file
    const [file, setFile] = useState(null);

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //construct FormData object, which is sent in post request as the body
        const formData = new FormData();
        //formData stores key/value pairs of fields from the form
        //the key 'file_upload' is used with the value (the file that has been selected)
        formData.append('file_upload', file);

        try {
            const endpoint = "http://localhost:8080/api/v1/transaction/upload"
            const response = await fetch(endpoint, {
                method: "POST",
                body: formData
            });

            if(response.ok) {
                console.log("File uploaded sucessfully!");
            }
            navigate('/summary')
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <section className='bg-gray-200 py-10 mb-7'>
            <div >
                <div >
                    <h1 className='my-4 text-xl text-black'>Begin by uploading a CSV file containing your Presto history</h1>
                    <form onSubmit={handleSubmit}>
                        <div style ={{ marginBottom: "20px" }} className='flex justify-center' >
                            <input type="file" accept=".csv" onChange={handleFileInputChange}  className='bg-indigo rounded-lg ml-35'/>
                        </div>

                        <button type="submit" className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>Upload</button>
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FileForm;