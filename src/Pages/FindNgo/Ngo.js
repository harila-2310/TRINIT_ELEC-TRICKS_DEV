import React from 'react'
import TextExample from './Ngocards'
import GroupExample from '../../card'
import ColorSchemesExample from '../../components/bar/bar'
import BasicButtonExample from '../Filter'
import CustomMenu from '../Filter'
import NavScrollExample from '../slider'
import Slider from '../slider'
import VerifiedIcon from '@mui/icons-material/Verified';
import CollapsibleExample from '../../components/bar/bar2'

export default function Ngo() {
  return (
    <>
    <CollapsibleExample/>
    &nbsp;&nbsp;&nbsp;<NavScrollExample/>
  <div style={{display:"flex"}} className="p-4">

<BasicButtonExample
 title="State" 
 ph='Search state'
 value="Tamil nadu"
 /> 
&nbsp;&nbsp;&nbsp;

<BasicButtonExample 
 title="City" 
 ph='Search city'

 value="salem" value2="Coimbatore"
 /> 
&nbsp;&nbsp;&nbsp;

<BasicButtonExample  
 title="Rating"
  ph='Search Rating'
  value="1" value2="2&above"
  /> &nbsp;&nbsp;&nbsp;


<BasicButtonExample 
 title="Works done" 
 ph='Search by works'
 value="10" value2="More than 10"
 /> 

  </div>
  <TextExample name="Harila" location="Salem" description="Good" img={VerifiedIcon} />

  <TextExample name="Gaurav" location="Coimbatore" description="Good" img={VerifiedIcon} />


  <TextExample name="Harish" location="Thirunelveni" description="Good" img={VerifiedIcon} />

  <TextExample name="Dinesh" location="Trichy" description="Good" img={VerifiedIcon} />

  <TextExample name="Ajay" location="Coimbatore" description="Good" img={VerifiedIcon} />

  <TextExample name="vijay" location="Madurai" description="Good" img={VerifiedIcon} />
      x 
    </>
  )
}
