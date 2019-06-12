import React from 'react';

class test extends React.Component {
  state = {
    data: [],
    tags: []
  };

  onChange = e => {
    // adds the filter the user selects into the array of filters
    if (!this.state.tags.includes(e.target.value)) {
      this.setState(
        {
          tags: [...this.state.tags, e.target.value]
        },
        () => {
          this.filterData();
        }
      );
      // if its not not in the array, that means its already in the array, so
      // when the user selects it again, it pops it out of the array
    } else {
      this.setState(
        {
          tags: this.state.tags.filter(t => t !== e.target.value)
        },
        () => {
          this.filterData();
        }
      );
    }
  };

  filterData = () => {
    this.setState({
      data: this.state.data.filter(d => this.state.tags.includes(d.resource))
    });
  };

  render() {
    return (
      <>
        <label>Shower</label>
        <input type="checkbox" value="shower" onChange={this.onChange} />
        <label>Free Groceries</label>
        <input
          type="checkbox"
          value="Free Groceries"
          onChange={this.onChange}
        />
      </>
    );
  }
}

export default test;
