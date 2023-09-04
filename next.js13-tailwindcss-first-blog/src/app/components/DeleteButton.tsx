'use client';

import { deleteArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React from 'react';

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteArticle(id);

    router.push('/');
    router.refresh();
  };

  return (
    <div
      className="bg-red-500 hover:bg-red-600 rounded-md px-5 py-2 inline"
      onClick={handleDelete}
    >
      削除
    </div>
  );
};

export default DeleteButton;
