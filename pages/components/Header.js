import React from "react";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react'
import { create } from 'ipfs-core'




const IpfsComponent = () => {
  const [id, setId] = useState(null);
  const [ipfs,setIpfs] = useState(null);
  const [version, setVersion] = useState(null);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (ipfs) return 
      const node = await create(); 

      const nodeId = await node.id();
      const nodeVersion = await node.version();
      const nodeIsOnline = node.isOnline();

      setIpfs(node);
      setId(nodeId.id);
      setVersion(nodeVersion.version);
      setIsOnline(nodeIsOnline);

    }
    
    init()
  }, [ipfs]);

  if (!ipfs || !id) {
    return <h4>Connecting to IPFS....</h4>
  }
  
// now make it show up :D


function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello <span></span>
					</h2>
					<p>welcome to the board</p>
				</div>
				<div> 
     		<h4 data-test="id">ID: {id.toString()}</h4>
    		<h4 data-test="version">Version: {version}</h4>
     		<h4 data-test="status">Status: {isOnline ? 'Online' : 'Offline' }</h4>
    	</div>
	
  			</div>
				</div>
			
	);
}
}
export default Header;