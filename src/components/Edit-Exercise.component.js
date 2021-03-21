import axios from 'axios';
import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
export default class EditExercise extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:5000/exercises/"+this.props.match.params.id)
                .then(res => {
                    this.setState({
                        username:res.data.username,
                        description: res.data.description,
                        duration:res.data.duration,
                        date:new Date(res.data.date)
                    })
                })
                .catch(err => console.log(err))


        axios.get("http://localhost:5000/users/")
        .then(res => {
            if(res.data.length > 0) {
                this.setState({
                    users:res.data.map(user => user.username),
                   
                })
            }
        })
    
    }
    onChangeUsername = (e) => {
        this.setState({
            username:e.target.value
        })
    }
    onChangeDescription = (e) => {
        this.setState({
            description:e.target.value
        })
    }
    onChangeDuration = (e) => {
        this.setState({
            duration:e.target.value
        })
    }
    onChangeDate = (date) => {
        this.setState({
            date:date
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();

        const exercise = {
            username:this.state.username,
            description :this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        
        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        setTimeout(() => {
            window.location = '/'; 
        }, 4000);
        console.log(exercise);
    }


    render() {
        return (
            <div>                
                 <h3 className="alert alert-primary" role="alert">Edit Exercise log</h3>
                 <form onSubmit={this.onSubmit} method="post">
                     <div className="form-group">
                         <label>Username: </label>
                         <select ref="userInput"
                         required
                         className="form-control"
                         value={this.state.username}
                         onChange={this.onChangeUsername}>
                             {
                                 this.state.users.map((user, index) => {
                                    return <option key={user} value={user}>{user}</option>
                                 })
                             }
                         </select>                         
                     </div>
                     <div className="form-group">
                         <label>Description</label>
                         <input type="text"
                             required
                             className="form-control"
                             value={this.state.description}
                             onChange={this.onChangeDescription}
                         />
                     </div>
                     <div className="form-group">
                         <label>Duration in minutes: </label>
                         <input type="text"
                             required
                             className="form-control"
                             value={this.state.duration}
                             onChange={this.onChangeDuration}
                         />
                     </div>
                     <div className="form-group">
                             <label>Date:</label>
                             <div>
                                 <DatePicker 
                                     selected={this.state.date}
                                     onChange={this.onChangeDate}
                                 />
                             </div>
                     </div>
                     <button type="submit" className="btn btn-primary">Edit Exercise log</button>
                 </form>
            </div>
        )
    }
}