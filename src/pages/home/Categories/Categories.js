import React from 'react';
import { Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const categoriesList = [
        {
            _id: 1,
            img: "https://img.freepik.com/free-vector/rifle-gun-with-bullets_1308-33310.jpg?w=826&t=st=1678079022~exp=1678079622~hmac=14988c47608adcf621ad90bcddb363131472de039b2301de8221c174b4130f2e",
            name: "Rifle",
            nameForBtn: "rifle"
        },
        {
            _id: 2,
            img: "https://img.freepik.com/free-photo/empty-bullets-gun-table_53876-148180.jpg?w=740&t=st=1678078828~exp=1678079428~hmac=2fcb4ce658db2b6a1cf7785bc9c27714ab83ec7645d830a5e2083f8a38fd04e0",
            name: "Pistol",
            nameForBtn: "pistol"
        },
        {
            _id: 3,
            img: "https://api.army.mil/e2/c/images/2021/03/31/70451d00/original.jpg",
            name: "Sniper",
            nameForBtn: "sniper"
        }
    ]

    return (
        <div>
            <h1 className='text-center pt-5 pb-2'>Choose your category to find your desired Gun!</h1>
            <Row>
                {categoriesList.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                ></CategoryCard>)}
            </Row>
        </div>
    );
};

export default Categories;