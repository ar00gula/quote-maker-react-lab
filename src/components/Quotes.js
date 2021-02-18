import React, { Component } from 'react';
import QuoteCard from './components/QuoteCard'
import { connect } from 'react-redux';

class Quotes extends Component {

    render() {
        return (
            <QuoteCard />
        )
    }
}

export default connect()(Quotes)