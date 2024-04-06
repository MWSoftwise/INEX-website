'use client';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import fetchBlogs from "../helpers/fetch-blogs";

const query = `{
    realizacjaCollection{
      items{
        slug
        title
        description
        thumbnail{
          url
        }
      }
    }
  }
`


const Projects = async () => {

    const blogs = await fetchBlogs(query);
    const projects = blogs.data.realizacjaCollection.items;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
          <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Sprawdź nasze realizacje</h3>
      </div>
      <div className="max-w-[1200px] px-[15px] flex flex-col items-center gap-10">

          <div className="w-full flex flex-wrap items-center justify-between gap-10 px-[15px]">

              {projects.map((project, index) => (
                  <PostCard index={index} key={project.slug} title={project.title} desc={project.description} photoLink={project.thumbnail.url} articleLink={project.slug} />
              ))}
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects