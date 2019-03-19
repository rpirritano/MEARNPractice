console.log("Test my application with --hot");
import React, {Component, PureComponent} from "react";
import Header, {Footer as Ftr, Body} from "./HeaderComponent";
import User from "./UserComponent";
import NewComponent from "./NewComponent";

import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./store";

class App extends Component{ //class component, has state
    constructor(){
        super();        
    }  

    greetMe(name) {
        alert("Good Morning: " + name)
    }
    
    showAge(age) {
        alert("The age is showing as: " + age)
    }

    render(){
        let myvar = true;
        return( //JSX: Jsvscript XML
            <div>
                <Header/>
                {myvar ? <Body/> : ""}
                <User greetFunc={this.greetMe}
                        ageFunc={this.showAge}/>
                <Ftr display={true} msg={"Message from Index Page through passing props to Footer"}/>
                <hr/>
                <NewComponent/>
            </div>
        )
    }
}

render(<Provider store={store}>
    <App/>
</Provider>, 
document.getElementById("app"))