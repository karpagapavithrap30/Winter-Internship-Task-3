
import { useForm } from "react-hook-form";

function FormComponent() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", {
          required: "Email is required"
        })}
      />

      {errors.email && (
        <p role="alert">{errors.email.message}</p>
      )}

      <button type="submit">Submit</button>

    </form>
  );
}

export default FormComponent;
