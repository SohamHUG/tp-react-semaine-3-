import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/slice/userSlice';
import toast from "react-hot-toast";
import { selectDarkMode, selectUser } from '../../store/selectors';


const UserPage = () => {
  const user = useSelector(selectUser);
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstname.trim() === '' || formData.lastname.trim() === '' || formData.email.trim() === '') {

      if (formData.firstname.trim() === '') {
        darkMode ?
          toast.error('Please enter your firstname', {
            style: {
              background: '#444444',
              color: '#fff',
            },
          })
          : toast.error('Please enter your firstname')
      }

      if (formData.lastname.trim() === '') {
        darkMode ?
          toast.error('Please enter your lastname', {
            style: {
              background: '#444444',
              color: '#fff',
            },
          })
          : toast.error('Please enter your lastname')
      }

      if (formData.email.trim() === '') {
        darkMode ?
          toast.error('Please enter your email', {
            style: {
              background: '#444444',
              color: '#fff',
            },
          })
          : toast.error('Please enter your email')
      }
    } else {
      dispatch(updateUser(formData));

      darkMode ?
        toast.success('Profil saved !', {

          style: {
            background: 'black',
            color: '#fff',
          },
        })
        : toast.success('Profil saved !')
    };
  }



  return (
    <div className={'user'}>
      <h1>Hi {user.firstname} !</h1>
      <h2>Customize your profile here :</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your firstname : </label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname.charAt(0).toUpperCase() + formData.firstname.slice(1)}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Your lastname : </label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname.charAt(0).toUpperCase() + formData.lastname.slice(1)}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Your email : </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button className='classic-btn' type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserPage;