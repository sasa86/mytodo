import { Component } from 'react';
import { Pagination,  PaginationItem, PaginationLink } from 'reactstrap';


class PaginationTodo extends Component {


    
    render() {
        return (
            <Pagination>
                <PaginationItem>
                    <PaginationLink
                    href="#"
                    previous
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                    href="#"
                    next
                    />
                </PaginationItem>
                
            </Pagination>
        )
    }
}

export default PaginationTodo