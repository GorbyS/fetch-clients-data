
export default function Input({label, ...props}) {
  return (
      <div className="input-group">
        <label>{label}</label>
        <input {...props} />
      </div>
  )
}

//Code-review