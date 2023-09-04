import { Article } from './types';
import { notFound } from 'next/navigation';

// 全データの取得
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: 'no-store' }); // SSR
  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = await res.json(); // シリアライズ(データを文字列化する)
  return articles;
};

// 詳細ページのデータ取得
export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  }); // ISR

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const article = await res.json(); // シリアライズ(データを文字列化する)
  return article;
};

// ブログ新規投稿用のAPI
export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDateTime = new Date().toISOString(); // 投稿した日時を取得

  const res = await fetch(`http://localhost:3001/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDateTime }),
  }); // ISR

  if (!res.ok) {
    throw new Error('エラーが発生しました');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await res.json(); // シリアライズ(データを文字列化する)
  return newArticle;
};
