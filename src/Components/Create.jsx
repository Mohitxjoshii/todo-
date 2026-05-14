import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Create = () => {
  const [todos, settodos] = useContext(todocontext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    toast.success("Todo Created");

    reset();
  };

  return (
    <div className=" w-[60%] p-10">
      <h1 className="mb-10 text-7xl font-thin">
        Set <span className="text-red-500">Reminder</span> for <br /> tasks
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title can not be empty" })}
          className="p-4 border-b w-full text-3xl font-thin outline-0"
          type="text"
          placeholder="title"
        />

        <small className="font-thin text-red-400 text-2xl">
          {errors?.title?.message}
        </small>
        <br />
        <br />
        <button className="mt-10 text-3xl px-15 py-4 border-2 rounded-xl cursor-pointer">
          create todo
        </button>
      </form>
    </div>
  );
};

export default Create;
