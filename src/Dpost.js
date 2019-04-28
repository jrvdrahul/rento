import React, {Component} from 'react';
import axios from 'axios';

class Default extends Component {

    constructor() {
        super();
        this.state={
            user:[],
            comments:[]

        }
    }


componentDidMount() {

  var id=this.props.match.params.id;

    axios.get('https://jsonplaceholder.typicode.com/posts/'+id+'')
      .then(result => {
      var data = result.data;
      this.setState({user:[result.data]})

    })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }


  fetchComments(){

    var id=this.props.match.params.id;

      axios.get('https://jsonplaceholder.typicode.com/comments?postId='+id+'')
      .then(result => {
      var data = result.data;
      this.setState({comments:result.data})

    })
      .catch(error => this.setState({
        error,
        isLoading: false
      })); 
  }


  delete(){
    var userID=localStorage.getItem('userId');
    var id=this.props.match.params.id;

    axios.delete('https://jsonplaceholder.typicode.com/posts/'+id+'')
      .then(result => {
      var data = result.data;
      this.props.history.push("/posts/"+userID);
      
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
            Post Details
            <hr />  
                {this.state.user.map((data,index)=>
                  <tr>
                  <td>Title:{data.title}</td>
                  <td>Body:{data.body}</td>
                  
                  </tr>
                )}

                <hr />
                <span onClick={()=>this.delete()}>delete post</span>
                 <br />   
              <span onClick={()=>this.fetchComments()}>Load Comments</span>


              <table class="table table-striped">
              <tbody>
              {this.state.comments.map((data,index)=>
                  <tr>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                  
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