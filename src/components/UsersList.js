import React from 'react'

function UsersList(user) {
  let userdata = user.user;
  
  
  return (
    <div className='text-center'>
    <h5>User Data Table</h5>
     <table class="table table-bordered">
    <thead>
      <tr>
        <th>User Name</th>
        <th>Email Id</th>
        <th>Mobile Number</th>
      </tr>
    </thead>
    <tbody>
      {userdata[0]===undefined ? 'Data not available': userdata?.map((value,i) =>(
      <tr key={i}>
        <td>{value.name}</td>
        <td>{value.email}</td>
        <td>{value.mobile}</td>
        </tr>
    ))}
    </tbody>
  </table>
      </div>
  )
}

export default UsersList