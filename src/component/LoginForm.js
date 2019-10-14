import React from 'react';
export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pwd:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        
    }
    handleSubmit(event){
        event.preventDefault();
        const name=this.nameInput.value;
        const {pwd} = this.state
        alert(`UserNmae is ${name},Password is ${pwd}`)
    }
    handleChange(event){
        const pwd=event.target.value
        this.setState({pwd})

    }
    render(){ 
        return(
            <form action="/test" onSubmit={this.handleSubmit}>
                UserName: <input type="text" ref={input=>this.nameInput=input}></input>

                Password: <input type="password" value={this.state.pwd} onChange={this.handleChange}></input>
                <input type="submit" value="Login"></input>
            </form>
        )
    }
}
