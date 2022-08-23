import { Component } from "react";
import { CardFooter, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import * as actions from "../actions/itemActions";

class Footer extends Component {

    constructor(props){
        super(props);
        this.markAll = this.markAll.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }

    markAll() {
        this.props.allCompletedAction();
    }

    clearCompleted() {
        this.props.clearCompletedAction();
    }



    render(){
        return (
            <div>
                <CardFooter style={{bottom: 0, position: "absolute", width: "100%"}}>
                    <Button
                        onClick={this.markAll}
                        color="primary"
                        outline
                    >
                        Mark all completed
                    </Button>
                    {' '}
                    <Button
                        onClick={this.clearCompleted}
                        color="danger"
                        outline
                    >
                        Clear completed
                    </Button>
                    
                </CardFooter>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, actions)(Footer)