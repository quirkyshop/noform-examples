import React, { Component } from 'react';
import Core from './exmaples/Core';
import Status from './exmaples/Status';
import Condition from './exmaples/Condition';
import Validation from './exmaples/Validation';
import Antd from './exmaples/Antd';
import Dialog from './exmaples/Dialog';
import './App.less';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.exmaplesMap = {
            'Core': Core,
            'Status': Status,
            'Condition': Condition,
            'Validation': Validation,
            'Antd': Antd,
            'Dialog': Dialog
        };

        this.examplesOptions = Object.keys(this.exmaplesMap).map((exampleKey) => {
            return { label: exampleKey, value: this.exmaplesMap[exampleKey] }
        });

        this.state = {
            examples: Object.keys(this.exmaplesMap)
        };
    }

    renderExamples = () => {
        // const examples = [Core, Status, Condition, Validation, Antd, Dialog];
        const { examples } = this.state;
        const eles = examples.map((exampleKey) => {
            const ele = React.createElement(this.exmaplesMap[exampleKey]);
            return (<div className="example-item-wrapper">
                {ele}
            </div>);
        });
        return eles;
    }

    handleExampleChange = (examples) => {
        this.setState({ examples });
    }

    renderSelector = () => {
        const selector = <span className="example-selector">
            <CheckboxGroup value={this.state.examples} onChange={this.handleExampleChange}>{this.examplesOptions.map(({ label }) => {
                return <Checkbox value={label}>{label}</Checkbox>;
            })}</CheckboxGroup>
        </span>

        return <div className="example-selector-wrapper">
            <span>Examples: </span>
            {selector}
        </div>
    }

    render() {
        return (
            <div>
                {this.renderSelector()}
                <div className="app-wrapper" >                    
                    {this.renderExamples()}
                </div>
            </div>
        );
    }
}

export default App;
