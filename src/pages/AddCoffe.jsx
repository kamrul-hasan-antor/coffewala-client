import React from "react";

const AddCoffe = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;

    const item = {
      name,
      image,
      price,
      description,
    };
    console.log(item);
    fetch("https://sj-task-server.vercel.app/addItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Coffe Added Successfully");

          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto my-5">
      <div className="row mt-3">
        <form onSubmit={handleAddItem} className="col-md-6 mx-auto border p-3">
          <div className="mb-3">
            <label
              htmlFor="exampleInputFullName"
              className="form-label fw-semibold"
            >
              Coffee Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputFullName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Image Link
            </label>
            <input name="image" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImg" className="form-label fw-semibold">
              Price
            </label>
            <input name="price" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-semibold"
            >
              Description
            </label>
            <textarea name="description" type="text" className="form-control" />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-50 mx-auto d-block"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffe;
