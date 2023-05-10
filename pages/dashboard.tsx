import ProtectedRoute from "../components/ProtectedRoute";
import {auth} from '../firebase/clientApp'
import styles from '../styles/Admin.module.scss'
import Link from "next/link";
import Image from 'next/image';

const DashboardPage = () => {
  
  if (auth.currentUser != null) {

  return (
    
    <ProtectedRoute>
    
 



  <section className={styles.MENUcontainer}> 
  
    <ul>

         
     <section className={styles.UPLOAD}>
     <Link href={'/Upload'} style={{ textDecoration: 'none' }}>    
      <span className={styles.buttonBorder}>
      <button >Upload</button>
      </span>
      </Link>
     </section>
     <br/>

     <section className={styles.UPDATE}>
     <Link href={'/Update'} style={{ textDecoration: 'none' }}>
     <span className={styles.buttonBorder}>
      <button>Update</button>
      </span>
      </Link>
     </section>
   
     <br/>
     <section className={styles.DELETE} >
     <Link href={'/Delete'} style={{ textDecoration: 'none' }}>
     <span className={styles.buttonBorder}>
      <button>Delete</button>
      </span>
      </Link>
     </section>
    
     <br/>

    </ul>
  
  </section>

 
    
    </ProtectedRoute>
  );
  } else return ( <ProtectedRoute><div className={styles.SPINNERbox}><Image src="https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery.appspot.com/o/spinner%2Floader-min%20(3).gif?alt=media&token=e6f5c9da-af4d-4590-96ec-b29f5da82a06"  width={640} height={360}  alt="loading" unoptimized/></div></ProtectedRoute>)
};

export default DashboardPage;