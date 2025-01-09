import Image from "next/image";
import topImage from '../../public/assets/website-top.jpg'
import desktopstyle from '../components/styles/desktop.module.scss'
import Footer from "./Footer";
import Modal from "./Modal";
import { useState } from "react";
import { gsap } from "gsap";

const DesktopView = ({item}) => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openModal = (e) => {
        setOpen(true)
        setIndex(e.currentTarget.dataset.index);
        
        console.log(e.currentTarget.dataset.index);

        const timer = setTimeout(() => {
            let getElementYPos = document.querySelector("#modal").getBoundingClientRect().top

            gsap.to("#modal", {
                duration:.5,
                top: getElementYPos + 300,
                ease: "elastic.out",
                onComplete: () => {

                    gsap.to("#modal", {
                        duration: .3,
                        rotation: 5,
                        transformOrigin: "center"
                    })
                }
            });
        }, 10)

    };


    
    const closeModal = () => {

        gsap.to("#modal", {
            duration: .3,
            alpha: 0,
            onComplete: () => {
                setOpen(false);
            }
        });
    }
    
    return (

        <>
        <div id={desktopstyle.topimage}>
            <Image src={topImage} alt="a picture" priority={true}/>
        </div>

        <div id={desktopstyle.mainHeadlineContainer}>
            {item.map((myData, id) => (
                <div className={desktopstyle.subHeadlineContainer} key={id}>
                    <div className={desktopstyle.headlines} data-index={id} style={{color: myData.color}}>
                        #{myData.headline}
                        <span id='readMore' data-index={id} onClick={openModal}>++</span>

                        <div className={desktopstyle.description}>{myData.description}</div>
                    </div>
                </div>
            ))}

        <Footer />

        <Modal moreTxt={item[index].more} isOpen={open} onClose={closeModal} />

        </div>


        </>

    )
}

export default DesktopView;