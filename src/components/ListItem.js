import React, {Component} from 'react';
import {purple50} from 'material-ui/styles/colors';
import {DragSource} from 'react-dnd';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

import {store} from '../index';
import {deleteItem} from '../actions/items';
import {ItemTypes} from "../itemTypes";

const ItemWrapper = styled.div`
    margin: 10px 0;
    padding: 4px 7px;
    background: ${purple50};
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
`;

const ItemTitle = styled.h3`
    font-weight: 400;
    font-size: 1.3em;
    margin: 8px 0 0 0;
`;

const cardSource = {
    beginDrag(props) {
        return {state: props.state, id: props.id};
    }
};

function collect (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class ListItem extends Component {
    handleDelete () {
        store.dispatch(deleteItem(this.props.id));
    }

    render () {
        const chipStyle={
            opacity: this.props.isDragging ? 0.5 : 1,
        };

        return this.props.connectDragSource(
            <div className={this.props.isDragging ? 'dragging' : 'draggable'}>
                <ItemWrapper style={chipStyle}>
                    <ItemTitle>
                        {this.props.children}
                    </ItemTitle>
                    <IconButton onClick={this.handleDelete.bind(this)} style={{ width: 40, height: 40}} iconStyle={{ width: 18, height: 18}}>
                        <ContentClear/>
                    </IconButton>
                </ItemWrapper>
            </div>
        );
    }
}

ListItem = DragSource(ItemTypes.ITEM, cardSource, collect)(ListItem);

export default ListItem;