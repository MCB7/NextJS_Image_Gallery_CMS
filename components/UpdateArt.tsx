import { useState, useEffect } from 'react';
import { firestore } from '../firebase/clientApp';
import styles from '../styles/Admin.module.scss'
import {DocumentData, QueryDocumentSnapshot} from "@firebase/firestore/lite";
import { collection, getDocs,updateDoc, doc } from "@firebase/firestore";
import Image from 'next/image'
import ProtectedRoute from "../components/ProtectedRoute";
import UpdateBio from "../components/UpdateBio";


const UpdateArt = () => {

const [art,setArt] = useState<QueryDocumentSnapshot<DocumentData>[]>([]); // array to hold the art
useEffect( () => {getArt(); },[art]); 
  
const artCollection = collection(firestore,'art');
const getArt = async () => {
 const querySnapshot = await getDocs(artCollection);
 const result: QueryDocumentSnapshot<DocumentData>[] = [];
 querySnapshot.forEach((snapshot) => {
   result.push(snapshot);
 })
 setTimeout(() => {
    setArt(result);
 }, 1000);

 };


//<> <> <> letting user know if error occurs for updating image/info <> <> <>
const [error,setError] = useState<string>("");
//<> <> <> letting user know image/info has updated <> <> <>
const [msg,setMessage] = useState<any>("");

//<> <> <> these will be the fields of the firestore database collection <> <> <>
const[title, setTitle]  =  useState<string>('');
const[date, setDate]  =  useState<string>('');
const[dimensions, setDimensions]  =  useState<string>('');
const[medium, setMedium]  =  useState<string>('');
const[price, setPrice]  =  useState<string>('');

const[newTitle, setnewTitle]  =  useState<string>(title);
const[newDate, setnewDate]  =  useState<string>(date);
const[newDimensions, setnewDimensions]  =  useState<string>(dimensions);
const[newMedium, setnewMedium]  =  useState<string>(medium);
const[newPrice, setnewPrice]  =  useState<string>(price);



const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // avoid default behaviour else the page refreshes 
}

useEffect(() => {


 
}, [newTitle,newDate, newDimensions, newMedium, newPrice])

 

const UpdateDate =  () => {

const Ref = doc(firestore, "art", `${title}`);
updateDoc(Ref, {
    date: newDate,

  });
}
const UpdateDimensions =  () => {

    const Ref = doc(firestore, "art", `${title}`);
    updateDoc(Ref, {
        dimensions:newDimensions,
      
      });
    }
const UpdateMedium=  () => {

const Ref = doc(firestore, "art", `${title}`);
updateDoc(Ref, {
    medium:newMedium,
   
  });
}

const UpdatePrice=  () => {

    const Ref = doc(firestore, "art", `${title}`);
    updateDoc(Ref, {

        price:newPrice
      });
    }


    return (

      <ProtectedRoute>

     

{art && art.map((art,index) => {
    
    return (

  
    <section className={styles.UPDATEcontainer} key={art.id}>
    
    <div className={styles.UpdateImage}>

    <Image src={art.data().url} alt="Gallery Image" onClick={() => {
        
        setTitle(art.data().title)
        setDate(art.data().date)
        setDimensions(art.data().dimensions)
        setMedium(art.data().medium)
        setPrice(art.data().price)
       alert(`${art.data().title} is selected for update`)

      }} key={art.id} width={640} height={360} priority={true} unoptimized tabIndex={0}/>

    </div>

    <div className={styles.UpdateInfo}>

        <ul>
   
        <div>
        {art.data().title}
        </div>
    
        <div>
        {art.data().date}
        </div>
     
        <div>
        {art.data().dimensions}
        </div>
       
        <div>
        {art.data().medium}
        </div>
   
        <div>
        {art.data().price}
        </div>
  
        
        </ul>
    
    </div>

    <div className={styles.UpdateInputs}>

                        <input type="text" 
                        placeholder={art.data().date}
                        onChange={e => setnewDate(e.target.value)}
                       
                        />
      <button onClick={() => {UpdateDate()}}> Update </button>                   

                        <input type="text" 
                        placeholder={art.data().dimensions}
                        onChange={e => setnewDimensions(e.target.value)}
                   
                        />
      <button onClick={() => {UpdateDimensions()}}> Update </button>

                        <input type="text" 
                        placeholder={art.data().medium}
                        onChange={e => setnewMedium(e.target.value)}
             
                        />
      <button onClick={() => {UpdateMedium()}}> Update </button>
   
                        <input type="text" 
                        placeholder={art.data().price}
                        onChange={e => setnewPrice(e.target.value)}
                 
                        />
      <button onClick={() => {UpdatePrice()}}> Update </button>
    
                        
    </div>                                        
                        
    </section>
    
   
    )

    
  })}

    

  <UpdateBio/>



</ProtectedRoute>

    )


}

export default UpdateArt;