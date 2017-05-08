import React from 'react';
import '../styles/app.css';
import Cards from "../components/Cards";
import CardForm from '../components/CardForm';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { addCard } from '../actions/actions';
import store from '../store/store';

const switchCard = ({ cardType, name }) => {
  store.dispatch(addCard(cardType, name))
};

const Home = (props) => (
  <div className="app">
    <Cards {...props} />
    <CardForm onSubmit={data => {switchCard(data)}} />
  </div>
);

const mapStateToProps = state => ({
  cards: state.cards
});

export default withRouter(connect(mapStateToProps)(Home));
