// import page
import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';

const App = () => (
	<div className='container my-auto p-4'>
		<div className='row'>
			<div className='col-md-12 mx-auto col-ml-6'>
				<Header />
				<Home />
			</div>
		</div>
	</div>
);

export default App;
