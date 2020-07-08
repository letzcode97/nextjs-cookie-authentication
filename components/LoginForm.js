class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
           email: '',
           password: ''
        };

     
    }

    handleChange = (event) => {
        const { target: { value, name } } = event;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(this.state);
      }
    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                </div>
                <button type="submit">Sign In!</button>
            </form>

        );
    }
}

export default LoginForm;