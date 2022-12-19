import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import CustomLoading from "../../Components/CustomLoading";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { user, loading } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [subCategoryList, setSubCategoryList] = useState([]);
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key2;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = `https://assignment12-server-ivory.vercel.app/singleCategory?category=${category}`;

  useEffect(() => {
    if (loading) {
      <CustomLoading></CustomLoading>;
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setSubCategoryList(data.categoryList);
        });
    }
  }, [url, loading]);

  const handleAddProduct = (data) => {
    const {
      category_name,
      sub_category,
      title,
      location,
      resale_price,
      original_price,
      used_duration,
    } = data;

    const photo = data.image_url[0];

    const date = new Date();
    const newProduct = {
      category_name,
      sub_category,
      rating: "4.1",
      title,
      isVerified: false,
      location,
      resale_price,
      original_price,
      seller: user?.displayName,
      used_duration,
      posted_time: date.toDateString(),
      image_url: photo,
    };
    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          newProduct.image_url = data.data.url;
          fetch("https://assignment12-server-ivory.vercel.app/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Product Added Successfully!");
              navigate("/dashboard/myProducts");
            })

            .catch((error) => {
              toast.error(`${error.message}`);
            });
        }
      });
  };

  return (
    <div className="mt-5 w-5/6  p-8 space-y-3   bg-slate-700   text-gray-200">
      <h1 className="text-2xl font-bold text-center">Add The Product</h1>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Select the category</label>
          <select
            {...register("category_name", {
              required: "Select a category",
            })}
            onChange={function (e) {
              setCategory(e.target.value);
            }}
            className="select w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400 rounded-none"
          >
            {" "}
            <option disabled selected>
              Select Category
            </option>
            <option value="Cardio Exercise">Cardio Exercise</option>
            <option value="Chest and Arms">Chest and Arms</option>
            <option value="Free Weights">Free Weights</option>
            <option value="Let Exercise">Leg Exercise</option>
            <option value="Shoulder Training">Shoulder Training</option>
            <option value="Back Training">Back Training</option>
          </select>
          {errors.category_name && (
            <p className="text-red-500">{errors.category_name.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">
            Select the sub-category
          </label>
          <select
            {...register("sub_category", {
              required: "Select a sub-category",
            })}
            className="select w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400 rounded-none"
          >
            <option disabled selected>
              Select Sub-Category
            </option>
            {subCategoryList.map((subCategory, i) => (
              <option key={i} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
          {errors.sub_category && (
            <p className="text-red-500">{errors.sub_category.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Product Title</label>
          <input
            type="text"
            {...register("title", {
              required: "product title is Required",
            })}
            placeholder="product name"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block   text-gray-400">Seller Name</label>
          <input
            type="text"
            disabled
            value={user?.displayName}
            placeholder="seller name"
            className="w-full px-4 py-3 cursor-not-allowed   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
        </div>

        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">Location</label>
          <input
            type="text"
            {...register("location", {
              required: "location is Required",
            })}
            placeholder="location"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">original_price</label>
          <input
            type="text"
            {...register("original_price", {
              required: "original_price is Required",
            })}
            placeholder="original_price"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.original_price && (
            <p className="text-red-500">{errors.original_price.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">resale_price</label>
          <input
            type="text"
            {...register("resale_price", {
              required: "resale_price is Required",
            })}
            placeholder="resale_price"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.resale_price && (
            <p className="text-red-500">{errors.resale_price.message}</p>
          )}
        </div>

        <div className="space-y-1 text-sm relative">
          <label className="block   text-gray-400">used_duration</label>
          <input
            type="text"
            {...register("used_duration", {
              required: "used_duration is Required",
            })}
            placeholder="used_duration"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.used_duration && (
            <p className="text-red-500">{errors.used_duration.message}</p>
          )}
        </div>

        <div className="form-control space-y-1 w-full">
          <label className="block text-sm  text-gray-400">
            Upload your photo
          </label>
          <input
            type="file"
            {...register("image_url", {
              required: "Photo is Required",
            })}
            accept="image/*"
            className="input input-bordered w-full rounded-none   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.image_url && (
            <p className="text-red-500">{errors.image_url.message}</p>
          )}
        </div>

        <button className="block w-full font-semibold p-3 text-center  text-slate-200   bg-blue-500">
          Add the product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
