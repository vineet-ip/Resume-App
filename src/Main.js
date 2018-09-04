import React from 'react';
import Form from './form';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data
        }
        this.addOneMoreProject = this.addOneMoreProject.bind(this);
        this.onHandlingData = this.onHandlingData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        var obj = Object.assign({}, this.state.data, {
            formData: nextProps.data.formData,
            styles: {
                formShow: nextProps.data.styles.formShow,
                show: nextProps.data.styles.show
            }
        })
        this.setState({ data: obj })
    }


    addOneMoreProject() {
        var obj = Object.assign({}, this.state.data, {
            formData :[],
            styles: {
                show: false,
                formShow: true,
                
            }
        })
        this.setState({ data: obj }, function () {
            this.props.onExpCardShow();
        })
    }

    onHandlingData(value) {
        console.log(value);
        var obj = Object.assign({}, this.state.data, {
            styles: {
                show: value.data.styles.show, 
                formShow: value.data.styles.formShow ,
            }

        });
        this.setState({ data: obj }, function () {
            this.props.onHandleData(value);
        })

    }

    render() {
        return (
            <div>
                {this.state.data.styles.formShow === true ? <Form onHandleData={this.onHandlingData} data={this.state.data} /> : null}
                {this.state.data.styles.show === false ? null :
                    (<input type="button" value="Add One More Project" onClick={this.addOneMoreProject} />)}
            </div>
        );
    }

}