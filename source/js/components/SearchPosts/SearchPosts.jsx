export default class ContactMsg extends Component {
  constructor(props) {
    this.state = {
      serachTerm: "",
    };
  }

  onChange(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  searchPosts(searchTerm) {}

  render() {
    return (
      <div>
        <input onChange={this.onChange} placeholder="Search Posts">
          {this.state.searchTerm}
        </input>
        <button type="submit" onClick={this.boundSearch} />
      </div>
    );
  }
}
