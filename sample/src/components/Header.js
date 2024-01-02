import { Component } from "react"



class Head extends Component{

    render(){

        return(<p>Class Head {this.props.param}</p>)
    }
}


function Header(props){

     return(<h3>New Header component {props.param}</h3>)
}


export default Header