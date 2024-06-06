import React from 'react';

function FunctionalGreetings(props) {
	props = {
		name: 'World'
	};

	return (
		<div>
			<h1>Hello {props.name}</h1>
		</div>
	);
}

export default FunctionalGreetings;