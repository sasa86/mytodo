import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../actions/itemActions";
import { v4 as uuidv4 } from 'uuid';


class TodoModal extends Component {
    
    state = {
        id: null,
        modal: false,
        name: 'Add to todo list',
        header: 'Add your todo',
        title: 'Todo',
        btnName: 'Add to list',
        isUpdating: false
    }

    toggle = (_id, name) => {
        
        if (_id) {
            
            this.setState({
                id: _id,
                modal: !this.state.modal,
                isUpdating: !this.state.isUpdating,
                name: name,
                header: 'Update your todo',
                title: 'Update todo',
                btnName: 'Update'
            })
         
        } else {
            this.setState({
            modal: !this.state.modal
            
            })
        }
        
        //console.log(this.state.name)
    }

    onSubmit = (e) => {

        if (this.state.isUpdating === true) {
            e.preventDefault();        
       
            const id = this.state.id
            const name = this.state.name
        
        
        this.props.updateItemAction(id, name)
        //console.log(updatedTodo)
        this.setState({
            isUpdating: !this.state.isUpdating
        })
        
        this.toggle();
        //closes the modal
        
        } else {
             e.preventDefault();        
        const newTodo = {
            
            name: this.state.name
        }
        this.props.addItemAction(newTodo)
        // adds todo via addItemAction
        this.toggle();
        //closes the modal
        }


       
    }

    

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    // gets the name parameter from onChange event and changes the value in state 

    render() {
        return (
            <div>
                

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>{this.state.header}</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">{this.state.title}</Label>
                                <Input 
                                    type="text" 
                                    name="name"
                                    id={this.state.id}
                                    placeholder={this.state.name} 
                                    onChange={this.onChange} 
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block >
                                    {this.state.btnName}
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        ) 
    }


}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, actions, null, {forwardRef: true})(TodoModal)