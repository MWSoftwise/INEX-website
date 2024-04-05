'use client'
import { useEffect } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import PostCardBig from "../components/PostCardBig";

export default function Projects() {

const url = 'https://graphql.contentful.com/content/v1/spaces/462g3ualxm53/explore?access_token';
const TOKEN = 'cQwSYnVSVgPNjSSl1MwCkbDdIzNaSnAzsKD6c81A1Eo'

const query =  `
{
  realizacjaCollection {
    items {
      slug
      title
      description
      thumbnail {
        url
      }
    }
  }
}
`;

  useEffect(() => {

     fetch(url, {
        method: 'POST',
        headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${TOKEN}`
            },
        body: JSON.stringify({
          query,
        }),
      })

      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
          <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Sprawdź nasze realizacje</h3>
      </div>
      <div className="max-w-[1200px] px-[15px] flex flex-col items-center gap-10">
          <PostCardBig />
          <div className="w-full flex flex-wrap items-center justify-between gap-10">

          </div>
      </div>
      <Footer />
    </>
  );
}
