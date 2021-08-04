import './Metrics.css'

const Metrics = ({ completed, incompleted }) => {
  return (
    <div className='row'>
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Total completed</h5>
            <p className='card-text'>
              <span class='badge bg-success'>{completed}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Total incompleted</h5>
            <span class='badge bg-warning'>{incompleted}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics
