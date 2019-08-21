import React, {Component, Fragment} from 'react';

class EditCustomer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            name: null,
            contact: null
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps !== this.props)&&(this.props.customer)) {
            this.setState({name: this.props.customer.name, contact: this.props.customer.contact})
        }
    }


    render() {
        if (!this.props.customer) {
            return <p> Not found </p>
        }

        return (
            <Fragment>
            <h1 style={{paddingTop:10, textAlign:"center"}}> Edit or Delete Customer details </h1>
              <center>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Number of visits</th>
                    </tr>
                    <tr>
                        <td>{this.props.customer.name}</td>
                        <td>{this.props.customer.contact}</td>
                        <td>{this.props.customer.noOfVisits}</td>
                        <td><button onClick={this.handleEdit} style= {{backgroundColor:"#4CAF50", color:"white"}}>Edit</button></td>
                        <td><button onClick={this.handleDelete} style= {{backgroundColor:"#4CAF50", color:"white"}}>Delete</button></td>
                    </tr>
                    </tbody>
                </table>
                { this.state.editable ?
                    <div> <br />
                    <form onSubmit={this.handleSubmit}>
                      <div style={{marginTop: 30, width: 350, backgroundColor: "white", border: '3px solid black'}}>
                        <h4> Edit customer </h4>
                        <label htmlFor="name"> Name: </label>
                        <input type="text" defaultValue={this.props.customer.name} name="name" /> <br />
                        <label htmlFor="contact"> Phone number: </label>
                        <input type="text" defaultValue={this.props.customer.contact} name="contact"/> <br/>
                        <input type="submit" value="Save"/>
                        </div>
                    </form>
                    </div> : null

                }
                </center>
            </Fragment>
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleEdit();
        const customerSend = {
            id: this.props.customer.id,
            name: event.target.name.value,
            contact: event.target.contact.value,
            noOfVisits: this.props.customer.noOfVisits
        };
        this.props.handleCustomerUpdate(customerSend)
    }

    handleEdit() {
        this.setState({editable: !this.state.editable})
    }

    handleDelete() {
        fetch('http://localhost:8080/customers/' + this.props.customer.id, {method: "DELETE"}).then(() => window.location = "/customers")
    }
};

export default EditCustomer;
