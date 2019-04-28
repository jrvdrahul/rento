import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


class Default extends Component {

    constructor() {
        super();
        this.state={
            user:[]

        }
    }

  
componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
      var data = result.data;
      this.setState({user:result.data})

    })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  
    render() {
      
        return (
            <div className="card">
            <div class="card-body">
            Users
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Blogpost</th>
                </tr>
              </thead>
              <tbody>
                
                {this.state.user.map((data,index)=>
                  <tr>
                  <td>{data.name}</td>
                  <td>{data.company.name}</td>
                  <td><Link to={"./posts/"+data.id}>Posts</Link></td>
                  </tr>
                )}
                  
                
                  
                
                
              </tbody>
            </table>
            </div>
            </div>

        );
    }
}

export default Default;