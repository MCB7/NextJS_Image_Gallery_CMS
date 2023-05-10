import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import styles from '../styles/Admin.module.scss'

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const { user, logOut } = useAuth();
  const router = useRouter();



  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
  
        <section className={styles.NAVcontainer}>
        <nav className={styles.NAV_BAR }>
          <ul>
            <>
              {!user.uid ? (
               null
              ) : ( 
                <>
                     <span className={styles.Wave_outset}>
                    <span className={styles.Wave_inset}>
                    <div onClick={handleLogout}>
                    <img className={styles.LogoutIcon} style={{opacity:'0.5', cursor:'pointer'}} src='https://raw.githubusercontent.com/gist/MCB7/63a21618d00f7cca2ffe616250d65db3/raw/581d763e7f4d390d39bbe58c140a4065a2dbd460/logout_icon.svg'/>
                    </div>
                    </span>
                    </span>
          
                    <div>
                    <Link href={'/dashboard'} style={{ textDecoration: 'none' }}>    
                    <span><img style={{scale: '1.5'}} src='https://raw.githubusercontent.com/gist/MCB7/758c5523914c42af62c1aca2ec63fddf/raw/33869dbd448cc2fea85ca09ee2301f1b6d6321bf/home_icon.svg'/></span>
                    </Link>
                    </div>
                
                    <div>
                    <Link href={'/Upload'} style={{ textDecoration: 'none' }}>    
                    <span><img style={{scale: '1.75'}} src='https://raw.githubusercontent.com/gist/MCB7/5e8d14a2c050f65ae59c82789e3e5042/raw/fec1751ce38a48dc2897edc52e60867dbeb466e0/upload_icon.svg'/></span>
                    </Link>
                    </div>
               
                    <div>
                    <Link href={'/Update'} style={{ textDecoration: 'none' }}>    
                    <span><img style={{scale: '1.5'}} src='https://raw.githubusercontent.com/gist/MCB7/8dd0021623f68bc81328f1316202a120/raw/73f526004ef4d707c6f1d074490d5f944c3a1621/update_icon.svg'/></span>
                    </Link>
                    </div>

                    <div>
                         <Link href={'/Delete'} style={{ textDecoration: 'none' }}>    
                         <span><img   style={{scale: '1.75'}} src='https://raw.githubusercontent.com/gist/MCB7/66fbec03358e9c05b8becd922a670e3a/raw/c46070705312a93a951dfa1ed82e1f6d38dd1133/delete_icon.svg'/></span>
                    </Link>
                    </div>
              
                </>
              )}
            </>
          </ul>
        </nav>
        </section>
      {children}
    </>
  );
};

export default Navbar;