import React from 'react'

const List = () => {
  return (
    <div>
<div className="container w-full">
  <div className="table-responsive">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-8"><h2>Customer <b>Details</b></h2></div>
          <div className="col-sm-4">
            <div className="search-box d-flex">
              <i className="btn btn-success">Seach</i>
              <input type="text" className="form-control" placeholder="Search…" />
            </div>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover table-bordered table-info text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>type_id</th>
            <th>title <i className="fa fa-sort " /></th>
            <th>day</th>
            <th>price <i className="fa fa-sort" /></th>
            <th>promotion</th>
            <th>Country <i className="fa fa-sort" /></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Thomas Hardy</td>
            <td>89 Chiaroscuro Rd.</td>
            <td>Portland</td>
            <td>97219</td>
            <td>USA</td>
            <td></td>
            <td>
              <a type='button' className="view btn btn-success mr-2" title="View" data-toggle="tooltip">Detail</a>
              <a type='button' className="edit btn btn-primary mr-2" title="Edit" data-toggle="tooltip">Edit</a>
              <a type='button' className="delete btn btn-danger" title="Delete" data-toggle="tooltip">Detele</a>
            </td>
          </tr>
       
        
       
       
               
        </tbody>
      </table>
   
    </div>
  </div>        
</div>

    </div>
  )
}

export default List
