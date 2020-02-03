import axios from "axios";

const API_STRING = "https://api.github.com/users/";

export class PersonListGet extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(API_STRING).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.length > 0 &&
          this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    );
  }
}
// —————————————————————————————————————————————————————————————————————————————————————————————————————————————————