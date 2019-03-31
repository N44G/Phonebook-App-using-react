import React, { Component } from 'react';

import './App.css';
import Table from './table'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cname:"",
      cnumber:"",
      data:[
        
      ]
      
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  
  Delete=(id) => {
    var data=this.state.data;
    var updated_data=data.filter(object =>
      object.cname!=id
     )
    console.log(updated_data,id,"im beibg called");
    this.setState({data:updated_data});
  }
  onChange(event){
    //console.log("im able to change","target-->",event.currentTarget.value);
    this.setState(
      {
        [event.currentTarget.name]:event.currentTarget.value
      }
    );
    //console.log(this.state)

  };
  
  onClick(){
    const newContact={
      "cname" : this.state.cname,
      "cnumber": this.state.cnumber
      
    };
    
    
    var filtered_data=this.state.data.filter(json => json.cname==newContact.cname )
    //console.log(filtered_data);
    if ( filtered_data.length<1 ) {
      //console.log(filtered_data.cname , newContact.cname);
    
    
    this.state.data.push(newContact);
    this.setState({data:this.state.data})
    //e.preventDefault();
  }
  else{
    this.setState({repeated:"Contact with the name already exists"});
    //alert("repeated name")
  }

}
  render() {
    return (


<div className="Phonebook">
  

    <div className="container">
      <div >
      
        <div className="col-md-4">
          < input type="text" className="form-control" onChange={ this.onChange} 
                 name="cname" placeholder="Enter contact name"/>
        </div>
        <div className="col-md-4 ">
          < input className="form-control" onChange={ this.onChange } 
               type="text"   name="cnumber" placeholder="Enter phonenumber"/>
        </div>
        <div className="col-md-4">
          <button className="btn btn-dark mt-10"  onClick={ this.onClick} >Add</button>
        </div>
      <div className="container "  ><p className="text-danger">{this.state.repeated }</p> </div>  
      </div>
      <button className="btn btn-dark m-3">Contact List</button>
      <table className="table table-striped table-hover mt-9">
        <thead>
          <tr>
            <th scope="col">contact name </th>
            <th scope="col">Contact phone number</th>
            <th scope="col">action </th>
          </tr>
        </thead>
        <tbody id="tbody">
        <Table data={this.state.data} />
        <tr>
          
          <td>
            
          </td> 
        </tr>
        
        </tbody>
      </table>
    </div>
 
  </div>          


    );
  }
}

export default App;
