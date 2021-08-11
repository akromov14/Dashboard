import { SRLWrapper } from "simple-react-lightbox";
import './Album.css'
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

function MyComponent() {
  return (
    <SRLWrapper>
        
        <img src="https://pm1.narvii.com/7621/06526b02ddf79e71f09e1459db7e68aec949c520r1-766-992v2_hq.jpg" alt="" className="rasm"/>
        <img src="https://im0-tub-ru.yandex.net/i?id=ba9f9814fb273b6d8c19ccf48e07df03-l&ref=rim&n=13&w=1080&h=608" alt="" className="rasm"/>
        <img src="https://i.pinimg.com/originals/f4/de/c1/f4dec1fd0ffabf555599fdc37a6e99ad.jpg" alt="" className="rasm" />
        <img src="https://static.zerochan.net/Uzumaki.Naruto.full.1969084.jpg" alt="" className="rasm"/>
 
    </SRLWrapper>
  );
}

export default MyComponent;