import React, {Component} from 'react';
import Cards from './Cards';
import CardCreator from './CardCreator';


export default class Homepage extends Component {
    render () {
        return (
            <div>
                <CardCreator/>
                <Cards/>
            </div>
        );
    }
}