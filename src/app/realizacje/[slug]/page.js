'use client'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Test from "../../../../public/assets/stabilizacja.webp";
import Link from "next/link";
import fetchBlogs from "@/app/helpers/fetch-blogs";

const SinglePost = async (props) => {

    const query = `
    {
        realizacjaCollection(where: {slug: "${props.params.slug}"}) {
          items {
            slug
            title
            description
            thumbnail {
              width
              url
            }
          }
        }
      }
      `

      const blog = await fetchBlogs(query);
      const project = blog.data.realizacjaCollection.items;

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">{project[0].title}</h3>
            </div>
            <div className="w-full max-w-[1200px] px-[15px] flex flex-col items-center gap-10">
                <div className="w-full flex flex-col items-start gap-8 lg:gap-20 bg-glass p-6 lg:p-10 rounded-[10px]">
                    <Image src={project[0].thumbnail.url} width={500} height={500} alt="Zdjęcie wykonania usługi" className="h-[auto] lg:h-[500px] w-[100%] lg:w-[auto] object-cover self-center" />
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[28px] lg:text-[36px] font-semibold">{project[0].title}</h2>
                        <p className="lg:text-[22px]">{project[0].description}</p>
                        <Link href="/realizacje" className="flex items-center justify-center bg-[#f7f7f7] text-[#000022] text-[18px] py-2 px-3 rounded-md font-medium shadow-btn max-w-[150px]">Powrót</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
  }

  export default SinglePost;