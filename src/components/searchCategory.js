import React from "react";

class searchCategory extends React.Component {



    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        return (
            <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Right-aligned menu
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
        )
    }
}

export default searchCategory;