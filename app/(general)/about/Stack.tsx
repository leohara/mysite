import Rating from "./Rating";

import {
  AWS,
  CPlus,
  CSS,
  Cloudinary,
  Django,
  Docker,
  Figma,
  HTML,
  JS,
  Jest,
  Mongo,
  Nextjs,
  Prisma,
  Python,
  Reactjs,
  Restframework,
  TS,
  Tailwind,
  TensorFlow,
  Vercel,
<<<<<<< HEAD
<<<<<<< HEAD
} from "@/app/components/icons";
=======
} from "../../components/icons";
=======
} from "@/app/components/icons";
>>>>>>> 2cdf5c0 (appルートに変更)

import Rating from "./Rating";
>>>>>>> 1f9c790 (importの順番に関するrulesの追加)

export default function Stack() {
  return (
    <>
      <p className="py-[16px] text-[20px] font-semibold ">Stack</p>
      <div className="grid grid-cols-3 flex-col gap-[2px] md:grid-cols-5">
        <Rating rating={5} name={"HTML"}>
          <HTML />
        </Rating>
        <Rating rating={5} name={"CSS"}>
          <CSS />
        </Rating>
        <Rating rating={4} name={"JavaScript"}>
          <JS />
        </Rating>
        <Rating rating={4} name={"TypeScript"}>
          <TS />
        </Rating>
        <Rating rating={4} name={"React"}>
          <Reactjs />
        </Rating>
        <Rating rating={4} name={"Next.js"}>
          <Nextjs />
        </Rating>
        <Rating rating={4} name={"Prisma"}>
          <Prisma />
        </Rating>
        <Rating rating={1} name={"Jest"}>
          <Jest />
        </Rating>
        <Rating rating={4} name={"tailwind"}>
          <Tailwind />
        </Rating>
        <Rating rating={2} name={"Figma"}>
          <Figma />
        </Rating>
        <Rating rating={4} name={"Django"}>
          <Django />
        </Rating>
        <Rating rating={4} name={"DRF"}>
          <Restframework />
        </Rating>
        <Rating rating={3} name={"Cloudinary"}>
          <Cloudinary />
        </Rating>
        <Rating rating={2} name={"MongoDB"}>
          <Mongo />
        </Rating>
        <Rating rating={5} name={"Python"}>
          <Python />
        </Rating>
        <Rating rating={3} name={"TensorFlow"}>
          <TensorFlow />
        </Rating>
        <Rating rating={3} name={"C++"}>
          <CPlus />
        </Rating>
        <Rating rating={2} name={"AWS"}>
          <AWS />
        </Rating>
        <Rating rating={4} name={"Vercel"}>
          <Vercel />
        </Rating>
        <Rating rating={3} name={"Docker"}>
          <Docker />
        </Rating>
      </div>
    </>
  );
}
