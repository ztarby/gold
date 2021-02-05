declare var require: any

var React = require('react');
var Reactdom = require('reactdom');

export class testr extends React.Compoment {
    render() {
        return (
            <h1> ts </h1>

            );
    }

}

Reactdom.render(<testr />, document.getElementById('root'));