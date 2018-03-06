import React from 'react'

export default class TableItem extends React.Component{

	render(){

		let item = [];
		
		this.props.item.forEach((v,i) =>{
			item.push(<tr key={i}>{v.map((x,y) =>{
				return <td key={y}>{x}</td>
			})}</tr>)
		})

		return (
			<tbody>
				{item}
			</tbody>
		)
	}
}