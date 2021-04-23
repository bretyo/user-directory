function DataHandler(props){
    let prev = '< Previous'
    let next = 'Next >'
    return(
        <div className='buttons'>
            {props.index > 0 &&<button id='previous' onClick={()=>props.goToEmployee((+props.index) - 1)}>{prev}</button>}
            <section>
                <button className='btnAlter'>Edit</button>
                <button className='btnAlter'>Delete</button>
                <button className='btnAlter'>New</button>
            </section>
            {props.index < props.data.length - 1 &&<button id='next' onClick={()=>props.goToEmployee((+props.index) + 1)}>{next}</button>}
        </div>
    )
}

export default DataHandler