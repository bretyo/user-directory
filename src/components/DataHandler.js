function DataHandler(props){
    let prev = '< Previous'
    let next = 'Next >'
    return(
        <div className='buttons'>
            <button>{prev}</button>
            <section>
                <button className='btnAlter'>Edit</button>
                <button className='btnAlter'>Delete</button>
                <button className='btnAlter'>New</button>
            </section>
            <button>{next}</button>
        </div>
    )
}

export default DataHandler