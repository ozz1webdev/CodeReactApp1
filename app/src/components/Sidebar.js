import React from 'react';

import styles from  './css/Sidebar.module.css';

function Sidebar() {
	return (
		<div className={styles.sidebar} >
			<h1>Sidebar</h1>
			<a href="#">My Photos</a>
			<a href="#">My Illustrations</a>
			<a href="#">My Paintings</a>
		</div>
	);
};


export default Sidebar;