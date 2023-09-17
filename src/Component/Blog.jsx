function Blog() {
  return (
    <section className="bg-[#F5F3EE] font-Inter text-[#1C4F4A] w-screen min-h-min">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center md:gap-4 py-10">
          <h1 className="text-center text-2xl md:text-5xl font-bold md:pt-10 ">
            CloudWave Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center py-10">
            <div className="bg-[#CCDCF6] w-full h-fit text-center md:text-start md:w-60 md:h-60 rounded-2xl p-8 md:p-4">
              <p>Detect powerful apps for productivity</p>
            </div>
            <div className="bg-[#DFE3DE] w-full h-fit text-center md:text-start md:w-60 md:h-60 rounded-2xl p-8 md:p-4">
              <p>
                The Future of Business: Exploring the Power of SaaS with
                CloudWave
              </p>
            </div>
            <div className="bg-[#DFE3DE] hidden md:block text-center md:text-start w-full h-28 md:w-60 md:h-60 rounded-2xl p-4">
              <p>
                The Art of Streamlining: A Closer Look at CloudWave in Action
              </p>
            </div>
            <div className="bg-[#DFE3DE] hidden md:block text-center md:text-start w-full h-28 md:w-60 md:h-60 rounded-2xl p-4">
              <p>
                Customization and Personalization: The Key Features of CloudWave
              </p>
            </div>
          </div>
          <button className="border-[1px] border-[#FC6719] px-5 py-2 rounded-xl text-[#FC6719]">
            Discover all articles
          </button>
        </div>
      </div>
    </section>
  );
}
export default Blog;
