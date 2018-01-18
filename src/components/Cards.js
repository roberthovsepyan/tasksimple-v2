import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

import {store} from '../index';
import {deleteCard} from '../actions/cards';
import {deleteItems} from '../actions/items';

const buttonStyle= {
    margin: '20px 0 20px 20px',
    height: 67,
    width: 200,
    textAlign: 'center',
    boxShadow: '3px 3px 5px 0px rgba(0,0,0,0.4)'
};

class Cards extends Component {
    deleteCard (id) {
        store.dispatch(deleteCard(id));
        store.dispatch(deleteItems(id));
    };

    renderCards () {
        let buttons=[];
        this.props.cards.cards.forEach((card) => buttons.push(
            <span key={card.id}>
                <RaisedButton containerElement={<Link to={`/card/${card.id+'_'+card.name}`}/>} label={card.name} primary style={buttonStyle}/>
                <IconButton onClick={this.deleteCard.bind(this, card.id)}>
                    <ContentClear/>
                </IconButton>
            </span>));
        return buttons;
    };

    render () {
        return this.renderCards();
    }
}

Cards = connect((state) => ({cards: state.cards}))(Cards);
export default Cards;
