import React, { Component } from 'react';
//import Projects from './Components/Projects';
//import uuid from 'uuid';
//import AddProject from './Components/AddProject';
//import './App.css';
class Main extends Component {
    constructor(){
        super();
        this.state={
            projects:[]


        }
    }

    componentWillMount(){

        this.setState({projects :[
            {
                //id:uuid.v4(),
                id:1,
                title:'Pasta Carbonara',
                Cost: $12,
                count: 0
            },

            {
                //id:uuid.v4(),
                id:2,
                title:'Margherita Pizza',
                Cost:$27,
                count: 0
            },

            {
                //id:uuid.v4(),
                id:3,
                title:'Mushroom Risotto',
                Cost:'$16',
                count: 0
            }
            {
                //id:uuid.v4(),
                id:4,
                title:'Panzenella',
                Cost:'$10',
                count: 0
            }
            {
                //id:uuid.v4(),
                id:5,
                title:'Bruschetta',
                Cost:'$10',
                count: 0
            }
            {
                //id:uuid.v4(),
                id:6,
                title:'Tiramisu',
                Cost:'$6',
                count: 0
            }
        ]});
    }
   /* handleAddProject(project){
        console.log(project);
        let projects=this.state.projects;
        projects.push(project);
        this.setState({projects:projects});

    }
    handleDeleteProject(id){
        let projects=this.state.projects;
        let index=projects.findIndex(x=>x.id===id);
        projects.splice(index,1);
        this.setState({projects:projects});
    }
    */
    render() {
        return (
            <div className="App">
                <p>this.state.projects</p>

            </div>
        );
    }
}

export default App;
