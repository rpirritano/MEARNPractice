import React from "react";

export default class User extends React.Component{
    constructor(props, context){
        super(props, context);
        //props: immutable should not change
        this.title = "We are in User Component";
        this.state = {
            Name: "Kar",
            Age:22,
            Country : "United States",
            Techonology : "Object Oriented Javascript"
        }       
    }  
        
    updateAge = (e) => {        
        //console.log(event);
        console.log(e.target.value);
        e.target.value = e.target.value;//react - virtual dom
        this.setState({
            Age: e.target.value            
        })
    }

    onHandleChange = (event) => {        
        //console.log(event);
        console.log(event.target.value);
        event.target.value = event.target.value;//react - virtual dom
        this.setState({
            Name: event.target.value           
        })
    }

    render(){  
        //console.log(this.state.Age == 22 ? "Rendering" : "Re-Rendering");     
        return(            
            <div>
                <hr></hr>
                <h4>{this.title}</h4>
                <div className="col-sm-6">
                    <b>{"Name :"}</b><input type="text" value={this.state.Name} onChange={(evt) => this.onHandleChange(evt)}/>
                    <hr></hr>
                    <b>{"Age :"}</b><input type="text" value={this.state.Age} onChange={(e) => this.updateAge(e)}/>
                    <hr></hr>
                    <b>{"Technology :"}</b><div>{this.state.Techonology}</div>                    
                </div>
                <hr></hr>
                <button className={"btn btn-primary"} onClick={() => this.props.greetFunc(this.state.Name)}>Greet In Parent</button>
                <hr></hr>
                <button className={"btn btn-primary"} onClick={() => this.props.ageFunc(this.state.Age)}>Showing Age from Parent</button>
            </div>
        )
    }
}

//<button onClick={() => this.updateAge(5)}>Update</button>