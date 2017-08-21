var root = (
	<ul className="myList">
	<li>Content of node1</li>
	<li>Content of node2</li>
	</ul>
);
var node1 = Recact.createElement('li', null, 'Content');
var rootNode = React.createElement('ul', {
	className: 'myList'
}, node1, node2);

class Hello extends React.Component {
	render() {
		return (
			<div>hello</div>
		);
	}
}
React.render(<Hello/>
	document.getElementById('container')
);
var msg = "Heool";
<h1>{msg}</h1>
var msg = <h1 width="10px">Hello</h1>
var hello = <h1 height="100" data-test="test" test="test">Hello</h1>
React.render(hello, document.getElementById('example'));
var props = {};
props.foo = "1";
props.bar = "2";
<h1 {...props} foo="2"></h1> < h1 style = {
	{
		color: '#ff000000',
		fontSize: '15px'
	}
} > Hello ReactJS. < /h1>
var headStyle = {
	color: '#ff0000',
	fontSize: '14px'
};
var node = <h1 style={headStyle}>Hello</h1>;
fontSize: '14px'
'font-size': '14'
px

function testButtonClick() {
	alert('test');
}
var button = <button onClick={testButtonClick.bind}></button>
React.render(button, document.getElementById('example'));