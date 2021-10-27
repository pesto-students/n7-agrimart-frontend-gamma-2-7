const FilterItem = ({img,filterTitle})=> {
    return (
        <div className="col allign-middle">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="main-content">
              <img className="img-fluid" src={img} alt="category icon" />
              <div className="title">{filterTitle}</div>
            </div>
          </li>
        </div>
    )
  }

export default FilterItem;