import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { img, name } = props;

  return (
    <div className="flex flex-row items-center space-x-2 cursor-pointer">
      <img alt={name} src={img} className="rounded-full h-14 w-14" />
      <div className="hidden md:block">
        <p>{name}</p>
        <p className="text-sm text-green-600">Available</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string
};

Profile.defaultProps = {
  img: 'https://via.placeholder.com/100',
  name: 'User'
};

export default Profile;
