import React from 'react';
import './Profile.css';
import { FiEdit, FiLogOut } from 'react-icons/fi';
import { FaMessage } from 'react-icons/fa6';

const user = {
  name: 'Anna Petrova',
  title: 'E-commerce Specialist',
  location: 'Berlin, Germany',
  rating: 9.2,
  avatar: 'https://i.pravatar.cc/150?img=58',
  phone: '+49 176 12345678',
  address: 'Friedrichstraße 123, 10117 Berlin, Germany',
  email: 'anna.petrova@example.com',
  site: 'www.annapetrova.com',
  birthday: 'March 12, 1990',
  gender: 'Female',
};

const handleSignOut = () => {
  alert('You have been signed out.');
  // Здесь можно вызвать логаут через систему
};

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="top-bar">
          <button className="btn signout" onClick={handleSignOut}>
             <FiLogOut style={{ marginRight: '8px' }} />
             Sign Out
             </button>
        </div>
        <div className="profile-header">
          <img src={user.avatar} alt="Avatar" className="avatar" />
          <div className="header-info">
            <h2>{user.name}</h2>
            <p className="title">{user.title} • {user.location}</p>
            <p className="rating">Rating: {user.rating} ⭐</p>
            <div className="header-buttons">
              <button className="btn primary">
                <FaMessage style={{ marginRight: '8px' }} />
                Send Message
                </button>
              <button className="btn outline">
                <FiEdit style={{ marginRight: '8px' }} />
                Edit Profile
                </button>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="section">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p><strong>Website:</strong> <a href={`https://${user.site}`} target="_blank" rel="noreferrer">{user.site}</a></p>
          </div>

          <div className="section">
            <h3>Basic Information</h3>
            <p><strong>Birthday:</strong> {user.birthday}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;