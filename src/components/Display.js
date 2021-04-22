import {Component} from 'react'
import DataHandler from './DataHandler';
import Data from '../data'

class Display extends Component{
    constructor(props){
        super(props);

        this.state = {
            dataIndex : 0,
            id : 1,
            name: 'Testname Jones',
            city: 'test',
            country: 'testland',
            employer: 'testcomp',
            title: 'test',
            favoriteMovies: [
                'test',
                'test2'
            ],
            data: [...Data]
        }

        this.goToEmployee = this.goToEmployee.bind(this);
    }

    componentDidMount(){
        this.goToEmployee(0);
    }

    goToEmployee(num){


        let person = this.state.data[num]
        this.setState({
            name: `${person.name.first} ${person.name.last}`,
            city: person.city,
            country: person.country,
            employer: person.employer,
            title: person.title,
            favoriteMovies: person.favoriteMovies
        })
    }

    render(){

        return(
            <div >
                <div id='display'>
                    <h2 className='index'>{this.state.id}/25</h2>
                    <h2 className='name'>{this.state.name}</h2>
                    <h3 className='home'>From: <span>{`${this.state.city}, ${this.state.country}`}</span></h3>
                    <h3 className='job'>Job Title: <span>{this.state.title}</span></h3>
                    <h3 className='employer'>Employer: <span>{this.state.employer}</span></h3>
                    <br/>
                    <h3 className='movies'>Favorite Movies:</h3>
                    <ol>
                        {this.state.favoriteMovies.map((element,index)=>{
                            return <li key={index}>{element}</li>
                        })}
                    </ol>
                </div>
                <DataHandler/>
            </div>
        )
    }
}

export default Display