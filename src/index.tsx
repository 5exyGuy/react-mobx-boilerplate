import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react"
import { action, makeObservable, observable, runInAction } from 'mobx';

@observer
class App extends React.Component {
	@observable private test: string = 'sss';
	
	public constructor(props: {}) {
		super(props);
		makeObservable(this);
	}

	@action
	private setTest(event: React.ChangeEvent<HTMLInputElement>): void {
		runInAction(() => {
			this.test = event.target.value;
			console.log(this.test);
		});
	}

	public render(): JSX.Element {
		return (<div>
			<p>{this.test}</p>
			<p><input onChange={(e) => this.setTest(e)} /></p>
		</div>);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));