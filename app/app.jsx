var React = require('react');
var ReactDOM = require('react-dom');

var Content = React.createClass({
	getDefaultProps:function(){
		return {
			company:"Wipro Technologies",
			author:"Nikunj Agarwal"
			}
	},
	getInitialState: function(){
		return {
			company:this.props.company,
			author:this.props.author
		};
	},
	submitCompanyName:function(e){
		e.preventDefault();
		var companyName =this.refs.company.value;
		var authorName =this.refs.author.value;
		if(typeof companyName ==='string' && typeof authorName ==='string' && companyName.length >3 && authorName.length>3)
			{
				this.refs.company.value='';
				this.refs.author.value='';
				this.setState({
					company:companyName,
					author:authorName
					}); 
			}
		else
			{
				alert("Some Error in Typing");
			}
	},
	render:function(){
		var companyName =this.state.company;
		var authorName =this.state.author;
		return (
			<div>
				<h1>Hello Advance React</h1>
				<p>Company Name is {companyName}</p>
				<p>Author is {authorName}</p>
				<form onSubmit={this.submitCompanyName}>
					<div><label for="company">Company Name :</label></div>
					<div><input type="text" ref="company"/></div>
					<div><input type="text" ref="author"/></div>
					<div><button>Submit Company Name</button></div>
				</form>
			</div>
		);
	}
});
var name = "Wipro Technologies,Pritech";
var authorName = "Nikunj";
ReactDOM.render(
<Content company={name} author={authorName}/>,
  document.getElementById('reactAdvance')
);
