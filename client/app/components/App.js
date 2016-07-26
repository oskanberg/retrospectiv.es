import React from 'react'
import VisibleItemList from '../containers/VisibleItemList'
import AddItem from '../containers/AddItem'

const App = ({ params: { locationId }, location: { query } }) => (
	<div>
		<AddItem />
		<VisibleItemList />
	</div>
)

export default App