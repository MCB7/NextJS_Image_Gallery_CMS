import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {DocumentData, QueryDocumentSnapshot} from "@firebase/firestore/lite";
import { collection, getDocs } from "@firebase/firestore";
import type { NextPage } from 'next'
import React, { useEffect, useState, useRef, useContext, Suspense} from 'react';
import { firestore } from '../firebase/clientApp'
import UploadArt from '../components/UploadArt'
import DeleteArt from '../components/DeleteArt'
import UpdateArt from '../components/UpdateArt'



const Home: NextPage = () => {
  const [art,setArt] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  
  
  
 

  return (
    <>

    
   
    



    </>



  )}

  export default Home
