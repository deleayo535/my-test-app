import { useState } from "react";
import { FormInput } from "../../atoms/Input";
import classes from "./Search.module.css";

export const Search = () => {
  const [searchInputs, setSearchInputs] = useState({
    name: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchInputs({
      ...searchInputs,
      [name]: value,
    });
  };

  // const handleSubmit = () => {
  //   //send inputs to subscribe api
  // };

  return (
    <div>
      <div className="mb-8 max-md:ml-4">
        <div className="pb-1 ml-16 mt-4 max-md:ml-4">
          <div className={`${classes.searchTxt}`}>Search</div>
        </div>
        <div className="flex max-md:flex-col max-lg:flex-col max-md:space-x-0 max-md:space-y-4 max-lg:space-x-0 max-lg:space-y-4 space-x-4 justify-center">
          <FormInput
            name="name"
            placeholder="Search Movie"
            onChange={onChange}
            className={`${classes.search}`}
            value={searchInputs.name}
          />
        </div>
      </div>
    </div>
  );
};
