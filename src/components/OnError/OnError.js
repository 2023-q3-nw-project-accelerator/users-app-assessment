import './OnError.css';

export default function OnError({message}){
  return <div className='on-error-div'>
    <div>
      <h3>Error</h3>
      <p>{message}</p>
    </div>
  </div>
}
