import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.createUser = this.createUser.bind(this);
        this.createPass = this.createPass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            create_username: '',
            create_password: '',
            reg_completed: false
        }
    }

    createUser(e) {
        this.setState({
            create_username: e.target.value
        });
    }

    createPass(e) {
        this.setState({
            create_password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Username: ${this.state.create_username}`);
        console.log(`Password: ${this.state.create_password}`);

        this.setState({
            create_username: '',
            create_password: '',
            reg_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Register as a User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.create_username}
                                onChange={this.createUser}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.create_password}
                                onChange={this.createPass}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}
