import React from 'react';
import axios from 'axios';
import '../styles/app.css';
import Cards from "../components/Cards";
import CardForm from '../components/CardForm';
import CreateAccountForm from '../components/CreateAccountForm';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { addCard, addUser } from '../actions/actions';
import store from '../store/store';

//the name of this function can change
const switchCard = ({ cardType, name }) => {
  store.dispatch(addCard(cardType, name));
};

const createAccount = ({ email, username, password, confirmPassword }) => {
  //needs to be changed
  axios({
    method: 'post',
    url: 'http://localhost:8000/trip-planner/users',
    data: {
      email,
      username,
      password,
      confirmPassword
    }
  });
  store.dispatch(addUser(email, username, password, confirmPassword));
};

const Home = (props) => (
  <div className="app">
    <Cards {...props} />
    <CreateAccountForm onSubmit={data => {createAccount(data)}} />
    <CardForm onSubmit={data => {switchCard(data)}} />
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
  cards: state.cards
});

export default withRouter(connect(mapStateToProps)(Home));
