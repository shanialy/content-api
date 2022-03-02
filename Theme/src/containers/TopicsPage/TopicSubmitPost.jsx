import React from "react";
import Input from "../../components/Input/Input";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Select from "../../components/Select/Select";
import Textarea from "../../components/Textarea/Textarea";
import Label from "../../components/Label/Label";
import WidgetPosts from "../../components/WidgetPosts/WidgetPosts";
import { DEMO_POSTS } from "../../data/posts";

const widgetPostsDemo = DEMO_POSTS.filter((_, i) => i > 2 && i < 7);

const TopicSubmitPost = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-6 rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
      {/* form container */}
      <form
        className="basis-2/3  grid md:grid-cols-2 gap-6"
        action="#"
        method="post"
      >
        <label className="block md:col-span-2">
          <Label className="font-bold text-lg">Topic Name</Label>
          <Input
            type="text"
            className="mt-1 rounded"
            placeholder="give a name to your such as, 'Digital Marketing'"
          />
        </label>

        <label className="block md:col-span-2">
          <Label className="font-bold text-lg">Build Your Query</Label>
          <p className="mt-1 text-sm text-neutral-500 ">let's start by</p>

          <input type="radio" id="topics" className="w-3.5 h-3.5" />
          <label className="text-sm ml-4 font-normal" htmlFor="topics">
            Adding topics and keywords
          </label>
          <br />

          <input type="radio" id="domians" className="w-3.5 h-3.5" />
          <label className="text-sm ml-4 font-normal" htmlFor="domians">
            Adding domins as sources
          </label>
          <br />

          <p className="mt-5 text-base text-neutral-500 font-medium">
            Each result must contain at least <b>ONE</b> one of these keywords
          </p>
          <Input
            className="mt-1 rounded"
            placeholder="Enter your main keywords or phrases, e.g Social Media, Big Data..."
          />
        </label>

        <label className="block md:col-span-2 mt-5">
          <Label className="font-bold text-lg">Refine Your Query</Label><br/>
          <p className="mt-2 text-base text-neutral-500 font-medium">
            Each result <b>MUST ALSO</b> contain <b>ONE</b> one of these keywords
          </p>
          <Input
            className="mt-1 rounded"
            placeholder="Enter keywords or phrases, e.g tips, trends..."
          />
        </label>

        <label className="block md:col-span-2 mt-4">
          <p className="mt-2 text-base text-neutral-500 font-medium">
            Each result must <b>NOT</b> contain any one of these keywords
          </p>
          <Input
            className="mt-1 rounded"
            placeholder="Enter keywords that you think are giving irrelevant, eg. job, course..."
          />
        </label>

        <label className="block md:col-span-2 mt-4">
          <p className="mt-2 text-base text-neutral-500 font-medium">
            <b>EXCLUDE</b> results from these domains
          </p>
          <Input
            className="mt-1 rounded"
            placeholder="Enter domains that you think are giving irrelevant, e.g job, course..."
          />
        </label>

        <label className="block md:col-span-2 mt-4">
          <p className="mt-2 text-base text-neutral-500 font-medium">
            <b>LIMIT</b> results to these domais only
          </p>
          <Input
            className="mt-1 rounded"
            placeholder="Enter domains to see results from only these sites... e.g cnn.com, bbc.com"
          />
        </label>

        <label className="block md:col-span-2 mt-5">
          <Label className="font-bold text-lg">Set Default Filters</Label>
        </label>














        <label className="block">
          <Label>Tags</Label>

          <Input type="text" className="mt-1" />
        </label>

        <div className="block md:col-span-2">
          <Label>Featured Image</Label>

          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-neutral-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="flex flex-col sm:flex-row text-sm text-neutral-6000">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-neutral-500">
                PNG, JPG, GIF up to 2MB
              </p>
            </div>
          </div>
        </div>
        <label className="block md:col-span-2">
          <Label> Post Content</Label>

          <Textarea className="mt-1" rows={16} />
        </label>

        <ButtonPrimary className="md:col-span-2" type="submit">
          Submit post
        </ButtonPrimary>
      </form>

      {/* CONTENT FEED CONTAINER */}
      <div className="basis-1/3	">
        <WidgetPosts posts={widgetPostsDemo} />
      </div>
    </div>
  );
};

export default TopicSubmitPost;
