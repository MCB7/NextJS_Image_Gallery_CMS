import styles from '../styles/Admin.module.scss'
import {DocumentData, QueryDocumentSnapshot} from "@firebase/firestore/lite";
import { collection, getDocs,doc, deleteDoc  } from "@firebase/firestore";
import React, { useEffect, useState} from 'react';
import { firestore } from '../firebase/clientApp'
import Image from 'next/image'
import { getStorage, ref, deleteObject } from "firebase/storage";






const DeleteArt = () => {

  const [art,setArt] = useState<QueryDocumentSnapshot<DocumentData>[]>([]); // array to hold the art
  const [title, setTitle] = useState<string>('title') // state to contain the 'title' of art onClick
  const [url, setURL] = useState<string>('URL')
  
///<><><> This retrieves and diplays the firestore collection and file in Storage so that the user may 
///<><><> click image to delete the file and firestore collection data using function "onClickDeleteArt"

  useEffect( () => {getArt(); },[title, url, art]); 
  
   const artCollection = collection(firestore,'art');
   const getArt = async () => {
    const querySnapshot = await getDocs(artCollection);
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    })
    setArt(result);
    };


    const storage = getStorage();
// Create a reference to the file to delete
    const artRef = ref(storage, `${url}`);
    const artInfoRef = doc(firestore, 'art', `${title}`);

    const onClickDeleteArt = () => {
  
        let question = confirm('Are you sure you want to this delete Image?')
        if (question == true){
               // Delete the file
    deleteObject(artRef).then(() => {
        deleteDoc(artInfoRef)
  
    }).catch((error) => {
  // Uh-oh, an error occurred!
    });

        } else { return null}
 }



  return (
    <>

<section className={styles.DELETEgrid}>
    
    {art && art.map((art,index) => {
    
   
    
    

    return (
 
   <>
  
    <figure className={styles.IMGwrap} >
    <Image  onPointerDown={()=> {setTitle(art.data().title), setURL(art.data().url);}} onPointerUp={onClickDeleteArt} src={art.data().url} alt="Gallery Image" key={art.id} width={640} height={360} priority={true} unoptimized />
    </figure>
        
</>


    )
    
    
  })}
    </section>

</>



  )}

  export default DeleteArt
