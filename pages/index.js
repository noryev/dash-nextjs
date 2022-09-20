import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import LeftNavbar from "./components/LeftNavbar";


export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>GraphSense</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			<div className={styles.container}>
				<LeftNavbar />
				
				<Content />
			</div>
		</div>
	);
}
