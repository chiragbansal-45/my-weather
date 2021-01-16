import React from 'react';
import {Form , Col , Button, Label, Input } from 'reactstrap';


const Search = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col mt-3 mb-3">
                <Form model="city" >
                <Col sm={12} ><Label for="City" className="form-label"> City </Label></Col>
                <div className="input-group mb-3">
                    <Col ><Input type="text" className="form-control" placeholder="Enter the City" aria-label="city" aria-describedby="cityname" onChange={props.onChange} /></Col>
                    <Button className="btn btn-secondary" type="button" id="cityname" onClick={props.onClick} > search </Button>

                </div>

                </Form>

                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
export default Search;