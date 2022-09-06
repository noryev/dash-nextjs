import React from "react";
import styles from "../../styles/Home.module.css";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

//data for bar chart
const data = {
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	datasets: [
		{
			label: "Bandwidth",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(0,192,17592,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
			data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
		},
	],
};

//doughnut chart data set

const data1 = {
	labels: ["Media", "Documents", "Other"],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ["#c84b85", "#44318D", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};

function Content() {
	return (
		<div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Upload File</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Users</h2>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
						<h2>Projects</h2>
					</div>
				</div>
			</div>
			{/* chart started  */}
			<div className={styles.charts}>
				<div className={styles.bar}>
					<h2>Bandwidth</h2>
					<Line data={data} width={400} height={400} />
				</div>
				<div className={styles.circle}>
					<h2>File Formats</h2>
					<Doughnut data={data1} width={400} height={400} />
			
				</div>
			</div>
		</div>
	);
}
const element = <h2 style={{ color: 'white' }}/>

export default Content;
