import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Default extends Component {

    constructor() {
        super();
        this.state={
            posts:[]

        }

    }


componentDidMount() {
  let id=this.props.match.params.id;
  localStorage.setItem('userId',id);
    axios.get('https://jsonplaceholder.typicode.com/posts?userId='+id+'&skip=0&limit=10')
      .then(result => {
      var data = result.data;
      this.setState({posts:data})
            
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
            Lists of Posts
            <table class="table table-striped">
              <tbody>
                
                {this.state.posts.map((data,index)=>
                  <tr>
                  
                  <Link to={"/detailPost/"+data.id}><td>{data.title}</td></Link>
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