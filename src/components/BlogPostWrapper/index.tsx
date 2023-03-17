import React from 'react';
import { Avatar, Box, Button, Flex, Text, Heading } from '@chakra-ui/react';
import { FaComment, FaHeart, FaRegBookmark, FaRetweet } from 'react-icons/fa';
import { Post } from '../../@types/Post';

interface Props {
  post: Post;
}

const BlogPost: React.FC<Props> = ({ post }) => {
  return (
    <div className="max-w-2xl border border-gray-200 rounded-lg overflow-hidden p-6 mb-6">
      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-3">
          <Avatar src={post.author.avatar} size="sm" borderRadius="lg" />
          <p className="font-semibold">{post.author.community}</p>
        </div>
        <p className="text-sm text-gray-500">{post.author.name}</p>
        
        <p className="text-md text-gray-500 ">{post.date}</p>
      </div>
      <Heading as="h2" size="lg" className='mt-3 mb-2'>
        {post.title}
      </Heading>
      <div className="mb-4">
        <p>{post.content}</p>
        <img src={post.previewImage} alt={post.title} className="mt-4 rounded-md shadow-md" />
      </div>
      <div className="flex gap-2 items-center">
        <button className="flex items-center text-gray-500 hover:text-red-500">
          <FaHeart className="mr-2" size="16px"/>
          {post.likes}
        </button>
        <button className="flex items-center text-gray-500 hover:text-blue-500">
          <FaComment className="mr-2" size="16px"/>
          {post.comments}
        </button>
        <button className="flex items-center text-gray-500 hover:text-green-500">
          <FaRetweet className="mr-2" size="16px"/>
          {post.reposts}
        </button>
        <button className="flex items-center text-gray-500 hover:text-yellow-500">
          <FaRegBookmark className="mr-2" size="16px" />
        </button>
      </div>
    </div>
  );
};

export default BlogPost;