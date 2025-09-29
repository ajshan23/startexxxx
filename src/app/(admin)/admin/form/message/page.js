"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import MessageUp from "@/app/(admin)/components/MessageUp";

export default function Page() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // pageIndex (0-based)
  const limit = 20;

  const handleGetRequest = async (page = 0) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/contact-form?page=${page + 1}&limit=${limit}`
      );
      setMessage(response.data.posts); // API must return { posts: [...], total: ... }
      setPageCount(Math.ceil(response.data.total / limit));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    handleGetRequest(data.selected);
  };

  const handleOpenPopup = (post) => {
    setSelectedPost(post);
    setIsPopupOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/contact-form", { data: { id } });
      handleGetRequest(currentPage);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetRequest();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500" />
      </div>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Client Messages</h1>

      {/* Desktop Table */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full table-fixed border border-gray-700 text-white rounded-lg text-sm">
          <thead className="bg-gray-800 text-gray-300 uppercase text-xs">
            <tr>
               <th className="px-4 py-3 w-1/6 text-left">SI No</th>
              <th className="px-4 py-3 w-1/4 text-left">name</th>
              <th className="px-4 py-3 w-1/4 text-left">email</th>
              <th className="px-4 py-3 w-1/4 text-left">phone</th>
              <th className="px-4 py-3 w-10 text-right">actions</th>
            </tr>
          </thead>
          <tbody>
            {message.map((entry, index) => (
              <tr
                key={index}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className=" px-4 py-3 w-1/6">{index + 1}</td>
                <td
                  // onClick={() => handleOpenPopup(entry)}
                  className="px-4 py-3 font-semibold truncate"
                >
                  {entry.name}
                </td>
                <td className="px-4 py-3">{entry.email}</td>
                <td className="px-4 py-3">{entry.phone}</td>

                <td className="px-4 py-3 w-10 text-right">
                  <div className="flex justify-end gap-x-4">
                    <button onClick={() => handleOpenPopup(entry)} className="text-blue-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-800">
                      Details
                    </button>

                    <button
                      onClick={() => handleDelete(entry._id)}
                      className="text-red-500 hover:text-red-600"
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

      {/* Mobile Cards */}
      <div className="block md:hidden space-y-4">
        {message.map((entry, index) => (
          <div
            key={index}
            className="bg-black border border-gray-700 rounded-lg p-4 text-white text-sm"
          >
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Email: </span>
              {entry.email}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Name: </span>
              {entry.name}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Phone: </span>
              {entry.phone}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Message: </span>
              {entry.message}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Requirement: </span>
              {entry.requirement}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleDelete(entry._id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center cursor-pointer mt-6">
        <ReactPaginate
          previousLabel={"← Prev"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          forcePage={currentPage}
          containerClassName={"flex gap-2 text-white"}
          pageClassName={"px-3 py-1 border border-gray-500 rounded"}
          activeClassName={"bg-orange-600 text-white"}
          previousClassName={"px-3 py-1 border border-gray-500 rounded"}
          nextClassName={"px-3 py-1 border border-gray-500 rounded"}
          breakClassName={"px-3 py-1 border border-gray-500 rounded"}
        />
      </div>

      <MessageUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        data={selectedPost}
      />
    </div>
  );
}
