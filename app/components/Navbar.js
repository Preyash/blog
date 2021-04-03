import React from 'react';
import { Navbar } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const Example = () => {
	const history = useHistory()
	return (
		<Navbar className="h80">
			<div className="logo fullFlex">
				Logo
			</div>
		</Navbar>
	);
}

export default Example;