import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import CustomLoading from "../../Components/CustomLoading";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const { loading, auth, createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  if (loading) {
    return <CustomLoading></CustomLoading>;
  }

  // setPhotoName(data.img[0].name);

  const handleRegisterForm = (data) => {
    // console.log(data);
    const { name, email, password, confirm, status } = data;

    const photo = data.photo[0];

    if (password !== confirm) {
      toast.error("password didn't match!");
      return;
    }

    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const user = {
            name,
            email,
            status,
            userPhoto: data.data.url,
          };
          createUser(email, password)
            .then((result) => {
              fetch("https://assignment12-server-ivory.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                });
              updateProfile(auth.currentUser, {
                displayName: `${name}`,
                photoURL: `${user.userPhoto}`,
              })
                .then(() => {})
                .catch((error) => {
                  toast.error(`${error.message}`);
                });
              Swal.fire({
                icon: "success",
                title: `Hello, ${name}`,
                text: "Registration Successful!",
                showConfirmButton: true,
                timer: 1500,
              });
              navigate("/");
            })

            .catch((error) => {
              toast.error(`${error.message}`);
            });
        }
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const newUser = {
          name: displayName,
          email: email,
          status: "buyer",
          userPhoto: photoURL,
        };
        fetch("https://assignment12-server-ivory.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        toast.success("Registration with Google Completed Successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="mt-8 w-5/6 mx-auto max-w-md p-8 space-y-3   bg-slate-800   text-gray-200">
      <h1 className="text-2xl font-bold text-center">Sign up</h1>
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Username</label>
          <input
            type="text"
            {...register("name", {
              required: "user name is Required",
            })}
            placeholder="Username"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "email is Required",
            })}
            placeholder="Email"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">Password</label>
          <input
            type={`${show ? "text" : "password"}`}
            {...register("password", {
              required: "password is Required",
            })}
            placeholder="Password"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />

          <span
            className="absolute right-4 top-1/2"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <FiEye className="faFac2" />
            ) : (
              <FiEyeOff className="faFac1" />
            )}
          </span>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">Confirm Password</label>
          <input
            type={`${show2 ? "text" : "password"}`}
            {...register("confirm", {
              required: "confirm password is Required",
            })}
            placeholder="confirm password"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          <span
            className="absolute right-4 top-1/2"
            onClick={() => {
              setShow2(!show2);
            }}
          >
            {show2 ? (
              <FiEye className="faFac2" />
            ) : (
              <FiEyeOff className="faFac1" />
            )}
          </span>
          {errors.confirm && (
            <p className="text-red-500">{errors.confirm.message}</p>
          )}
        </div>
        <div className="form-control space-y-1 w-full">
          <label className="block text-sm  text-gray-400">
            Upload your photo
          </label>
          <input
            type="file"
            {...register("photo", {
              required: "Photo is Required",
            })}
            accept="image/*"
            className="input input-bordered w-full rounded-none   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.photo && (
            <p className="text-red-500">{errors.photo.message}</p>
          )}
        </div>
        <div>
          <fieldset>
            <legend>Account Type</legend>
            <div className="divider my-1"></div>
            <p>
              <label for="buyer">
                <input
                  type="radio"
                  defaultChecked
                  id="buyer"
                  {...register("status", {
                    required: "userType is Required",
                  })}
                  value="buyer"
                />
                <span className="ml-3">Buyer</span>
              </label>
            </p>
            <p className="mt-3">
              <label for="seller">
                <input
                  type="radio"
                  id="seller"
                  {...register("status", {
                    required: "userType is Required",
                  })}
                  value="seller"
                />
                <span className="ml-3">Seller</span>
              </label>
            </p>
          </fieldset>
        </div>
        <button className="block w-full font-semibold p-3 text-center  text-slate-200   bg-blue-500">
          Sign up
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
        <p className="px-3 text-sm   text-gray-400">
          Signup with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
      </div>
      <div className="flex justify-between space-x-10">
        <h2
          onClick={handleGoogleSignIn}
          className="bg-red-500 text-2xl w-full  flex justify-center py-2 cursor-pointer"
        >
          <FaGoogle />
        </h2>
      </div>
      <p className="text-xs text-center sm:px-6   text-gray-400">
        Already have an account?
        <Link to="/login" className="ml-2 underline   text-yellow-400">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Registration;
