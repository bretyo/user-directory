function DataHandler(props){
    let prev = '< Previous'
    let next = 'Next >'
    return(
        <div className='buttons'>
            <button id='previous' onClick={()=>{
                console.log(props.index  + '-----Button')
                props.goToEmployee((+props.index) - 1)}
            }>{prev}</button>
            <section>
                <button className='btnAlter'>Edit</button>
                <button onClick={props.delete} className='btnAlter'>Delete</button>
                <button className='btnAlter'>New</button>
            </section>
            <button id='next' onClick={()=>{
                console.log(props.index  + '-----Button')
                props.goToEmployee((+props.index) + 1)
            }}>{next}</button>
        </div>
    )
}

export default DataHandler