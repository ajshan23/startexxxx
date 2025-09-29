"use client";
import React, { useEffect, useState } from "react";
import { Pen, Trash2 } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Popup from "../../components/Popup";

export default function MessagesTable() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  const fetchPosts = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/get-blog?page=${page}&limit=${itemsPerPage}`
      );
      setPost(response.data.data); // assuming API returns { items: [], total: 100 }
      setTotal(response.data.total);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage + 1); // react-paginate uses 0-based indexing
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleOpenPopup = (post) => {
    setSelectedPost(post);
    setIsPopupOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.post("/api/delete-blog", { id });
      fetchPosts(currentPage + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500" />
      </div>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Blogs</h1>

      {/* Desktop Table */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full table-fixed border border-gray-700 text-white rounded-lg text-sm">
          <thead className="bg-gray-800 text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 w-1/6 text-left">SI No</th>
              <th className="px-4 py-3 w-1/5 text-left">Title</th>
              <th className="px-4 py-3 w-1/6 text-left">Tag</th>
              <th className="px-4 py-3 w-1/6 text-left">Heading</th>
              <th className="px-4 py-3 w-10 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {post.map((entry, index) => (
              <tr
                key={entry._id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className=" px-4 py-3 w-1/6">{index + 1}</td>
                <td className="px-4 py-3 w-1/6">{entry.title}</td>
                <td className="px-4 py-3 w-1/5 font-semibold truncate">
                  {entry.tag}
                </td>
                <td className="px-4 py-3 w-1/6">{entry.heading}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end items-center gap-3">
                    <button
                      onClick={() => handleOpenPopup(entry)}
                      className="text-blue-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-800"
                    >
                      Details
                    </button>

                    <Link
                      href={`/admin/blog/edit/${entry._id}`}
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

      {/* Mobile Cards */}
      <div className="block md:hidden space-y-4">
        {post.map((entry, index) => (
          <div
            key={entry._id}
            className="bg-black border border-gray-700 rounded-lg p-4 text-white text-sm"
          >
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">title: </span>
              {entry.title}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">tag: </span>
              {entry.tag}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">heading: </span>
              {entry.heading}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">description: </span>
              {entry.description}
            </div>
            <div className="flex justify-end">
              <Link
                href={`/admin/blog/edit/${entry._id}`}
                className="text-blue-500 hover:text-blue-600 mr-4"
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

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        data={selectedPost}
      />
    </div>
  );
}
