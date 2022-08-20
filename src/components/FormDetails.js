import React from 'react';
import { useFormik } from 'formik';
import Styles from './formdetails.module.css';


export  const Basic = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      sex: '',
      mobile: '',
      idtype: '',
      govid: '',
      glevel: '',
      gname: '',
      email: '',
      emno: '',
      address: '',
      state: '',
      city: '',
      country: '',
      pincode: '',
      occupation: '',
      

    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
      <div className="row"><h5 className={Styles.h5}>Personal Details</h5></div>
      <label htmlFor="name" className='m-2'>Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="age">Age:</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />

      <label htmlFor="sex">Sex:</label>
      <select
        id=""sex
        name="sex"
        onChange={formik.handleChange}
        value={formik.values.sex}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="third">Third Gender</option>
        
      </select>
      <div className="row">
        <div className="col-4">
          <label htmlFor="mobile">Mobile:</label>
          <input type="number" id='mobile' name='mobile'  onChange={formik.handleChange}
           value={formik.values.mobile} />
        </div>
        <div className="col-8">
          <label htmlFor="id">Govt. Issued Id</label>
          <select  name="idtype" id="idtype" onChange={formik.handleChange}
           value={formik.values.idtype}>
            <option value="adhar">Adhar Card</option>
            <option value="dl">Driving License</option>

          </select>
          <input type="text" name='govid' id='govid'onChange={formik.handleChange}
             value={formik.values.govid} />
        </div>
      </div>
      </div>
      <div className="container">
        <div className="row"><h5>Contact Details</h5></div>
        <div className="row">
          <div className="col-4">
            <label htmlFor="gaurdian-detail">Gaurdian Detail</label>
            <select name="glevel" id="glevel" onChange={formik.handleChange}
        value={formik.values.glevel}>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
            <input type="text" name='gname' id='gid' onChange={formik.handleChange}
        value={formik.values.gname} />
          </div>
          <div className="col-4">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" onChange={formik.handleChange}
        value={formik.values.email} />
          </div>
          <div className="col-4">
            <label htmlFor="em-con-no">Emergency Contact Number:</label>
            <input type="number" name="emno" id="emno" onChange={formik.handleChange}
        value={formik.values.emno} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row"><h5>Address Details:</h5></div>
        <div className="row">
          <div className="col-4">
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" id="address" onChange={formik.handleChange}
        value={formik.values.address}/>
          </div>
          <div className="col-4">
            <label htmlFor="state">State:</label>
            <select name="state" id="state" onChange={formik.handleChange}
        value={formik.values.state}>
              <option value="up">Uttar Pradesh</option>
              <option value="bihar">Bihar</option>
              <option value="mp">Madhya Pradesh</option>
              <option value="goa">Goa</option>
            </select>
          </div>
          <div className="col-4">
            <label htmlFor="city">City:</label>
            <select name="city" id="city" onChange={formik.handleChange}
        value={formik.values.city}>
              <option value="rbl">Raebareli</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label htmlFor="country">Country</label>
            <input type="text" name='country' id='country' onChange={formik.handleChange}
        value={formik.values.country}/>
          </div>
          <div className="col-4">
            <label htmlFor="pincode">Pincode</label>
            <input type="number" name="pincode" id="pincode" onChange={formik.handleChange}
        value={formik.values.pincode} />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h5>Other Details:</h5>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="occupation">Occupation:</label>
            <input type="text" name='occupation' id='occupation' onChange={formik.handleChange}
        value={formik.values.occupation} />
          </div>
          <div className="col-3">
            <label htmlFor="religion">Religion</label>
            <select name="religion" id="religion" onChange={formik.handleChange}
        value={formik.values.religion}>
              <option value="hindu">Hindu</option>
              <option value="boudh">Bouddha</option>
              <option value="shikh">Sikha</option>
              <option value="isai">Isai</option>
              <option value="parsi">Parsi</option>
            </select>
          </div>
          <div className="col-3">
            <label htmlFor="marital-status">Marital Status</label>
            <select name="maritalstatus" id="maritalstatus" onChange={formik.handleChange}
        value={formik.values.maritalstatus}>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
              <option value="widow">Widow</option>
            </select>
          </div>
          <div className="col-3">
            <label htmlFor="blood-group">Blood Group</label>
            <select name="bloodgroup" id="bloodgroup" onChange={formik.handleChange}
        value={formik.values.bloodgroup}>
              <option value="o+">O+</option>
              <option value="b+">B+</option>
              <option value="b-">B-</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8"></div>
          <div className="col-2"><button type='cancile'>Cancile</button></div>
          <div className="col-2"> <button type="submit">Submit</button></div>
        </div>
      </div>
    </form>
  );
};