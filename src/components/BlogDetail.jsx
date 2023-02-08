import React from "react";
import User from "./User";

const BlogDetail = () => {
  return (
    <div className="basis-2/3">
      <div>
        <img
          className="w-full h-[300px] object-cover"
          src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <User />
      <h1 className="font-bold text-3xl my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo
        accusantium.
      </h1>
      <p className=" text-justify leading-6  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        itaque eveniet a nulla numquam quisquam provident sit beatae labore
        reiciendis molestias, placeat veniam esse pariatur neque non deleniti
        fuga perferendis dolores! Accusamus atque autem numquam earum sapiente,
        vero temporibus facilis eius, pariatur rem at rerum beatae aliquid vel
        alias sint mollitia nesciunt? Ullam atque voluptates placeat quae
        necessitatibus eaque quis consequuntur repellat quod explicabo soluta
        expedita eius et optio, dolore a id nam autem cupiditate excepturi
        blanditiis laboriosam provident consequatur distinctio? Nulla nemo
        commodi nihil soluta reprehenderit deleniti, accusamus quis nostrum qui
        nisi amet debitis libero molestias eius, voluptatibus corporis veritatis
        eum ullam id! Ab, vitae excepturi corrupti deleniti fugiat ut pariatur
        tempora nihil aliquam at enim totam dolore itaque libero architecto
        inventore impedit quos voluptas asperiores. Modi nesciunt aliquid illo
        dolore cumque reiciendis at nobis, vero esse? Laboriosam, nulla.
      </p>
    </div>
  );
};

export default BlogDetail;
