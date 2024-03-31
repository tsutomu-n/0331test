// RecordForm.js

export const RecordForm = (props) => {

    return (
      <form>
        <div>
          <label>{props.labelNormal}</label> 
          <input />
        </div>
  
        <div>
          <label>{props.labelDiscount}</label>
          <input />  
        </div>
      </form>
    )
  }
  