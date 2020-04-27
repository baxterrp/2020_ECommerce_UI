import React from 'react';

class GroupDropDown extends React.Component{
    constructor() {
        super();
    }
    render(){
        let groups = this.props.state.groups;
        let optionItems = groups.map((group) => {
            console.log("Found a group");
            return <option id={group.id} value={group.id}>{group.name}</option>
        });
        return (
            <div>
                <div class="row">
                    <div class="col-lg-6">
                        <select class="form-control">
                            <option>Please Select a Product Group</option>
                            {optionItems}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupDropDown;