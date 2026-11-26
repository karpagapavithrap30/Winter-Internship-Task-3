
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Step 1: Create Zod Schema
const studentSchema = z.object({

  name: z.string()
    .min(3, "Name must be at least 3 characters"),

  email: z.string()
    .email("Enter a valid email address"),

  age: z.coerce.number()
    .min(1, "Age must be a valid number"),

  password: z.string()
    .min(8, "Password must be at least 8 characters"),

});

// Step 2: Create StudentForm Component
function StudentForm() {

  // Step 3: React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  // Step 4: Submit Function
  const onSubmit = (data) => {
    console.log("Student Details:", data);
    alert("Student Registration Successful!");
  };

  // Step 5: Form UI
  return (
    <div className="form-container">

      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name Field */}
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p className="error">{errors.name?.message}</p>

        {/* Email Field */}
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        <p className="error">{errors.email?.message}</p>

        {/* Age Field */}
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
        />
        <p className="error">{errors.age?.message}</p>

        {/* Password Field */}
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        <p className="error">{errors.password?.message}</p>

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default StudentForm;
