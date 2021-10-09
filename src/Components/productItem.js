import { useHistory } from 'react-router-dom'
const ProductItem = ({ id, img, title, price, venderName, path, venderAddress, venderPhoneNumber }) => {
  const history = useHistory()
  //const router = useRouter()
  return (
    <div className="col">
      <div className="card product-card h-100 shadow-sm">
        <img onClick={() => {
          history.push(`/product/${id}`)
        }} src={img} className="card-img-top mb-2" alt={img} />
        <p className="product-title mb-2">{title}</p>
        <h5 className="product-price mb-2">{` ${price}`}</h5>
        <a href={path} className="vender-link ">{`By: ${venderName} `}</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <p className="vender-address mb-2" aria-current="page" >
          <i className="fas fa-map-marker " />
          <span> {venderAddress} </span></p>
        <a href={`tel:${venderPhoneNumber}`} type="button" className="btn product-outline-btn mb-2"><i className="fa fa-phone fa-rotate-90" />
          {` ${venderPhoneNumber}`}
        </a>
        <button type="button" className="btn product-btn " onClick={() => {
          history.push(`/product/${id}`)
        }}>Contact Supplier</button>
        {/* <button type="button" onClick={()=>router.push(path)} className="btn product-btn ">Contact Supplier</button> */}
      </div>
    </div>
  )
}


export default ProductItem;
