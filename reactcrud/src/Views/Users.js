
import React, {Component} from 'react';
import FormUsers from './elements/FormUsers';
import 'whatwg-fetch'
import $ from "jquery";
import fetchWrapper from 'laravel-fetch-wrapper'


class Users extends Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <h1> Users </h1>
          <FormUsers />
      </div>
    );
  }
}

export default Users;
