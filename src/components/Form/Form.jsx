import { Component } from "react";
import shortid from 'shortid';
import styles from './Form.module.css';


class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        licence: false
    };

    nameInputId = shortid.generate();
    
    handleChange = event => {
        const { name, value } = event.currentTarget;

          this.setState({
          [name]: value,
        })
    }
    
    handleSubmit = event => {
        event.preventDefault ()
        console.log('log in Form: ', this.state);
        this.props.propOnSobmit(this.state);
        this.reset();
    }

    handleLicence = event => {
        console.log(event.currentTarget.checked)

        this.setState({ licence: event.currentTarget.checked})
    }

    reset = () => {
        this.setState({
            name: '',
            tag: '',    
        })
    }


    render() {

        return (

            <form 
            onSubmit={this.handleSubmit}
            className={styles.form}
            >
              <label htmlFor={this.nameInputId}>
               Name <input 
                type="text" 
                name="name"
                value={this.state.name} 
                onChange={this.handleChange}
                id={this.nameInputId}
                />
              </label>
              <br/>
              <label htmlFor={this.nameInputId}>
                Nickname <input 
                type="text" 
                name="tag"
                value={this.state.tag}
                onChange={this.handleChange}
                id={this.nameInputId}
                />
              </label>
              <br/>

              <label htmlFor="">
                  <input 
                  type="radio" 
                  name="experience" 
                  value="junior"
                  checked={this.state.experience === 'junior'}
                  onChange={this.handleChange}
                  /> Junior
              </label>
              <label htmlFor="">
                  <input 
                  type="radio" 
                  name="experience" 
                  value="middle"
                  checked={this.state.experience === 'middle'}
                  onChange={this.handleChange}
                  /> Middle
              </label>
              <label htmlFor="">
                  <input 
                  type="radio" 
                  name="experience" 
                  value="senior"
                  checked={this.state.experience === 'senior'}
                  onChange={this.handleChange}
                  /> Senior
              </label>
              <br/>
             
              <label>
                  <input 
                  type="checkbox" 
                  name="licence" 
                  checked={this.state.licence}
                  onChange={this.handleLicence}
                  />
                  policy......
              </label>
              <button 
              type="submit"
              disabled={!this.state.licence}
              >Отправить</button>
            </form>
        )
    }
}

export default Form;
