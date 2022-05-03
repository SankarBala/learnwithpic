import React, { useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Category from "./../../../Components/Categories";

const Portfolios = () => {
  useEffect(() => {
    document.title = "Portfolios";
  }, []);

  return (
    <React.Fragment>
      <div className="text-dark text-4xl bg-gray-300 -m-3 mb-2 p-1 pl-4">
        <p>Portfolios</p>
      </div>
      <div className="block md:flex md:justify-content">
        <div className="w-full md:w-8/12 lg:w-9/12  h-full mb-2">
          <div className="p-2">
            <label className="block text-2xl mb-3" htmlFor="title">
              Title
            </label>
            <input
              className="block w-full rounded-sm border border-gray-400 outline-none p-1 mb-4"
              type="text"
              name="title"
              id="title"
            />
            <label className="block text-2xl mb-3" htmlFor="title">
              Description
            </label>
            <CKEditor
              className="h-96"
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
        </div>
        <hr className="border border-gray-400 m-2" />
        <div className="w-full md:w-4/12 lg:w-3/12 h-full mb-2 ">
          <div className="p-2">
            <label className="block text-2xl mb-3" htmlFor="title">
              Featured Image
            </label>
            <div
              className="w-full rounded-sm outline-none p-1 mb-2 h-72 
             bg-white flex justify-center items-center cursor-pointer hover:bg-gray-500"
            >
              <p className="text-2xl text-black imageSelectText">
                Select image
              </p>
            </div>
          </div>

          <div className="p-2">
            <Category />
          </div>

          <div className="p-2">
            <label className="block text-2xl mb-3" htmlFor="title">
              Tags
            </label>
            <div
              className="w-full rounded-sm outline-none p-1 mb-2
              cursor-pointer "
            ></div>

            <div className="h-8 w-full">
              <input
                className="w-9/12 outline-none text-black h-full  px-2 rounded-l-sm"
                type="text"
                size="15"
              />
              <input
                className="w-3/12 text-white bg-green-900 h-full mt-2 px-0  border-2 border-green-900 cursor-pointer rounded-r-sm"
                type="button"
                value="Add"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolios;
