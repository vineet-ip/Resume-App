import React from 'react';
import Main from './Main';
import From from './form';


export default class Sections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
        this.handleData = this.handleData.bind(this);
        this.experienceCard = this.experienceCard.bind(this);
        this.onExperienceCardShow = this.onExperienceCardShow.bind(this);
        this.showIcons = this.showIcons.bind(this);
        this.hideIcons = this.hideIcons.bind(this);
        this.expClickHandle = this.expClickHandle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        var obj = Object.assign({}, this.state.data, {
            formData: nextProps.data.formData,
            styles: {
                show: nextProps.data.styles.show,
                formShow: nextProps.data.styles.formShow,
                expCardShow: nextProps.data.styles.expCardShow,
                iconsShow :nextProps.data.styles.iconsShow 
            }
        })
        this.setState({ data: obj })
    }


    handleData(value) {
        var obj = Object.assign({}, this.state.data, {
            formData: [...this.state.data.formData, value.data],
            styles: {
                show: value.data.styles.show,
                formShow: value.data.styles.formShow,
                expCardShow: value.data.styles.expCardShow,
                iconsShow : "hide"
            }
        });
        this.setState({ data: obj }, function () {
            this.props.onHandleExpData(this.state.data);
        })
    }
    showIcons() {
        var obj = Object.assign({}, this.state.data, {
            styles: {
                iconsShow: "show"
            }

        });
        this.setState({ data: obj });
    }
    hideIcons() {
        var obj = Object.assign({}, this.state.data, {
            styles: {
                iconsShow: "hide"
            }
        });
        this.setState({ data: obj });
    }


    expClickHandle(event) {
        var obj = Object.assign({}, this.state.data, {
            styles: {
                formShow: true,
                show: false,
                expCardShow: false
            }
        });
        this.setState({ data: obj }, function () {
            this.props.onHandleExpData(this.state.data);
        });
    }

    experienceCard(data) {
        return data.map((value, i) => {
            return (
                <li className="listStyle" key={i} onMouseEnter={this.showIcons} onMouseLeave={this.hideIcons}>
                    <div>
                        <h3 style={{ padding: 0, margin: 0 }}>{value.position}</h3>
                        <h4 style={{ padding: 0, margin: 0 }}>{value.company}</h4>
                    </div>
                    <div className={this.state.data.styles.iconsShow} >
                        <i className="editIcon">
                            <a className="material-icons" onClick={this.expClickHandle}>edit</a>
                        </i>
                    </div>
                </li>
            )
        })
    }
    onExperienceCardShow() {
        var obj = Object.assign({}, this.state.data, {
            styles: {
                expCardShow: false,
                formShow: true,
                show: false,
                iconsShow: "hide"
            }
        });

        this.setState({ data: obj }, function () {
            this.props.onHandleExpData(this.state.data);
        })

    }

    render() {
        return (
            <div style={{ position: "absolute", top: "51px" }}>
                <div>
                    <Main onHandleData={this.handleData} onExpCardShow={this.onExperienceCardShow} data={this.state.data} />
                    <div >
                        <ul >
                            {this.state.data.styles.expCardShow === false ? null : this.experienceCard(this.state.data.formData)}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}