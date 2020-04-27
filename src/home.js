import React from 'react';
import GroupDropDown from './groupDropDown';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            groups: []
        };
    }
    componentDidMount(){
        let groupsFromApi = [];
        fetch('https://localhost:15001/groups')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                groupsFromApi = data.map((group) => { return group});
                this.setState({
                    groups: groupsFromApi
                });
            });
    }
    render(){
        return (
            <div>
                <div class="row">
                    <h2 class="h2 col-lg-12"><strong>Home</strong></h2>
                </div>
                <div class="row">
                    <span class="col-lg-12 drop-bottom">To search for products you must select a product group.</span> 
                </div>
                <GroupDropDown state = {this.state} />
            </div>
        )
    }
}

export default Home;