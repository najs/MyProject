/*Created by njs2000 on 2016-12-02.*/

import React from 'react';

export default class ContactCreate extends  React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			phone:''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleClick(){
		const contact = {
			name:this.state.name,
			phone:this.state.phone
		};
		this.props.onCreate(contact);
		this.setState({
			name:'' ,
			phone:''
		});
		this.nameInput.focus();
	}

	handleChange(e){
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	handleKeyPress(e){
		if(e.charCode === 13){ //엔터
			this.handleClick();
		}
	}

	render(){
		return (
			<div><h2>Create;
		Contact</h2><p><input;
		type = "text";
		name = "name";
		placeholder = "name";
		value={this.state.name}
						onChange={this.handleChange}
						ref={(ref)=>{this.nameInput = ref}}
					/>
	<
		input;
		type = "text";
		name = "phone";
		placeholder = "phone";
		value={this.state.phone}
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
					/>
	<
		button;
		onClick = {this.handleClick
	}>
		Create</button></p></div>;
	)
	};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
};

ContactCreate.protoTypes = {
	onCreate:React.PropTypes.func
};

ContactCreate.defaultProps = {
	onCreate: () => {console.error('onCreate not defined');}
}

