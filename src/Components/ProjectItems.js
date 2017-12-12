import React, { Component } from 'react';


class ProjectItems extends Component {
   deleteProject(id){
      this.props.onDelete(id);
      // console.log('test');
   }

   handleAdd(id) {

this.props.addToCartHandler(id);
   }

    render() {
        return (
                        <tr>
                            <td>{this.props.project.title}</td>
                            <td>{this.props.project.Cost}</td>
                            <td><button onClick={this.handleAdd.bind(this, this.props.project)}>Add</button></td>
                        </tr>
        );
    }
}

export default ProjectItems;
