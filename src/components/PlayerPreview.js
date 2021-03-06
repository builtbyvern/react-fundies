var React = require('react');
var PropTypes = require('prop-types');

function PlayerPreview (props) {
  return (
    <div>
      <img
        className="avatar"
        src={props.avatar}
        alt={'Avatar for ' + props.username}
      />
      <h2 className='username'>@{props.username}</h2>
      <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}
      >
        Reset
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
}

module.export = PlayerPreview;