import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import "../src/App.css"

function GroupExample(props) {
  return (
    <div className='p-5 container'>
    
<br/>
    <CardGroup>
      <Card style={{border:"3px solid black",borderRadius:"20px"}}>
        <Card.Img style={{borderRadius:"20px"}} height='500vh'  variant="top" src={props.img1} />
        <Card.Body>
          <Card.Title>{props.Title1}</Card.Title>
          <Card.Text>
            {props.Text}
          </Card.Text>

          <Button variant="dark">Read More</Button>&nbsp;
          <Button href='https://rzp.io/l/9JheGY021' variant="danger"><a style={{textDecoration:"none",color:"white"}} href='payment'>Donate</a></Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Card style={{border:"3px solid black",borderRadius:"20px"}}>
        <Card.Img style={{borderRadius:"20px"}} variant="top" height='500vh' src={props.img2} />
        <Card.Body>
          <Card.Title>{props.Title2}</Card.Title>
          <Card.Text>
          </Card.Text>

          <Button variant="dark">Read More</Button>&nbsp;
          <Button href='https://rzp.io/l/9JheGY021' variant="danger">Donate</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Card style={{border:"3px solid black",borderRadius:"20px"}}>
        <Card.Img style={{borderRadius:"20px"}} height='500vh' variant="top" src={props.img3} />
        <Card.Body>
          <Card.Title>{props.Title3}</Card.Title>
          <Card.Text>
          </Card.Text>

          <Button variant="dark">Read More</Button>&nbsp;
          <Button href='https://rzp.io/l/9JheGY021' variant="danger">Donate</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
     
    </CardGroup>
    </div>
  );
}

export default GroupExample;