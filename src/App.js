import React, { Component } from 'react';
import Projects from './Components/Projects';
import uuid from 'uuid';
import AddProject from './Components/AddProject';
import './Components/App.css';
class App extends Component {
    constructor(){
        super();
        this.state={
            projects:[],
            cart: []


        }
    }

    /*addToCartHandler (id) {
        console.log(this);
        console.log(this.state.projects.filter((element) => {
            return element.id === id;
        }));
    }*/

    componentWillMount(){

        this.setState({projects :[
            {
                //id:uuid.v4(),
                id:0,
                title:'Pasta Carbonara',
                Cost: 12,
                count: 1
            },

            {
                //id:uuid.v4(),
                id:1,
                title:'Margherita Pizza',
                Cost:27,
                count: 1
            },

            {
                //id:uuid.v4(),
                id:2,
                title:'Mushroom Risotto',
                Cost:16,
                count: 1
            },
            {
                //id:uuid.v4(),
                id:3,
                title:'Panzenella',
                Cost:10,
                count: 1
            },
            {
                //id:uuid.v4(),
                id:4,
                title:'Bruschetta',
                Cost:10,
                count: 1
            },
            {
                //id:uuid.v4(),
                id:5,
                title:'Tiramisu',
                Cost:6,
                count: 1
            }
        ]});
    }
    handleAddProject(project){


        for(var i = 0; i < this.state.cart.length; i++) {
            if(this.state.cart[i].id === project.id) {
                console.log("id of cart: " ,this.state.cart[i].id);
                project['count']++;
                break;

            }
        }

        if(i === this.state.cart.length) {
            this.state.cart.push(project);
        }
        this.forceUpdate()
        // this.state.cart.push(project)

    }
    handleDeleteProject(item){

        for(var i = 0; i < this.state.cart.length; i++) {
            if(this.state.cart[i].id === item.id) {
                if(item.count > 0) {
                    item.count--;
                } else {
                    this.state.cart.splice(i, 1);
                    break;
                }
            }
        }

        this.forceUpdate();
    }
    render() {
        return (
            
            
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">

                    <Projects addToCartHandler={this.handleAddProject.bind(this)} projects={this.state.projects} />
            </div>

                
                    <div className="col-md-6">
                    <div className="form-group">
                <AddProject cartItems={this.state.cart} onDelete={this.handleDeleteProject.bind(this)}/>
            </div>
            </div>
            </div>
            </div>
            



        );
    }
}

export default App;