import React from 'react'
import Loading from '@/components/Loading'
import { getEnv } from '@/helpers/getEnv'
import BlogCard from '@/components/BlogCard'
import { useFetch } from '@/hooks/useFetch'
import { useSearchParams } from 'react-router-dom'

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get('page')) || 1;
  
  const LIMIT = 9;

  const { data: blogData, loading, error } = useFetch(
    `${getEnv('VITE_API_BASE_URL')}/blog/blogs?page=${page}&limit=${LIMIT}`, 
    {
      method: 'get',
      credentials: 'include'
    },
    [page]
  )

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (loading) return <Loading />
  
  const blogs = blogData?.blog || [];
  const pagination = blogData?.pagination || {};

  return (
    <div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
          {blogs.length > 0
              ? 
              blogs.map(blog =>  <BlogCard key={blog._id} props={blog} />)
              :
              <div className="col-span-full text-center">Data Not Found.</div>
          }
      </div>

      {blogs.length > 0 && pagination.totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
            className={`px-4 py-2 rounded border ${
              page <= 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Trước
          </button>

          <span className="text-gray-600 font-medium">
            Trang {pagination.page} / {pagination.totalPages}
          </span>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= pagination.totalPages}
            className={`px-4 py-2 rounded border ${
              page >= pagination.totalPages 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Sau
          </button>
        </div>
      )}
    </div>
  )
}

export default Index