var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper (props) {
  return (
    <div className='col-sm-6'>
       <p className='lead'>Player 1</p>
        <UserDetails info={props.playersInfo[0]} />
    </div>
  )
}