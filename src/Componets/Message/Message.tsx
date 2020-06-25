import React from 'react';
import s from './Message.module.css';

function Message() {
    return (
        <div className={s.back}>
            <div className={s.message}>
                <div>
                    <img src="https://avatars.mds.yandex.net/get-pdb/1008348/240268e4-0014-4374-a6bd-e72e45e1aaaf/s1200"
                         alt="avatar"/>
                </div>
                <div className={s.triangle}></div>
                <div className={s.textarea}>
                    <div className={s.name}>Roma</div>
                    <div>How are you?</div>
                    <div className={s.time}>18:04</div>

                </div>
            </div>
        </div>
    )
}


export default Message;