import React from "react";

const ListProductAdmin = () => {
  
  return (
    <>
      <div className=' w-[1150px]  bg-gray-100 mt-[20px]'>
        <div className='container max-w-screen-lg mx-auto'>
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    STT
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Tiêu Đề
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Ngày
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Giá
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Khuyến Mại
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Danh Mục
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                
                      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <th
                          scope='row'
                          className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        </th>
                        <td className='px-6 py-4'>
                          <img
                            
                            width={50}
                            height={50}
                            alt=''
                          />
                        </td>
                        <td className='px-6 py-4'></td>
                        <td className='px-6 py-4'></td>
                        <td className='px-6 py-4 text-right flex gap-1'>
                          <button
                            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                            Delete
                          </button>
                          <button
                            className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>
                            Edit
                          </button>
                        </td>
                      </tr>
                  

              </tbody>
            </table>
          </div>
        </div>
      </div>

        <nav
          className='mt-[20px] '
          style={{ display: "flex", justifyContent: "center" }}
          aria-label='Page navigation example '>
          <ul className='flex items-center -space-x-px h-8 text-sm'>
          </ul>
        </nav>
    </>
  );
};

export default ListProductAdmin;