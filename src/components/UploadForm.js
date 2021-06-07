import React, { useState } from 'react';
import ProgressBar from './Progressbar';

const UploadForm = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const allowedTypes = ['image/png','image/jpeg','image/jpg'];

    const changeHandler = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError('Please select a valid file (png or jpeg)');
        }
    }
    return(
        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{error} </div> }
                { file  && <div> { file.name } </div> }
                { file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;