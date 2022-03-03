import React, { useState } from "react";
import Input from "../../components/Input/Input";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Select from "../../components/Select/Select";
import Textarea from "../../components/Textarea/Textarea";
import Label from "../../components/Label/Label";
import WidgetPosts from "../../components/WidgetPosts/WidgetPosts";
import { DEMO_POSTS } from "../../data/posts";

const widgetPostsDemo = DEMO_POSTS.filter((_, i) => i > 2 && i < 7);

const TopicSubmitPost = () => {
  const [domainORtopic, setDomainORtopic] = useState("topics");
  const [bodyORtitle, setBodyORtitle] = useState("titles");
  console.log(bodyORtitle);
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
            className="mt-1 rounded border-slate-300"
            placeholder="give a name to your such as, 'Digital Marketing'"
          />
        </label>

        <label className="block md:col-span-2">
          <Label className="font-bold text-lg">Build Your Query</Label>
          <p className="mt-1 text-sm text-neutral-500 ">let's start by</p>

          <div className="mt-2">
            <input
              type="radio"
              id="topics"
              // value="topics"
              value={domainORtopic}
              checked={domainORtopic == "topics"}
              onClick={() => setDomainORtopic("topics")}
              className="w-3.5 h-3.5"
            />
            <label className="text-sm ml-4 font-normal" htmlFor="topics">
              Adding topics and keywords
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="domians"
              // value="domians"
              value={domainORtopic}
              checked={domainORtopic == "domians"}
              onClick={() => setDomainORtopic("domians")}
              className="w-3.5 h-3.5"
            />
            <label className="text-sm ml-4 font-normal" htmlFor="domians">
              Adding domins as sources
            </label>
          </div>

          <p className="mt-5 text-base text-neutral-500 font-medium">
            Each result must contain at least <b>ONE</b> one of these keywords
          </p>
          <Input
            className="mt-1 rounded border-slate-300"
            placeholder="Enter your main keywords or phrases, e.g Social Media, Big Data..."
          />
        </label>

        <label className="block md:col-span-2 mt-5">
          <Label className="font-bold text-lg">Refine Your Query</Label>
          <br />
          <p className="mt-2 text-base text-neutral-500 font-medium">
            Each result <b>MUST ALSO</b> contain <b>ONE</b> one of these
            keywords
          </p>
          <Input
            className="mt-1 rounded border-slate-300"
            placeholder="Enter keywords or phrases, e.g tips, trends..."
          />
        </label>

        <label className="block md:col-span-2 mt-4">
          <p className="mt-2 text-base text-neutral-500 font-medium">
            Each result must <b>NOT</b> contain any one of these keywords
          </p>
          <Input
            className="mt-1 rounded border-slate-300"
            placeholder="Enter keywords that you think are giving irrelevant, eg. job, course..."
          />
        </label>

        <label className="block md:col-span-2 mt-4">
          <p className="mt-2 text-base text-neutral-500 font-medium">
            <b>EXCLUDE</b> results from these domains
          </p>
          <Input
            className="mt-1 rounded border-slate-300"
            placeholder="Enter domains that you think are giving irrelevant, e.g job, course..."
          />
        </label>

        <label className="block md:col-span-2 mt-4">
          <p className="mt-2 text-base text-neutral-500 font-medium">
            <b>LIMIT</b> results to these domais only
          </p>
          <Input
            className="mt-1 rounded border-slate-300"
            placeholder="Enter domains to see results from only these sites... e.g cnn.com, bbc.com"
          />
        </label>

        <label className="block md:col-span-2 mt-5">
          <Label className="font-bold text-lg">Set Default Filters</Label>
        </label>

        <div className="grid grid-cols-12 md:col-span-2 gap-2">
          <label className="col-span-6 sm:col-span-4 md:col-span-3">
            {/* <Label>Set start date</Label> */}

            <Select className="mt-1 rounded bg-gray-100 border-slate-300">
              <option value="-1">Start Date</option>
              <option value="ha'apai">Start date 1</option>
              <option value="tongatapu">Start date 2</option>
              <option value="vava'u">Start date 3</option>
            </Select>
          </label>

          <label className="col-span-6 sm:col-span-4 md:col-span-3">
            {/* <Label>Set end date</Label> */}

            <Select className="mt-1 rounded bg-gray-100 border-slate-300">
              <option value="-1">End Date</option>
              <option value="ha'apai">End date 1</option>
              <option value="tongatapu">End date 2</option>
              <option value="vava'u">End date 3</option>
            </Select>
          </label>

          <label className="col-span-6 sm:col-span-4 md:col-span-3">
            {/* <Label>Select Language</Label> */}

            <Select className="mt-1 rounded bg-gray-100 border-slate-300">
              <option value="-1">Select language</option>
              <option value="ha'apai">English</option>
              <option value="tongatapu">German</option>
              <option value="vava'u">French</option>
            </Select>
          </label>

          <label className="col-span-6 sm:col-span-4 md:col-span-3">
            {/* <Label>Select Engagement</Label> */}

            <Select className="mt-1 rounded bg-gray-100 border-slate-300">
              <option value="-1">Select engagement</option>
              <option value="ha'apai">Facebook</option>
              <option value="tongatapu">Facebook</option>
              <option value="vava'u">Facebook</option>
            </Select>
          </label>
        </div>

        <label className="block md:col-span-2 mt-5">
          <Label className="font-bold text-lg">Matching Criteria</Label>
          <div className="mt-3">
            <input
              type="radio"
              id="titles"
              value={bodyORtitle}
              checked={bodyORtitle == "titles"}
              onClick={()=> setBodyORtitle("titles")}
              className="w-3.5 h-3.5"
            />
            <label className="text-sm ml-4 font-normal" htmlFor="titles">
              Match query in titles only
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="body"
              value={bodyORtitle}
              checked={bodyORtitle == "body"}
              onClick={()=> setBodyORtitle("body")}
              className="w-3.5 h-3.5"
            />
            <label className="text-sm ml-4 font-normal" htmlFor="body">
              Match query in titles and body content
            </label>
          </div>
        </label>

        <ButtonPrimary className="md:col-span-2" type="submit">
          Save
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
