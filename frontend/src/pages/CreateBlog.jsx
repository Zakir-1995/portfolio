import { useState, useRef, useMemo } from "react";
import imageToBase64 from "../utils/imageToBase64";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "Start typings...",
    }),
    []
  );


  const handleBlogImage = async (e) => {
    const file = e.target.files;
    const imagePic = await imageToBase64(file[0]);
    setImage(imagePic);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      setLoading(true);
      const res = await fetch(
        `https://portfolio-backend-tgzk.onrender.com/api/blog/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogData: {
              title: inputs.title,
              description: content,
              image: image,
            },
          }),
        }
      );
      setLoading(false);
      const fetchData = await res.json();
      if (fetchData.success) {
        e.target.reset();
        setImage("");
        toast.success(fetchData.message);
        navigate(`/blog`);
      }
      if (fetchData.error) {
        toast.error(fetchData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="">
      <div className=" flex flex-col  px-5 justify-center h-fit my-5">
        <h3 className="text-3xl font-medium text-gray-800 py-5 text-center">
          Create Blog
        </h3>
        <form
          className="w-full grid md:grid-cols-2 grid-cols-1 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col gap-5">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="focus:outline-none bg-white rounded-md py-2 px-3  w-full border border-iron focus:border-spicymix text-masala"
              required
            />
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-iron border-dashed rounded-lg cursor-pointer transition-all duration-300 ease-linear   hover:bg-iron/20  "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-masala "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-masala">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-masala ">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={handleBlogImage}
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover rounded-md text-iron flex items-center justify-center"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className=" bg-masala rounded-md py-2 px-3 w-full text-white hover:opacity-90 transition-all duration-150 ease-in-out disabled:opacity-90"
          >
            {loading ? "Loading..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
