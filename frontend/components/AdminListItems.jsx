import React from 'react'

const AdminListItems = () => {
  return (
    <div className='flex flex-col gap-3'>
        <p className="text-xl text-gray-400 font-medium">All Products List</p>

        <div>
            <div className='flex px-3 py-1 border'>
                <p className='w-[15%]'>Image</p>
                <p className='w-[35%]'>Name</p>
                <p className='w-[15%]'>Category</p>
                <p className='w-[20%]'>Price</p>
                <p className='w-[15%]'>Action</p>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default AdminListItems