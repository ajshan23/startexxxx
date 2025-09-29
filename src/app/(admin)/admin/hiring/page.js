"use client";
import React, { useEffect, useState } from 'react';
import { Trash2, Pen } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';
import Jobup from '../../components/Jobup';
import ReactPaginate from 'react-paginate';

export default function Page() {
  const [hire, setHire] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(0); // zero-based for ReactPaginate
  const itemsPerPage = 20;
  const [total, setTotal] = useState(0);

  const handleOpenPopup = (post) => {
    setSelectedPost(post);
    setIsPopupOpen(true);
  };

  const handleGetRequest = async (selectedPage = 0) => {
    try {
      setLoading(true);
      const page = selectedPage + 1; // backend page is 1-based
      const response = await axios.get(`/api/hiring?page=${page}&limit=${itemsPerPage}`);
      setHire(response.data.posts);
      setTotal(response.data.total);
      setCurrentPage(selectedPage);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetRequest();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/hiring`, { data: { id } });
      handleGetRequest(currentPage); // refresh current page after deletion
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePageClick = (event) => {
    handleGetRequest(event.selected);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500" />
      </div>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Job Posts</h1>

      {/* Desktop Table */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full table-fixed border border-gray-700 text-white rounded-lg text-sm">
          <thead className="bg-gray-800 text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 w-1/6 text-left">SI No</th>
              <th className="px-4 py-3 w-1/5 text-left">Heading</th>
              <th className="px-4 py-3 w-1/6 text-left">Location</th>
              <th className="px-4 py-3 w-1/4 text-left">Type</th>
              <th className="px-4 py-3 w-10 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {hire.map((entry, index) => (
              <tr
                key={index}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              
              >
                  <td className=" px-4 py-3 w-1/6">{index + 1}</td>
                <td className=" px-4 py-3 font-semibold truncate">{entry.Heading}</td>
                <td className="px-4 py-3">{entry.Location}</td>
                <td className="px-4 py-3">{entry.Type}</td>
               <td className="px-4 py-3 text-right">
                  <div className="flex justify-end items-center gap-3">
                    <button
                      onClick={() => handleOpenPopup(entry)}
                      className="text-blue-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-800"
                    >
                      Details
                    </button>

                    <Link
                      href={`/admin/hiring/edit/${entry._id}`}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <button>
                        <Pen size={16} />
                      </button>
                    </Link>

                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDelete(entry._id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {hire.map((entry, index) => (
          <div key={index} className="bg-black border border-gray-700 rounded-lg p-4 text-white text-sm">
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Heading: </span>
              <span className="font-medium">{entry.Heading}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Description: </span>
              {entry.Description}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Location: </span>
              {entry.Location}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Type: </span>
              {entry.Type}
            </div>
            <div className="flex justify-end">
              <Link href={`/admin/hiring/edit/${entry._id}`}>
                <button className="text-blue-500 mr-4 hover:text-blue-600">
                  <Pen size={16} />
                </button>
              </Link>
              <button onClick={() => handleDelete(entry._id)} className="text-red-500 hover:text-red-600">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center cursor-pointer mt-6">
        <ReactPaginate
          previousLabel={"← Prev"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          onPageChange={handlePageClick}
          pageCount={Math.ceil(total / itemsPerPage)}
          forcePage={currentPage}
          containerClassName={"flex gap-2 text-white"}
          pageClassName={"px-3 py-1 border border-gray-500 rounded"}
          activeClassName={"bg-orange-600 text-white"}
          previousClassName={"px-3 py-1 border border-gray-500 rounded"}
          nextClassName={"px-3 py-1 border border-gray-500 rounded"}
          breakClassName={"px-3 py-1 border border-gray-500 rounded"}
        />
      </div>

      {/* Job Details Popup */}
      <Jobup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} data={selectedPost} />
    </div>
  );
}
