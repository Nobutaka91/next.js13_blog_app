import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By Kou_Ackerman, puclished on 2023</p>
          <Link href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            obcaecati non est perferendis vel exercitationem dicta eveniet
            minima nemo. Debitis ipsa a quas, ipsum odio illo voluptatum maxime
            necessitatibus consectetur!
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
