import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class App extends Component {
	@observable test = 'Hello world!';

	@action
	onChange(event) {
		this.test = event.target.value;
	}

	render() {
		return (<div>
			<h1>{this.test}</h1>
			<h1><input onChange={this.onChange.bind(this)}></input></h1>
		</div>);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));