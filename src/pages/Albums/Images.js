import { SRLWrapper } from "simple-react-lightbox";
import './Album.css'

// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

import Image from './Imagess' // This is the NextJS image component that sometime is not recognized

function MyComponent() {
  return (
    <SRLWrapper>
      <a href="http://images6.fanpop.com/image/photos/35200000/Naruto-wallpaper-anime-35264399-3668-2751.jpg">
        <img src="http://images6.fanpop.com/image/photos/35200000/Naruto-wallpaper-anime-35264399-3668-2751.jpg" alt="Umbrella" className="Umbrella Umbrella3"/>
      </a>
      
     
      <a href="/link/for/the/full/width/image/image_three.jpg">
        <Image
          src="/link/for/the/thumbnail/image_three.jpg"
          alt="Picture of the author"
          width={500}
          height={900}
          srl_gallery_image="true"
        />
      </a>

    </SRLWrapper>
  );
}

export default MyComponent;