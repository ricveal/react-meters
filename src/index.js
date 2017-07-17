import React, { Component } from 'react';

export default class SVG extends Component {

    getStyle = () => {
        return {
            name: 'pepito'
        };
    }

    render() {
        return (
            <div class="demo">
                <svg class="progress" width="120" height="120" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#e6e6e6" stroke-width="12" />
                    <circle class="progress__value" cx="60" cy="60" r="54" fill="none" stroke="#f77a52" stroke-width="12" />
                </svg>
            </div>
        );
    }
}