import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class FormUsers extends Component
{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      theads: [
        'Imie',
        'Nazwisko',
        'Akcje'
      ]
    };
  }

  componentWillMount(){
    this.getUsers();
  }

  editUser(){
    let user = {
      imie : $("#imie").val(),
      nazwisko : $("#nazwisko").val()
    };

    let context = this;
    fetch(
      'http://localhost:8000/user', {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
          'Accept-Language' : 'application/json'
        },
        body : JSON.stringify(user)
      })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
          context.setState({
            users : response
          });
        })
        .catch(function (err) {
            console.log(err);
        });

  }

  addUser(){
    let user = {
      imie : $("#imie").val(),
      nazwisko : $("#nazwisko").val()
    };

    let context = this;
    fetch(
      'http://localhost:8000/user', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
          'Accept-Language' : 'application/json'
        },
        body : JSON.stringify(user)
      })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
          context.setState({
            users : response
          });
        })
        .catch(function (err) {
            console.log(err);
        });

  }

  getUsers(){
    let context = this;
    fetch(
      'http://localhost:8000/users', {
        method: "GET",
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
          context.setState({
            users : response
          });
        })
        .catch(function (err) {
            console.log(err);
        });
  }

  dellUser(id){
    let context = this;
    fetch(
      'http://localhost:8000/user/1', {
        method: "delete",
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
          context.setState({
            users : response
          });
        })
        .catch(function (err) {
            console.log(err);
        });
  }

  showUser(id){
    console.log("id : " + id);
  }

  render(){
    return(
      <center>
        <table>
          <thead>
            <tr>
            {
              this.state.theads.map((thead) =>
                <td> {thead} </td>
              )
            }
            </tr>
          </thead>
          <tbody>
          {
            this.state.users.map((user) =>
            <tr>
              <td>
                {user.imie}
              </td>
              <td>
                {user.nazwisko}
              </td>
              <td className="form-button-tr">
                <button onClick={this.editUser.bind(this, user.id)}> Edit </button>
                <button onClick={this.dellUser.bind(this, user.id)}> Kasuj </button>
              </td>
            </tr>
            )
          }
          </tbody>
        </table>

        <div className="addUser">
          <form>
            <label htmlFor="imie"> Imie </label>
            <input id="imie" type="text" />
            <label htmlFor="nazwisko"> Nazwisko </label>
            <input id="nazwisko" type="text" />
            <button type="button" onClick={this.addUser.bind(this)} id="dodaj"> Dodaj </button>
          </form>
        </div>

      </center>
    )
  }
}

export default FormUsers;
