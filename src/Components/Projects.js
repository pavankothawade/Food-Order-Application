import React, { Component } from 'react';
import ProjectItems from './ProjectItems';

class Projects extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.setState({projectItems: this.props.projects});
        //console.log(this.state.projectItems)
    }

    deleteProject(id){
        this.props.onDelete(id);

    }

    componentWillReceiveProps() {
        this.setState({projectItems: this.props.projects});
    }

    handleAdd(id)
    {
        this.props.addToCartHandler(id);
    }



    render() {
      //  let addToCartHandler = this.props.addToCartHandler;
        this.state.projectItems = this.state.projectItems.map((project) => {
           return <ProjectItems addToCartHandler={this.handleAdd.bind(this)} key={project.title} project={project}/>
        });
        return (
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                {this.state.projectItems}
                </tbody>
            </table>
        );
    }
}

export default Projects;
