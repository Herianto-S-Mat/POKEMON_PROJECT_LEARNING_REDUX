import Navbar from './Navbar'
import Header from './Header'
import Modal from './Modal'

const Page :React.FC<{ children: React.ReactNode }> = ({children})=>{
  return(
    <>
      <Header/>
      <div style={{display:'flex', height:'calc(100vh - 5.2em )'}}>
        <Navbar/>
        <div style={{borderLeft:'.1em solid', width:'100%', overflowY:'scroll', display:'flex', flexDirection:'column', padding:'1em', color:'white'}} >
          {children}
        </div>
      </div>
      <Modal/>
    </>
  )
}

export default Page