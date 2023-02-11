import Card from 'react-bootstrap/Card';
import VerifiedIcon from '@mui/icons-material/Verified';
import TextRating from '../../components/Rating';
function TextExample(props) {
  return (
  <div className='card-bg' style={{display:"inline-block"}}>

<Card className='p-5 ' style={{ width: '18rem',marginLeft:"5vw"}}>
      <Card.Body >
        <Card.Title>{props.name} &nbsp;<VerifiedIcon color='primary'/></Card.Title>
         <TextRating/><br/>
        <Card.Subtitle className="mb-2 text-muted">{props.location}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Role : NGO</Card.Subtitle>
        <Card.Link href="#">View More</Card.Link>
      </Card.Body>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  
     
    </Card><br/>
  </div>
  );
}

export default TextExample;