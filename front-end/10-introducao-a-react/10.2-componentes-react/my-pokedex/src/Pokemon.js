import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return(
      <div className="pokemon">
        <h3>{ name }</h3>
        <p>{`Type: ${type}`}</p>
        <p>{`Average weight: ${averageWeight.value} ${ averageWeight.measurementUnit}`}</p>
        <img className="pokemon-image" src={image} alt={name}></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;