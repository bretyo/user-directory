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
        this.deleteIndex = this.deleteIndex.bind(this);
    }

    componentDidMount(){
        this.goToEmployee(0);
    }

    goToEmployee(num){
        if(num >= 0 && num < this.state.data.length){
            let person = this.state.data[num]
            this.setState({
            dataIndex: num,
            id: person.id,
            name: `${person.name.first} ${person.name.last}`,
            city: person.city,
            country: person.country,
            employer: person.employer,
            title: person.title,
            favoriteMovies: person.favoriteMovies
            })
        }

        
    }

    deleteIndex(){
        if(this.state.dataIndex < this.state.data.length){
            this.goToEmployee(this.state.dataIndex + 1)
            this.setState({ 
                data: [...this.state.data.slice(0,this.state.dataIndex), ...this.state.data.slice(this.state.dataIndex + 1)], 
                dataIndex: this.state.dataIndex
            } )
        }
    }

    render(){
        console.log(this.state.data)
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
                <DataHandler 
                    goToEmployee={this.goToEmployee} 
                    delete={this.deleteIndex}
                    index={this.state.dataIndex}
                    data={this.state.data}
                    />
            </div>
        )
    }
}

export default Display