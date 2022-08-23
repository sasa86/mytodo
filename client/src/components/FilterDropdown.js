import { Component } from "react";
import { connect } from "react-redux";
import {ButtonDropdown, DropdownToggle, Form, DropdownMenu, ListGroup, ListGroupItem, Input, Label, Button} from "reactstrap"
//import { statusChangeAction } from '../filters/filterActions'
import { getItemsAction } from '../actions/itemActions'

class FilterButton extends Component {

    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        dropBtn: false,
        filter: ''

    }

    toggle = () => {
        this.setState({
            dropBtn: !this.state.dropBtn
        })
    }

    onFilterChange (e) {
        this.setState({
            filter: e.target.name
        })
      //changes the local state
        //this.props.statusChangeAction(e.target.name)
        //changes the store state
        
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.getItemsAction(this.state.filter)
        //sends filter value
        this.toggle()
        //closes the dropdown
    }
      

    render() {
        return(
            <ButtonDropdown
                isOpen={this.state.dropBtn} 
                toggle={this.toggle}
                style={{marginBottom: '2rem'}} 
            >
                <DropdownToggle caret>
                   Filter todos
                </DropdownToggle>
                <DropdownMenu>
                    <Form onSubmit={this.onSubmit}>
                        <ListGroup>
                            <ListGroupItem>
                                <Input 
                                    type="checkbox"
                                    name="completed"
                                    onChange={this.onFilterChange}
                                    
                                />
                                <Label check >
                                Select completed
                                </Label>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Input 
                                    type="checkbox"
                                    name="uncompleted"
                                    onChange={this.onFilterChange}
                                    
                                />
                                <Label check>
                                Select uncompleted
                                </Label>
                            </ListGroupItem>
                            <Button
                                color="primary"
                                outline
                                onClick={this.applyFilter}
                            >Apply filter
                            </Button>

                        </ListGroup>
                    </Form>
                    
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filters
})

export default connect(mapStateToProps, { getItemsAction })(FilterButton)