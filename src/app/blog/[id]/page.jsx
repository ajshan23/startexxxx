import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react';

async function getAllBlogs() {
  const res = await fetch('https://startex-admin.vercel.app/api/get-blog', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = params; // <-- dynamic param from URL
  const blogs = await getAllBlogs();
  const blog = blogs.find(item => item._id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
    

    <div className="px-4 md:px-8 lg:px-[90px] pb-10 main-pt">
      <h1 className='md:text-[35px] text-[20px] font-[500] text-gradient'>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full rounded-lg mb-4 mt-10 h-[700px] md:object-cover" />
    <div
  className="pt-8 text-white font-[300]"
  dangerouslySetInnerHTML={{ __html: blog.description }}
></div>
    </div>
    
    </>
  );
}
