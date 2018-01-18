import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {lightBlue100} from 'material-ui/styles/colors';
import { Field, reduxForm,} from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import uniqueId from 'lodash.uniqueid';

import {store} from "../index";
import {addCard, handleExpand} from "../actions/cards";

const style={
    width: 350,
    margin: 20,
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: lightBlue100,
    boxShadow: '3px 3px 5px 0px rgba(0,0,0,0.4)'
};

const dividerStyle={
    backgroundColor: 'black',
    opacity: '0.3'
};

const fieldStyle={
    borderColor: 'dimGrey'
};

//validation for the form
const required = value => (value === undefined ? 'Пожалуйста, введите название' : undefined);
const invalidName = value => (value.length > 20 ? 'Название не должно содержать более 20 символов' : undefined);


class CardCreator extends Component {
    submit = (values) => {
        store.dispatch(addCard({name: values.cardName, id: uniqueId()}));
        store.dispatch(handleExpand(!this.props.cards.expanded));
        this.props.reset();
    };

    //so that validation works on form reset
    componentWillReceiveProps(nextProps) {
        if (this.props.popUpState !== nextProps.popUpState) {
            this.props.initialize();
        }
    };

    handleExpandChange () {
        store.dispatch(handleExpand(!this.props.cards.expanded));
    };

    render () {
        return (
            <Card style={style} expanded={this.props.cards.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
                <CardHeader title="Создай новую карточку!" subtitle="...или нет, как хочешь" actAsExpander showExpandableButton/>
                <Divider style={dividerStyle}/>
                <CardText expandable>
                    Придумайте название для карточки
                    <form onSubmit={this.props.handleSubmit(this.submit)}>
                        <Field name="cardName" component={TextField} validate={[required, invalidName]} underlineStyle={fieldStyle}/>
                    </form>
                </CardText>
            </Card>
        );
    }
}

CardCreator = connect((state) => ({cards: state.cards}))(CardCreator);

CardCreator = reduxForm({
    form: 'cardCreator',
    destroyOnUnmount: false
})(CardCreator);

export default CardCreator;