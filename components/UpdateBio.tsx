import { useState, useEffect } from 'react';
import { firestore } from '../firebase/clientApp';
import styles from '../styles/Admin.module.scss'
import {DocumentData, QueryDocumentSnapshot} from "@firebase/firestore/lite";
import { collection, getDocs,updateDoc, doc } from "@firebase/firestore";
import Image from 'next/image'
import ProtectedRoute from "../components/ProtectedRoute";


const UpdateBio = () => {

const [about,setAbout] = useState<QueryDocumentSnapshot<DocumentData>[]>([]); // array to hold the art
useEffect( () => {getAbout(); },[about]); 
  
const aboutCollection = collection(firestore,'About');
const getAbout= async () => {
 const querySnapshot = await getDocs(aboutCollection);
 const result: QueryDocumentSnapshot<DocumentData>[] = [];
 querySnapshot.forEach((snapshot) => {
   result.push(snapshot);
 })
 setTimeout(() => {
    setAbout(result);
 }, 1000);

 };




//<> <> <> these will be the fields of the firestore database collection <> <> <>
const[bio, setBio]  =  useState<string>('iFVDvkl4HamfnHMWEl0B');


const[newBio, setnewBio]  =  useState<string>(bio);


const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // avoid default behaviour else the page refreshes 
}

useEffect(() => {}, [newBio])

 
const UpdateBio =  () => {

const Ref = doc(firestore, "About", `${bio}`);
updateDoc(Ref, {
    bio: newBio,

  });
}






    return (

      <>

     

{about && about.map((about,index) => {
    
    return (

  
    <section className={styles.ABOUTcontainer} key={about.id}>
    

    <div className={styles.ABOUT} >

        <ul>
   
     
   
        <div >
        {about.data().bio}
        </div>
  
        
        </ul>
    
    </div>

    <div className={styles.aboutUPDATE}>

                        <textarea 
                        placeholder={about.data().bio}
                        onChange={e => setnewBio(e.target.value)}
                       
                        />
      <button onClick={() => {UpdateBio()}}> Update </button>                   

                    
    
                        
    </div>                                        
                        
    </section>
    
   
    )

    
  })}

    





</>

    )


}

export default UpdateBio;