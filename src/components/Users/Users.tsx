import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css'


export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDDWWwFVHucAtaMEp_Ri0JMDtIErCkG3JfA&usqp=CAU',
                followed: false,
                fullName: 'Pavel R!',
                status: 'I`m married',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwIrTRQ1Sh9ZWg4icXNKpXNtTOxIlIq3JDA&usqp=CAU',
                followed: true,
                fullName: 'Alex R!',
                status: 'I bought a new car',
                location: {city: 'NY', country: 'USA'}
            },
            {
                id: 3,
                photoURL: 'https://demotivation.ru/wp-content/uploads/2020/11/0d2a2cda9997b20a749b39595816ad17-carmen-miranda-rock-n-roll.jpg',
                followed: false,
                fullName: 'Darya B!',
                status: 'I like to travel',
                location: {city: 'Maaseik', country: 'Belgium'}
            }
        ])
    }
    return <div>
        {
            props.usersPage.users.map(t => <div key={t.id}>
                <span>
                    <div>
                        <img src={t.photoURL} className={styles.photo}/>
                    </div>
                    <div>
                        {
                            t.followed
                                ?
                                <button onClick={() => {
                                    props.unFollow(t.id)
                                }}>UnFollow</button>
                                :
                                <button onClick={() => {
                                    props.follow(t.id)
                                }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{t.fullName}</div>
                        <div>{t.status}</div>
                    </span>
                    <span>
                        <div>{t.location.country}</div>
                        <div>{t.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
