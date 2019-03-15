import React from "react";

export default class User extends React.Component{
    constructor(props, context){
        super(props, context);
        //props: immutable should not change
        this.title = "We are in User Component";
        this.state = {
            Name: " ",
            Age: " ",
            Country : "United States",
            Techonology : "Object Oriented Javascript"
        }   
        console.log("Constructor Initialized");     
    }  

    componentWillMount(){
        console.log("Creation - We are in - componentWillMount");
    }
        
    updateAge = (e) => {        
        //console.log(event);
        //console.log(e.target.value);
        //e.target.value = e.target.value;//react - virtual dom
        this.setState({
            Age: e.target.value            
        })
    }

    onHandleChange = (event) => {        
        //console.log(event);
        //console.log(event.target.value);
        //event.target.value = event.target.value;//react - virtual dom
        this.setState({
            Name: event.target.value           
        })
    }

    componentWillReceiveProps(nextProps){
        console.log("UpdateLC - We are in - componentWillReceiveProps nextProps :", nextProps);        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("UpdateLC - We are in - shouldComponentUpdate");        
        console.log("Age :", nextState.Age);        
        if (nextState.Age > 30) {
            return false;
        }else{
            return true;
        }        
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log("UpdateLC - We are in - componentWillUpdate");
        console.log("nextProps",nextProps);
        console.log("nextState",nextState);
    }

    componentDidUpdate(prevProps, prevState){        
        console.log("UpdateLC - We are in - componentDidUpdate");
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
        
    }

    componentDidMount(){
        console.log("Creation - We are in - componentDidMount");
        //setInterval(){}
        //setTimeout(){}        
    }

    componentWillUnmount(){
        console.log("Destruction - We are in - componentWillUnmount");
        //clearInterval(){}
        //clearTimeout(){}
    }


    render(){  
        //console.log(this.state.Age == 22 ? "Rendering" : "Re-Rendering");     
        return(            
            <div>
                <hr></hr>
                <h4>{this.title}</h4>
                <div className="col-sm-6">
                    <h2>The name entered is :{this.state.Name} </h2>
                    <input type="text" onKeyUp={this.onHandleChange.bind(this)} />
                    <hr></hr>
                    <h2>The age entered is :{this.state.Age} </h2>
                    <input type="text" onKeyUp={this.updateAge.bind(this)} />
                    <hr></hr>
                    <b>{"Name :"}</b><input type="text" value={this.state.Name} onChange={(evt) => this.onHandleChange(evt)}/>
                    <hr></hr>
                    <b>{"Age :"}</b><input type="text" value={this.state.Age} onChange={(e) => this.updateAge(e)}/>
                    <hr></hr>
                    <hr></hr>
                    <button className={"btn btn-primary"} onClick={() => this.props.greetFunc(this.state.Name)}>Greet In Parent</button>
                    <hr></hr>
                    <button className={"btn btn-primary"} onClick={() => this.props.ageFunc(this.state.Age)}>Showing Age from Parent</button>
                    <hr></hr>
                    <b>{"Technology :"}</b><div>{this.state.Techonology}</div>                    
                </div>
                <hr></hr>
               
            </div>
        )
    }
}

//<button onClick={() => this.updateAge(5)}>Update</button>