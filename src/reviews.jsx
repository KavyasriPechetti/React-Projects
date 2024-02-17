import React from "react";

function Review() {
    const [arr,setArr]=React.useState([
        {
            image:"https://qph.cf2.quoracdn.net/main-qimg-4e368fe8f393f263b02c02d8933fa45e-lq",
            name:"Kavya",
            job:"Web developer",
            desc:"The training program is particularly good and valuable for us as we must keep ourselves updated about newer technologies in the field. It strengthened my technical skills and proved to be a great learning experience, especially trainer interaction with students about technology help students sharpen their logical and scripting skills."
        },
        {
            image:"https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/1787281-medium190.jpg",
            name:"Praveen Gubbala",
            job:"Full stack web developer",
            desc:"Edupoly's training center exceeded my expectations. The instructors were knowledgeable, the curriculum was well-structured, and the hands-on projects provided valuable practical experience. I highly recommend it for anyone looking to master Java Full Stack development."
        },
        {
            image:"https://pbs.twimg.com/profile_images/1518694875058741250/1eXQmCc6_400x400.jpg",
            name:"Drithiman Saikia",
            job:"Java Full stack developer",
            desc:"One of the best institute to learn web technologies like Reactjs,Angular js.Training was excellent and very helpful for freshers and experienced as well. Praveen sir teaching skills are excellent every topic with detailed information and lot of assignments provided, you will get lot of confidence after the completion of course."
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaLblBaeT9qTNYeka8P5mWolcG2srI2HT_g&usqp=CAU",
            name:"Devulapally Sindhu",
            job:"MEAN stack developer",
            desc:"I am having a great time learning with Edupoly where we have professional training with Experienced mentors and we have day to day basis curriculum to complete our tasks on time in a pleasant Environment. Mentors are very supportive they  helped me to enhance my coding Knowledge and it is a best platform where i got  confidence and grip to do programming on my own."
        }
    ])
    return (
                <div>
                {
                    arr.map((a,index) => {
                        return (
                            <div>
                            <img src={a.image}/>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Review;