import { useState, useEffect } from 'react';
import { firestore } from '../firebase/clientApp';
import styles from '../styles/Admin.module.scss'
import {  setDoc, doc } from 'firebase/firestore';
import {getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'


const UploadArt = () => {

//<> <> <> letting user know if error occurs for uploaded image/info <> <> <>
const [error,setError] = useState<string>("");
//<> <> <> letting user know image/info has uploaded <> <> <>
const [msg,setMessage] = useState<any>("");

//<> <> <> these will be the fields of the firestore database collection <> <> <>
const[title, setTitle]  =  useState<string>('');
const[date, setDate]  =  useState<string>('');
const[dimensions, setDimensions]  =  useState<string>('');
const[medium, setMedium]  =  useState<string>('');
const[price, setPrice]  =  useState<string>('');
const [imageFile, setImageFile] = useState<File>()// this will be the image file within Firebase Storage
const[url, setURl] = useState<string>('')

///<> <> <> firebase Storage Bucket, where the images will be kept <> <> <> 
const storage = getStorage();
///<> <> <> this triggers onClick the upload of the art and info to firebase storage and firestore <> <> <> 

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // avoid default behaviour else the page refreshes 
}
 
 //file of the image selected
const [isUploading, setIsUploading] = useState(false) // boolean response to signal  loading 
const [progressUpload, setProgressUpload] = useState(0) // for a loading bar 


///<> <> <> this utilizes Firebase functions to upload the image to Storage  
///<> <> <> while simultaneously (1) retrieveing the url of the image uploaded to the Storage, 
///<> <> <> (2) the information submitted to the useStates (line 11- 16),
///<> <> <> and  (3) adding it all as fields within a firestore Collection. 

const handleSelectedFile = (files: any) => {
  if (files && files[0].size < 10000000) {
    setImageFile(files[0])

    console.log(files[0])
  } else {
 ('File size to large')
  }
}

const handleUploadFile = () => {
  if (imageFile) {

    const storageRef = ref(storage, `${title}`)
    const uploadTask = uploadBytesResumable(storageRef, imageFile)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100

        setProgressUpload(progress) // to show progress upload

        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
        }
      },
      (error) => {
        (error.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          //url is download url of file
          setURl(url)
           // create a pointer to our document
    const _art = doc(firestore,`art/${title}`);  
    // structure the todo data
    const artData = {
        title,
        date,
        dimensions,
        medium,
        price,
        url,
    };
    try{
        //add the document
        await setDoc(_art,artData);
        //show a success message
        setMessage("Art added successfully to Gallery");
        //reset fields
        setTitle("");
        setDate("");
        setDimensions("");
        setMedium("");
        setPrice("");
        setURl("");
        setProgressUpload(0)
    }catch(error){
        //show an error message
        setError("An error occurred while uploading art");      
    }
        
        })
      },
    )
  } 
}
//resets the file uploader 
const handleRemoveFile = () => setImageFile(undefined)


useEffect(() => {
  console.log(progressUpload)
}, [progressUpload])


    return (

<>

               
    <div style={{width:'50%', height: '5vh',marginLeft:'25%', display:'flex'}}>
          <div style={{ width:progressUpload + '%', height:'100%', background: 'linear-gradient(180deg, rgba(154,154,154,1) 3%, rgba(180,180,180,1) 14%, rgba(194,194,194,1) 21%, rgba(247,247,247,1) 38%, rgba(249,249,249,1) 44%, rgba(251,251,251,1) 48%, rgba(248,248,248,1) 55%, rgba(244,244,244,1) 58%, rgba(217,217,217,1) 73%, rgba(156,156,156,1) 99%)',borderRadius:'10px'}}/>
          </div>
    
  <section className={styles.UPLOADcontainer}>
          
          <section className={styles.FormArea}>
                    {
                        error ? (
                          
                          <div style={{alignContent:"center",margin:'auto', alignItems:'center' ,display:'flex'}}>
                          <p style={{margin:'auto',fontSize:'2vw', color:'rgb(64, 65, 76)'}}>
                          {error}
                          </p>
                          </div>
                             
                           
                        ) : null
                    }

                    {
                        msg ? (
                                <div style={{alignContent:"center",margin:'auto', alignItems:'center' ,display:'flex'}}>
                                <p style={{margin:'auto' ,fontSize:'2vw' ,color:'rgb(64, 65, 76)'}}>
                                    {msg}
                                </p>
                                </div>
                          
                        ) : null
                    }
               
                       
    <form onSubmit={handleSubmit} className={styles.form}>

                        <input
                        type="file"
                        placeholder="Select file to upload"
                        accept="image/png"
                        onChange={(files) => handleSelectedFile(files.target.files)}
                         />
                
                 

                        <input type="text" 
                        placeholder="Title" 
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        />
              
                   
                        <input type="text" 
                        placeholder="Date"  
                        onChange={e => setDate(e.target.value)}
                        value={date}
                        />

                      
                        <input type="text" 
                        placeholder="Dimensions"  
                        onChange={e => setDimensions(e.target.value)}
                        value={dimensions}
                        />

                        <input type="text" 
                        placeholder="Medium" 
                        onChange={e => setMedium(e.target.value)}
                        value={medium}
                        />

                      
                        <input type="text" 
                        placeholder="Price" 
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                        />

                  
               
                    
           

        

        <button onClick={handleUploadFile}>Upload</button>
    
    </form>

    </section>

    
    </section>
    


</>

    )


}

export default UploadArt;