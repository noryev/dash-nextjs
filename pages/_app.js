import '../styles/globals.css'
import React from "react";
import { useState, useEffect } from React,
import { create } from 'ipfs-core'

const IpfsComponent = () => {
  const [id, setId] = useState(null);
  const [ipfs,setIpfs] = useState(null);
  const [version, setVersion] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (ipfs) return 
      const node = await create(); 
      const nodeId = await node.id() 
    }
    
  })

}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default MyApp
