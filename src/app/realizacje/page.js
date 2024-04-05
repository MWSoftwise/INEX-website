'use client'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import PostCardBig from "../components/PostCardBig";

const url =`${process.env.BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`

export default async function Projects() {

    const res = await fetch(url)
    const data = await res.json()

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Sprawdź nasze realizacje</h3>
            </div>
            <div className="max-w-[1200px] px-[15px] flex flex-col items-center gap-10">
                <PostCardBig />
                <div className="w-full flex flex-wrap items-center justify-between gap-10">
                    {
                        data.items.map((item, index) => (
                            <PostCard key={index} title={item.fields.title} desc={item.fields.description}  />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
  }
