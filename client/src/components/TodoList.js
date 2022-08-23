import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button, Label, Input } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { selectAppliedFilter } from "../selectors";
import TodoModal from "./TodoModal";
import { connect } from 'react-redux';
import * as actions from '../actions/itemActions';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
    item: state.item,
    appliedFilter: selectAppliedFilter(state)
});

class TodoList extends Component {

     constructor(props) {
         super(props);
         this.onDeleteClick = this.onDeleteClick.bind(this);
         this.onUpdateClick = this.onUpdateClick.bind(this);
         this.onChange = this.onChange.bind(this);
        
     }
     
    componentDidMount() {

        this.props.getItemsAction(this.props.appliedFilter);
    }
    // gets all todos
    

    onDeleteClick(_id) {
        this.props.deleteItemAction(_id);
    }
    // takes the id passed from button onClick event and sends it to redux delete action

    onChange = (e) => {
        this.props.toggleTodoAction(e.target.id)
    }

    itemModalRef = null;

    onUpdateClick(_id, name) {
        if (this.itemModalRef) {
            this.itemModalRef.toggle(_id, name)
            
           }
    }

   

    render() {

        const { items } = this.props.item

        return (
            <div>
            <Container>
                            
                <ListGroup>
                    <TransitionGroup className="shopping-list">

                        {items.map(({ _id, name, completed }) => (                        
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    
                                    
                                    <Label check>
                                        <Input 
                                           
                                            type="checkbox"
                                            checked={ completed }
                                            id={ _id }
                                            onChange={ this.onChange }
                                        />
                                    </Label>

                                    <Button
                                        color="primary"
                                        outline
                                        style={{marginLeft: "1rem"}}
                                        onClick={ () => this.onUpdateClick(_id, name) }
                                    > Update </Button>

                                    <Button
                                        className="remove-btn" 
                                        style={{marginLeft: "1rem"}}
                                        color="danger"
                                        size="sm"
                                        onClick={ () => this.onDeleteClick(_id) }                                   
                                    >&times;</ Button>      
                                    {name}


                                    
                                   
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                         
                    </TransitionGroup>
                </ListGroup> 
                         
             </Container>
             <TodoModal ref={node => this.itemModalRef = node}/>
             </div>
             
        )
    }
}

TodoList.propTypes = {
    getItemsAction: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}


export default connect(mapStateToProps, actions)(TodoList)