import React,{useState} from 'react';
import { useFormik } from 'formik';
import Styles from './formdetails.module.css';
import '../App.css'
import UsersList from './UsersList';


export  const FormDetails = () => {
  
  const [user, setUser] = useState([]);
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
      country: 'India',
      pincode: '',
      occupation: '',
      nationality: 'India',
      

    },
    onSubmit: (values, { resetForm }) => {
      setUser(olduser =>[...olduser, values])
      resetForm()
    },
    
  });

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
      <div className="row"><h5 className={Styles.h5}>Personal Details</h5></div>
      <div className="row my-2">
      <div className="col-4">
      <div className="row">
      <div className="col-3">
      <label htmlFor="name" className='m-2 requiredField'>Name:</label>
      </div>
      <div className="col-9">
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        className={'form-control'}
        placeholder={'Enter Name'}
      required/>
      </div>
      </div>
      </div>
      <div className="col-4">
        <div className="row"><div className="col-3">
      <label htmlFor="age" className='requiredField'>Age:</label>
      </div>
      <div className="col-9">
      <input
        id="age"
        name="age"
        type="number"
        className='form-control'
        onChange={formik.handleChange}
        value={formik.values.age}
        placeholder={'Age in Years'}
      required/>
      </div>
      </div>
     </div>
     
     <div className="col-4">
     <div className="row">
      <div className="col-3">
      <label htmlFor="sex" className='requiredField'>Sex:</label>
      </div>
      <div className="col-9">
      <select
        id="sex"
        name="sex"
        onChange={formik.handleChange}
        value={formik.values.sex}
        className='form-select'
        required
      >
        <option selected>Enter Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="third">Third Gender</option>
        
      </select>
      </div>
      </div>
      </div>
      </div>
      <div className="row my-3">
        <div className="col-4">
          <div className="row"><div className="col-3">
          <label htmlFor="mobile">Mobile:</label></div>
          <div className="col-9">
          <input className='form-control' type="number" id='mobile' name='mobile'  onChange={formik.handleChange}
           value={formik.values.mobile} placeholder={'Enter Mobile Number'} />
           </div>
           </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-2">
          <label htmlFor="id">Govt. Issued ID:</label>
          </div>
          <div className="col-4">
          <select  name="idtype" id="idtype" onChange={formik.handleChange}
           value={formik.values.idtype} className={'form-select'}>
            <option selected>ID Type</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="dl">Driving License</option>
          </select>
          </div>
          <div className="col-6">
          <input type="text" name='govid' id='govid'onChange={formik.handleChange}
             value={formik.values.govid} className={'form-control'} placeholder={'Enter Govt ID'}/>
             </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container my-2">
        <div className="row"><h5>Contact Details</h5></div>
        <div className="row my-2">
          <div className="col-5">
            <div className="row">
              <div className="col-2">
            <label htmlFor="gaurdian-detail">Gaurdian Detail</label>
            </div>
            <div className="col-4">
            <select name="glevel" id="glevel" onChange={formik.handleChange}
        value={formik.values.glevel} className={'form-select'} >
              <option >Enter Label:</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
            </div>
            <div className="col-6">
            <input type="text" name='gname' id='gid' onChange={formik.handleChange}
        value={formik.values.gname} className={'form-control'} placeholder={'Enter Gardian Name'} />
        </div>
        </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-3">
            <label htmlFor="email">Email:</label>
            </div>
            <div className="col-9">
            <input type="email" name="email" id="email" onChange={formik.handleChange}
        value={formik.values.email} className={'form-control'}placeholder={'Enter email'}/>
        </div>
        </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-5">
            <label htmlFor="em-con-no">Emergency Contact Number:</label>
            </div>
            <div className="col-7">
            <input type="number" name="emno" id="emno" onChange={formik.handleChange}
        value={formik.values.emno} className={'form-control'} placeholder={'Enter Emergency Number'} />
        </div>
        </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <div className="row "><h5>Address Details:</h5></div>
        <div className="row my-2">
          <div className="col-4">
            <div className="row">
              <div className="col-3">
            <label htmlFor="address">Address:</label>
            </div>
            <div className="col-9">
            <input type="text" name="address" id="address" onChange={formik.handleChange}
        value={formik.values.address} className={'form-control'} placeholder={'Enter Address'} />
        </div>
        </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-3">
            <label htmlFor="state">State:</label>
            </div>
            <div className="col-9">
            <select name="state" id="state" onChange={formik.handleChange}
        value={formik.values.state} className={'form-select'} >
              <option selected>Enter State</option>
              <option value="up">Uttar Pradesh</option>
              <option value="bihar">Bihar</option>
              <option value="mp">Madhya Pradesh</option>
              <option value="goa">Goa</option>
            </select>
            </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-3">
            <label htmlFor="city">City:</label>
            </div>
            <div className="col-9">
            <select name="city" id="city" onChange={formik.handleChange}
             value={formik.values.city} className={'form-select'} >
              <option selected>Enter City/ Town/ Village</option>
              <option value="rbl">Raebareli</option>
            </select>
            </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <div className="row">
              <div className="col-3">
            <label htmlFor="country">Country:</label>
            </div>
            <div className="col-9">
            <input type="text" name='country' id='country' onChange={formik.handleChange}
        value={formik.values.country} className={'form-control'} />
        </div>
        </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-3">
            <label htmlFor="pincode">Pincode</label>
            </div>
            <div className="col-9">
            <input type="number" name="pincode" id="pincode" onChange={formik.handleChange}
        value={formik.values.pincode} className={'form-control'} placeholder={'Enter Pincode'} />
        </div>
        </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div className="container my-2">
        <div className="row">
          <h5>Other Details:</h5>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <div className="row">
              <div className="col-4">
            <label htmlFor="occupation">Occupation:</label>
            </div>
            <div className="col-8">
            <input type="text" name='occupation' id='occupation' onChange={formik.handleChange}
        value={formik.values.occupation} className={'form-control'} placeholder={'Enter Occupation'} />
        </div>
        </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-3">
            <label htmlFor="religion">Religion:</label>
            </div>
            <div className="col-9">
            <select name="religion" id="religion" onChange={formik.handleChange}
        value={formik.values.religion}className={'form-select'} >
              <option value="">Enter Religion</option>
              <option value="hindu">Hindu</option>
              <option value="boudh">Bouddha</option>
              <option value="shikh">Sikha</option>
              <option value="isai">Isai</option>
              <option value="parsi">Parsi</option>
            </select>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-5">
            <label htmlFor="marital-status">Marital Status:</label>
            </div>
            <div className="col-7">
            <select name="maritalstatus" id="maritalstatus" onChange={formik.handleChange}
        value={formik.values.maritalstatus} className={'form-select'}>
              <option value="">Enter Marital Status</option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
              <option value="widow">Widow</option>
            </select>
            </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-6">
            <label htmlFor="blood-group">Blood Group</label>
            </div>
            <div className="col-6">
            <select name="bloodgroup" id="bloodgroup" onChange={formik.handleChange}
        value={formik.values.bloodgroup} className={'form-select'} >
              <option selected>Group</option>
              <option value="o+">O+</option>
              <option value="b+">B+</option>
              <option value="b-">B-</option>
            </select>
            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="col-3">
                <label htmlFor="nationality">Nationality:</label>
              </div>
              <div className="col-9">
                <input type="text" name='nationality' id='nationality' className='form-control' onChange={formik.handleChange}
        value={formik.values.nationality} />
              </div>
            </div>
          </div>
          <div className="col-9"></div>
        </div>
      </div>
      <div className="container my-2">
        <div className="row">
          <div className="col-10"></div>
          <div className="col-1"><button className='btn btn-outline-danger'  type='cancile'>Cancile</button></div>
          <div className="col-1"> <button className='btn btn-success' type="submit">Submit</button></div>
        </div>
      </div>
    </form>
    <UsersList user={user}/>
    </>
  );
};