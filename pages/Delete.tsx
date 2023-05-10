import type { NextPage } from 'next'
import React from 'react';
import DeleteArt from '../components/DeleteArt'
import ProtectedRoute from "../components/ProtectedRoute";
import {auth} from '../firebase/clientApp'
import Image from 'next/image';
import styles from '../styles/Admin.module.scss'



const Upload: NextPage = () => {




    if (auth.currentUser != null) {


        return (
    
            
            <>
            <ProtectedRoute>
            <DeleteArt/>
            </ProtectedRoute>
            
            </>
        )
    
        
    
    } else return (  <ProtectedRoute><div className={styles.SPINNERbox}><Image src="https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery.appspot.com/o/spinner%2Floader-min%20(3).gif?alt=media&token=e6f5c9da-af4d-4590-96ec-b29f5da82a06"  width={640} height={360}  alt="loading" unoptimized/></div></ProtectedRoute>)
}

export default Upload