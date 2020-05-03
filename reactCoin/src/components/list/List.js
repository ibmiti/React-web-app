import React from 'react';

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null,
        };
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        return (
            <div>text</div>
        );
    }
}

export default List;