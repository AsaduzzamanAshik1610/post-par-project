import React from 'react';
import "./Post.css"
const Post = () => {
    return (
        <div className='m-5 w-3/5'>
            <div className='flex gap-32'>
                <div className='text-slate-400'>
                <h1>BUYER</h1>
                </div>
               <div>
               <h2 className='relative coustom-border text-slate-950 '>SELLER</h2>
               </div>  
            </div>
            <select className="select w-full max-w-xs  border-none flex justify-items-start mt-5">
                <option disabled selected>Select category</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select>
            <div className='flex gap-10 justify-start my-10'>
                <div className='flex gap-4 items-center'>
                <span className='bg-green-500 rounded-full h-12 w-12 text-2xl flex items-center justify-center'>1</span>
                <p>Product Info</p>
                </div>
                <div className='flex gap-4 items-center'>
                <span className='bg-slate-500 rounded-full h-12 w-12 text-2xl flex items-center justify-center'>2</span>
                <p>Trade Information</p>
                </div>
                <div className='flex gap-4 items-center'>
                <span className='bg-slate-500 rounded-full h-12 w-12 text-2xl flex items-center justify-center'>3</span>
                <p>Payment & Packaging</p>
                </div>
                
            </div>
            <div className='grid grid-cols-2'>
                <select className="select w-full max-w-xs  border-none flex justify-items-start">
                    <option disabled selected>select category</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
                <select className="select w-full max-w-xs  border-none flex justify-items-start">
                    <option disabled selected>select category</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
            </div>
            <h2 className='flex justify-items-start text-sky-600 mt-5'>Product Specification</h2>
            <div className='grid grid-cols-2 mt-3'>
            <div className='flex justify-items-start'>
                <input type="text" placeholder="Fabric type" className="input
           border-b  w-full max-w-xs" />
            </div>
                <select className="select w-full max-w-xs  border-none flex justify-items-start">
                    <option disabled selected>select category</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
            </div>
            <div className='grid grid-cols-3 mt-3 gap-10'>
                <input type="text" placeholder="Trip Details" className="input border-b  w-full max-w-xs" />
                <input type="text" placeholder="Color" className="input border-b  w-full max-w-xs" />
                <input type="text" placeholder="Dye Type" className="input border-b  w-full max-w-xs" />
            </div>
            <div className='grid grid-cols-3 mt-3 gap-10'>
                <input type="text" placeholder="Finish Type" className="input border-b  w-full max-w-xs" />
                <input type="text" placeholder="Garment construction detail" className="input border-b  w-full max-w-xs" />
                <input type="text" placeholder="Season" className="input border-b  w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs mt-8" />
                   
                </div>
            <div className='flex justify-items-start'>
                <input type="text" placeholder="" className="input
           border-b  w-full max-w-xs" />
            </div>
            <h2 className='flex justify-items-start text-sky-600 mt-3'>Detail Specification</h2>
            <div className='flex justify-items-start'>
                <input type="text" placeholder="Fabric type" className="input
           border-b  w-full max-w-xs" />
            </div>
            <button className="btn btn-primary flex justify-items-start mt-5 px-5">save</button>
        </div>

    );
};

export default Post;