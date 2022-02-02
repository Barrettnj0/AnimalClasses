import React, { Component } from 'react';
import { memo } from 'react/cjs/react.production.min';
import './MemoryCard.css';

class MemoryCard extends Component{
    constructor(props) {
        super(props);

        this.state = { isFlipped: false };
    }

    render() {
        var memoryCardInnerClass = "MemoryCardInner";
        if (this.props.isFlipped) {
            memoryCardInnerClass += " flipped"
        }
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/xdigitalcrafts-logo-blue-t-systems-tag.png.pagespeed.ic.ntWK5dzq1n.webp"></img>
                    </div>
                    <div className="MemoryCardFront">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        );
    }

    clickHandler() {
        this.setState({isFlipped: !this.state.isFlipped});
        console.log(this.state);
    }
}

export default MemoryCard;