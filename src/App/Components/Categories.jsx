import React from "react";
import "./Categories.scss";
import axios from "axios";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addCategory: false,
      newCategory: "",
      parentCategory: "",
      categories: [
        {
          id: 1,
          parent_id: null,
          category_name: "safd",
          category_slug: "safd",
          created_at: "2020-10-25 07:55:42",
          updated_at: "2020-10-25 07:55:42",
          children: [
            {
              id: 2,
              parent_id: 1,
              category_name: "etert",
              category_slug: "etert",
              created_at: "2020-10-25 07:56:06",
              updated_at: "2020-10-25 07:56:06",
              children: [
                {
                  id: 3,
                  parent_id: 2,
                  category_name: "asfdsf",
                  category_slug: "asfdsf",
                  created_at: "2020-10-25 07:56:11",
                  updated_at: "2020-10-25 07:56:11",
                  children: [
                    {
                      id: 2,
                      parent_id: 1,
                      category_name: "etert",
                      category_slug: "etert",
                      created_at: "2020-10-25 07:56:06",
                      updated_at: "2020-10-25 07:56:06",
                      children: [
                        {
                          id: 3,
                          parent_id: 2,
                          category_name: "asfdsf",
                          category_slug: "asfdsf",
                          created_at: "2020-10-25 07:56:11",
                          updated_at: "2020-10-25 07:56:11",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 40,
          parent_id: null,
          category_name: "dsfsf",
          category_slug: "dsfsf",
          created_at: "2021-02-18 15:46:44",
          updated_at: "2021-02-18 15:46:44",
          children: [],
        },
        {
          id: 41,
          parent_id: null,
          category_name: "dsfsf",
          category_slug: "dsfsf",
          created_at: "2021-02-18 15:46:44",
          updated_at: "2021-02-18 15:46:44",
          children: [],
        },
        {
          id: 42,
          parent_id: null,
          category_name: "dsfsf",
          category_slug: "dsfsf",
          created_at: "2021-02-18 15:46:44",
          updated_at: "2021-02-18 15:46:44",
          children: [],
        },
        {
          id: 45,
          parent_id: null,
          category_name: "dsfsf",
          category_slug: "dsfsf",
          created_at: "2021-02-18 15:46:44",
          updated_at: "2021-02-18 15:46:44",
          children: [],
        },
        {
          id: 47,
          parent_id: null,
          category_name: "dsfsf",
          category_slug: "dsfsf",
          created_at: "2021-02-18 15:46:44",
          updated_at: "2021-02-18 15:46:44",
          children: [],
        },
      ],
      error: null,
      messege: null,
    };
    this.addCategory = this.addCategory.bind(this);
    this.hideMessege = this.hideMessege.bind(this);
    this.categorySelector = this.categorySelector.bind(this);
    this.parentCategorySelector = this.parentCategorySelector.bind(this);
  }

  categorySelector(value, index, childlabel) {
    return (
      <React.Fragment key={value.id}>
        <li key={value.id}>
          {childlabel}
          <input type="checkbox" id={value.id} value={value.category_name} />
          <label htmlFor={value.id}>{value.category_name}</label>
        </li>

        {value.children[0] == null
          ? ""
          : value.children.map((value, index) => {
              return this.categorySelector(
                value,
                index,
                <span>{childlabel}&nbsp; &nbsp; &nbsp;</span>
              );
            })}
      </React.Fragment>
    );
  }

  parentCategorySelector(value, index, childlabel) {
    return (
      <React.Fragment key={value.id}>
        <option key={value.id} value={value.id}>
          {childlabel} {value.category_name}
        </option>

        {value.children[0] == null
          ? ""
          : value.children.map((value, index) => {
              return this.parentCategorySelector(
                value,
                index,
                childlabel + "--"
              );
            })}
      </React.Fragment>
    );
  }

  async componentDidMount() {
    const { data: categories } = await axios.get(
      "http://localhost:8001/api/category"
    );
    this.setState({ categories });
  }

  async addCategory() {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:8001/api/category/",
      data: {
        category: this.state.newCategory,
        parent: this.state.parentCategory,
      },
    });
    this.setState({
      categories: response.data,
      messege: response.messege,
      error: response.error,
    });
    if (this.state.error == false) {
      this.setState({ newCategory: "" });
    }
    setTimeout(this.hideMessege, 1500);
  }

  hideMessege() {
    this.setState({ messege: null });
  }

  render() {
    return (
      <React.Fragment>
        <div className=" bg-white py-2" draggable="true">
          <div id="categoryContainer" className="collapse show p-2">
            <ul className="category-list">
              {this.state.categories.map((value, index) => {
                return this.categorySelector(value, index, "");
              })}
            </ul>
            <hr className="m-2" />
            {this.state.addCategory ? (
              <div>
                <input
                  type="text"
                  className="w-full mb-2 mt-0 border border-gray-600"
                  value={this.state.newCategory}
                  onChange={(e) => {
                    this.setState({ newCategory: e.target.value });
                  }}
                  required
                />
                <select
                  className="w-full mb-2"
                  onChange={(e) => {
                    this.setState({ parentCategory: e.target.value });
                  }}
                >
                  <option value="">--Parent Category--</option>

                  {this.state.categories.map((value, index) => {
                    return this.parentCategorySelector(value, index, "");
                  })}
                </select>
                {this.state.messege == null ? (
                  <button
                    className="outline-none"
                    onClick={() =>
                      this.setState({
                        addCategory: false,
                        newCategory: "",
                        parentCategory: "",
                      })
                    }
                  >
                    Cancel
                  </button>
                ) : (
                  <button className="btn btn-link text-yellow-500">
                    {this.state.messege}
                  </button>
                )}

                <button
                  className="bg-green-600 float-right text-white px-2
                  rounded"
                  onClick={this.addCategory}
                >
                  Add Category
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn-link">&nbsp;</button>
                <button
                  className="text-green-700 hover:underline my-2 float-right"
                  onClick={() => this.setState({ addCategory: true })}
                >
                  Add Category
                </button>
              </div>
            )}
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default Category;
