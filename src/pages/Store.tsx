import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'
import { Row,Col } from 'react-bootstrap'
function Store() {
  return (
    <div>
      <h1>store</h1>
      <Row md={2} sm={1} lg={3} className='g-3'>
        {
          storeItems.map((item)=>(
            <Col key={item.id}>
              <StoreItem {...item}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Store