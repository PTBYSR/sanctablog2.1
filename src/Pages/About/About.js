import React from 'react'
import { 
  AboutSection,
  Text,
} from './About.element'
// import { ReactComponent as SIluminated } from './s-illuminated.png';
import SIluminated from './s-illuminated.png'

function About() {
  return (
    <AboutSection className='flex'> 
    <img src={SIluminated} alt='letter s'/>
    <Text>
      <p className='ff-cabazon '>
      ancta's Manuscripts ipsum, dolor sit amet consectetur adipisicing elit. Maxime at et fugiat voluptates delectus doloremque rerum quae ad laborum blanditiis!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nihil quasi tenetur praesentium ullam rem aspernatur dignissimos natus ad error? Porro officiis, laudantium culpa alias voluptate optio magni similique voluptatum.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi, sunt architecto sit alias, vero eligendi porro deleniti libero cumque esse ratione consequuntur praesentium ullam eaque unde natus corporis, blanditiis explicabo reiciendis quis. Alias placeat dignissimos quod quidem, magni dolorem distinctio asperiores nihil quis libero sint odit suscipit sed deleniti voluptatem quaerat dicta. Commodi officia distinctio quisquam suscipit itaque necessitatibus animi beatae unde cumque provident rerum natus, laboriosam ex est nulla quibusdam cum possimus nemo ipsam praesentium, accusantium quas. Quisquam vero voluptas odio dolores voluptate accusantium sint id officiis quam? Atque earum esse iusto assumenda deleniti nihil sed omnis explicabo!
      </p>
    </Text>
    </AboutSection>
  )
}

export default About