export default function (props) {
  if(props.index % 2 === 0)
    return (
      <div id='content'>
        <div className='indexCard'>
          <img src={props.data.src}></img>
          <div className='indexCardContent'>
            <div className='indexCardText'>
              <h1>{props.data.title}</h1>
              <p>
                {props.data.text}
              </p>
            </div>
          </div>
        </div>
    </div>
    )
  else
    return (
      <div id='content'>
        <div className='indexCard'>
          <div className='indexCardContent'>
            <div className='indexCardText'>
              <h1>{props.data.title}</h1>
              <p>
                {props.data.text}
              </p>
            </div>
          </div>
          <img src={props.data.src}></img>
        </div>
      </div>
    )
}