import React, {Component} from "react";
import {connect} from "react-redux";
import {setAge, setName} from "../app/actions/useraction";

class NewComponent extends Component{
    constructor(props,context){ //props : immutable we can use it but can't modify
        super(props,context);
        
        this.state = {
            myName : "Test",
            render : false
        }    

        //ref keyword allows us to directly interact with dom
        // this.textInput = React.createRef();        
    }
    // focusTextInput = () => {
    //     // Explicitly focus the text input using the raw DOM API
    //     // Note: we're accessing "current" to get the DOM node
    //     console.log("We are setting focus on call!");
    //     this.textInput.current.focus();
    // }

    render(){
        return(
            <div>
                {/* <div>           
                    <input type="text" ref={this.textInput} />
                    <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
                </div> */}
                <hr/>

                <p>This is Your Changed Age : {this.props.user.age} </p>
                <button className="btn btn-primary" onClick={() => this.props.setAge(25)}>ChangeUserAge</button>

                <hr/>
                <p>This is Your Name : {this.props.user.name} </p>
                <button className="btn btn-primary" onClick={() => this.props.setName("Isaac")}>ChangeUserName</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName : (name) =>{
            dispatch(setName(name))
        },
        setAge : (age) =>{
            dispatch(setAge(age))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComponent);