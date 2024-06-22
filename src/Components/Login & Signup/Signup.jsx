import { Link } from "react-router-dom";
import logImg from "../../assets/images/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  console.log(data);
  const name = data.name;
  const email = data.email;
  const password = data.password;
  const onsubmit = (data) => {
    setData(data);
  };

  const { createUser, updateUserprofile } = useContext(AuthContext);
  createUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      updateUserprofile(name)
      .then(()=>{})
      .catch(error => console.log(error))

    })
    .catch((error) => console.log(error));

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={logImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onsubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link className="text-[#eba027]" to={"/login"}>
                    Already registered? Go to log in
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Signup;
