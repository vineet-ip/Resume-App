import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
        this.positionChange = this.positionChange.bind(this);
        this.companyChange = this.companyChange.bind(this);
        this.monthChange = this.monthChange.bind(this);
        this.yearChange = this.yearChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.descripitionChange = this.descripitionChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        var obj = Object.assign({}, this.state.data, {
            styles: {
                formShow: nextProps.data.styles.formShow, //true
                show: nextProps.data.styles.show,     // false
                expCardShow: nextProps.data.styles.expCardShow
            }
        })
        this.setState({ data: obj })
    }



    positionChange(event) {
        var obj = Object.assign({}, this.state.data, {
            position: event.target.value

        })
        this.setState({ data: obj })
    }
    companyChange(event) {
        var obj = Object.assign({}, this.state.data, {
            company: event.target.value

        })
        this.setState({ data: obj })
    }
    monthChange(event) {
        var obj = Object.assign({}, this.state.data, {
            startMonth: event.target.value

        })
        this.setState({ data: obj })
    }

    yearChange(event) {
        var obj = Object.assign({}, this.state.data, {
            startYear: event.target.value

        })
        this.setState({ data: obj })
    }

    locationChange(event) {
        var obj = Object.assign({}, this.state.data, {
            location: event.target.value

        })
        this.setState({ data: obj })
    }
    descripitionChange(event) {
        var obj = Object.assign({}, this.state.data, {
            describe: event.target.value

        })
        this.setState({ data: obj })
    }

    submitForm() {
        var obj = Object.assign({}, this.state.data, {
            styles: {
                show: true,
                formShow: false,
                expCardShow: true
            }
        });
        this.setState({ data: obj }, function () {
            this.props.onHandleData(this.state);
        })
    }
    render() {
        return (
            <div>
                {/* <input type="text" placeholder="First Name" required="true" value={this.state.data.firstName} onChange={this.firstNameChange} />
                <input type="text" placeholder="Last Name" value={this.state.data.lastName} onChange={this.lastNameChange} /> */}

                <input type="text" autoComplete="off" placeholder="Position" onChange={this.positionChange} value={this.state.data.position} />
                <input type="text" autoComplete="off" placeholder="Company" onChange={this.companyChange} value={this.state.data.company} />
                <div>
                    <select onChange={this.monthChange} value={this.state.data.startMonth}>
                        <option value="Start Month">Start Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <input type="number" autoComplete="off" placeholder="Start Year" onChange={this.yearChange} value={this.state.data.startYear} />
                </div>
                <input type="text" autoComplete="off" placeholder="Location" onChange={this.locationChange} value={this.state.data.location} />
                <textarea rows="4" cols="50" placeholder="Describe what you do." onChange={this.descripitionChange} value={this.state.data.describe}></textarea>
                <input type="button" onClick={this.submitForm} value="Done" />
            </div>
        )
    }
}