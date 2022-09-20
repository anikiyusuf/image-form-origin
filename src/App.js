import React from 'react';
import axios from 'axios';
import SearchInput from './component/SearchInput';
import ImageList from './component/ImageList';
import Navbar from './component/Navbar'
import "./App.scss"
import ImageGrid from './component/ImageGrid';
import Footer from "./component/Footer"


class App extends React.Component {

	state = { images: [] }

	onSearchSubmit = async (entry) => {
		const response = await axios.get(`https://pixabay.com/api/?key=12973143-e1ea73fe98fc5af5156bb3056&q=${entry}&image_type=photo`)
		this.setState({images:response.data.hits})
	}

	render() {
		return (
      <div  className="App">
			<div  className="ui container">
         <Navbar />
				 <SearchInput onSearchSubmit={this.onSearchSubmit} />
         <ImageList images={this.state.images} />
         <ImageGrid />
         <Footer />
			 </div>
      </div>

		)
	}
}

export default App;

