import React from 'react'

const AddTour = () => {
  return (
    <div>
      <>
      <div className=' w-[1150px] bg-gray-100 mt-[20px]'>
        <div className='container max-w-screen-lg mx-auto'>
          <div>
            <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
              <form  className='lg:col-span-2'>
                <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                  <div className='md:col-span-3'>
                    <label htmlFor='full_name'>Tiêu Đề</label>
                    <input
                      type='text'
                      id='full_name'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      defaultValue=''
                    />
                    <p style={{ color: "red", margin: 0 }}>
                    </p>
                  </div>
                  <div className='md:col-span-5 flex gap-2'>
                    <div>
                      <div className='form-group__file'>
                        <label htmlFor='imageUpload' className='file-label'>
                          Image
                        </label>
                        <div className='file-wrapper'>
                          <input
                            type='file'
                            name='imageUpload'
                            id='imageUpload'
                            className='file-input'
                          />
                          <div className='file-preview-background'>
                            Upload Image
                          </div>
                          <img
                            id='imagePreview'
                            width='200px'
                            className='file-preview'
                            alt='..'
                          />
                          <div></div>
                        </div>
                      </div>
                      <p style={{ color: "red", margin: 0 }}>
                      </p>
                    </div>
                    <div>
                      <div className='flex gap-2'>
                        <div>
                          <div className='form-group__file'>
                            <div className='file-wrapper'>
                              <input
                                type='file'
                                name='imageUpload'
                                id='imageUpload'
                                className='file-input'
                              />
                              <div className='file-preview-background'>
                                Upload Image
                              </div>
                              <img
                                id='imagePreview'
                                width='200px'
                                className='file-preview'
                                alt='..'
                              />
                              <div></div>
                            </div>
                          </div>
                          
                        </div>
                        <div>
                          <div className='form-group__file'>
                            <div className='file-wrapper'>
                              <input
                                type='file'
                                name='imageUpload'
                               
                                id='imageUpload'
                                className='file-input'
                              />
                              <div className='file-preview-background'>
                                Upload Image
                              </div>
                              <img
                                id='imagePreview'
                                width='200px'
                                className='file-preview'
                                alt='..'
                              />
                              <div></div>
                            </div>
                          </div>
                        
                        </div>

                        
                      </div>
                    </div>
                  </div>
                  <div className='md:col-span-3'>
                    <label htmlFor='address'>Ngày</label>
                    <input
                      type='number'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      defaultValue=''
                      placeholder=''
                    />
                    <p style={{ color: "red", margin: 0 }}>
                    </p>
                  </div>
                  <div className='md:col-span-3'>
                    <label htmlFor='address'>ABC</label>
                    <input
                      type='number'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      defaultValue=''
                      placeholder=''
                    />
                    <p style={{ color: "red", margin: 0 }}>
                    </p>
                  </div>
                  <div className='md:col-span-3'>
                    <label htmlFor='address'>Map</label>
                    <input
                      type='number'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      defaultValue=''
                      placeholder=''
                    />
                    <p style={{ color: "red", margin: 0 }}>
                    </p>
                  </div>
                  <div className='md:col-span-3'>
                    <label htmlFor='address'>Giá</label>
                    <input
                      type='number'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      defaultValue=''
                      placeholder=''
                    />
                    <p style={{ color: "red", margin: 0 }}>
                    </p>
                  </div>
                  <div className='md:col-span-3'>
                    <label htmlFor='address'>Khuyến Mãi</label>
                    <input
                      type='number'
                      id='address'
                      className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
                      defaultValue='0'
                      placeholder=''
                    />
                    <p style={{ color: "red", margin: 0 }}>
                    </p>
                  </div>
                  <div className='md:col-span-3'>
                    <label htmlFor='country'>Tour Cate</label>
                    <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
                      <select
                        id='countries'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                        <option selected>Tour A</option>
                        <option selected>Tour B</option>
                      </select>
                      <p style={{ color: "red", margin: 0 }}>
                      </p>
                    </div>
                  </div>

                  <div className='md:col-span-5 text-right'>
                    <div className='inline-flex items-end'>
                      <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                  <input type="text" />
                  <p>Lich Trinh</p>
                  </div>
                  <div>
                  <input type="text" />
                  <p>Ngay</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <a
            href='https://www.buymeacoffee.com/dgauderman'
            target='_blank'
            className='md:absolute bottom-0 right-0 p-4 float-right'>
            <img
              src='https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg'
              alt='Buy Me A Coffee'
              className='transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white'
            />
          </a>
        </div>
      </div>
    </>
    </div>
  )
}

export default AddTour
