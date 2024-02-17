import { useState } from 'react'
import './App.css'

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAdd: "",
    city: "",
    state: "",
    contact: "",
    zip: "",
    comments: false,
    candidate: false,
    offers: false,
    byemail: ""
  });
  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setUserData(
      {
        ...userData,
        [name]: (type === "checkbox") ? checked : value
      }
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(userData);

  }
  return (
    <div className='w-11/12 max-w-[750px] m-auto shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)] border-md min-h-[100vh] p-10'>
      <form onSubmit={submitHandler} className='flex flex-col gap-3'>
        <div>
          <div>

            <label htmlFor="firstName">First Name:</label>
          </div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder='Enter your first name'
            value={userData.firstName} onChange={changeHandler} />

        </div>
        <div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
          </div>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder='Enter your last name'
            value={userData.lastName} onChange={changeHandler} />
        </div>
        <div>
          <div>
            <label htmlFor="email">Email:</label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter your email'
            value={userData.email} onChange={changeHandler} />
        </div>

        <div>
          <div>
            <label htmlFor="contact">Contact Number:</label>
          </div>
          <input
            type="tel"
            name="contact"
            id="contact"
            placeholder='Enter your contact number'
            value={userData.contact} onChange={changeHandler} />
        </div>

        <div>
          <div>
            <label htmlFor="streetAdd">Street Address:</label>
          </div>
          <input
            type="text"
            name="streetAdd"
            id="streetAdd"
            placeholder='Enter your street address'
            value={userData.streetAdd} onChange={changeHandler} />
        </div>

        <div>
        <div>
            <label htmlFor="city">City:</label>
          </div>
          <input
          type="text"
          name="city"
          id="city"
          placeholder='Enter your city'
          value={userData.city} onChange={changeHandler} />
        </div>

        <div>
        <div>
            <label htmlFor="state">State :</label>
          </div>
          <input
          type="text"
          name="state"
          id="state"
          placeholder='Enter your state'
          value={userData.state} onChange={changeHandler} />
        </div>

        <div>
        <div>
            <label htmlFor="country">Country:</label>
          </div>
          <select name="country" id="country" onChange={changeHandler}>
            <option value='disabled' disabled selected>Select your Country</option>
            <option value='India'>India</option>
            <option value='Pakistan'>Pakistan</option>
            <option value='USA'>USA</option>
            <option value='UK'>UK</option>
          </select>
        </div>

        <div>
        <div>
            <label htmlFor="zip">Zip Code:</label>
          </div>
          <input
          type="number"
          name="zip"
          id="zip"
          placeholder='Enter your zip code'
          value={userData.zip} onChange={changeHandler} />

        </div>


        <fieldset className='border-none'>
          <legend>
            By email
          </legend>
          <div className='flex items-start'>
            <input type="checkbox" name="comments" id="comments" onChange={changeHandler} checked={userData.comments} className='w-fit'/>
            <div className='flex flex-col'>
            <label htmlFor="comments">Comments</label>
              Get notified when someones posts a comment on a posting.
            </div>
          </div>

          <div className='flex items-start'>
            <input type="checkbox" name="candidate" id="candidate" onChange={changeHandler} checked={userData.candidate} className='w-fit'/>
            <div className='flex flex-col'>
            <label htmlFor="candidate">Candidate</label>
              Get notified when a candidate applies for a job.
            </div>
          </div>

          <div className='flex items-start'>
            <input type="checkbox" name="offers" id="offers" onChange={changeHandler} checked={userData.offers} className='w-fit'/>
            <div className='flex flex-col'>
            <label htmlFor="offers">Offers</label>
              Get notified when a candidate accepts or rejects an offer.
            </div>
          </div>
        </fieldset>

        <div>
          <fieldset>
            <legend>Push Notifications</legend>
            <div className='text-bold'>
            These are delivered via SMS to your mobile phone.
            </div>
            <div className='flex flex-row'>
              <input type="radio" name="byemail" id="every" value="every" onChange={changeHandler} checked={userData.byemail == "every"} className='w-fit'/>
              <label htmlFor="every">Everything</label>
            </div>
            <div>
              <input type="radio" name="byemail" id="same" value="same" onChange={changeHandler} checked={userData.byemail == "same"} className='w-fit'/>
              <label htmlFor="same">Same as email</label>
            </div>
            <div>
              <input type="radio" name="byemail" id="no" value="no" onChange={changeHandler} checked={userData.byemail == "no"} className='w-fit'/>
              <label htmlFor="no">No push notifications</label>
            </div>
          </fieldset>
        </div>

        <div>
          <input type="submit" value="Save" className='w-fit px-10 py-1 bg-blue-400 text-white font-bold'/>
        </div>
      </form>
    </div>
  )
}

export default App
