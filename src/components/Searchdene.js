import React from "react";
import { UncontrolledDropdown, Button, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap"

const Searchdene = (props) => {

    return (
        <div className="container" >
            <UncontrolledDropdown group className="col-md-3">
                <Button color="primary">
                    Film Kategorisi
                </Button>
                <DropdownToggle
                    caret
                    color="primary"
                />
                <DropdownMenu>
                    <DropdownItem header>
                        Kategoriler
                    </DropdownItem>
                    <DropdownItem onClick={(event) => props.filter("")}>
                        Tümü
                    </DropdownItem>
                    <DropdownItem onClick={(event) => props.filter("horror")}>
                        Horror
                    </DropdownItem>
                    <DropdownItem onClick={(event) => props.filter("action")}>
                        Action
                    </DropdownItem>
                    <DropdownItem onClick={(event) => props.filter("comedy")} >
                        Comedy
                    </DropdownItem>
                    <DropdownItem onClick={(event) => props.filter("science fiction")}>
                        science fiction
                    </DropdownItem>
                    <DropdownItem onClick={(event) => props.filter("adventure")}>
                        adventure
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown> </div>
    );


};

export default Searchdene;
