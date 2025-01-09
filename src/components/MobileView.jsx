import Image from "next/image";
import secondImage from '../../public/assets/website-top-small.jpg'
import mobilestyle from '../components/styles/mobile.module.scss'
import Footer from "./Footer";

const MobileView = ({item}) => {

  return (

    <>
    
    <div id={mobilestyle.secondimage}>
      <Image src={secondImage} alt="b picture" priority={true}/>
    </div>

    <div id={mobilestyle.mainHeadlineContainer}>
            {item.map((myData, id) => (
                <div className={mobilestyle.subHeadlineContainer} key={id}>
                    <div className={mobilestyle.headlines} data-index={id} style={{color: myData.color}}>
                        #{myData.headline}

                        <div className={mobilestyle.description}>{myData.description}</div>
                    </div>
                </div>
            ))}
            
        <Footer />

        </div>

    </>

  )

}

export default MobileView;