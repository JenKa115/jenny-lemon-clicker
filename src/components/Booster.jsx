import shortenNumber from '../utils/shortenNumber'

function Booster(props) {

    const value = shortenNumber(props.value)


  return (
    <div className="booster">
      <div className="booster_value">{value} lemons / click </div>

    </div>
  )
}

export default Booster
