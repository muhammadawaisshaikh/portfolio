import React, { useEffect, useState } from 'react';

export default function About() {

    const [title, setTitle] = useState('title');
    const [typo, setTypo] = useState('typo');
    const [typoBold, setTypoBold] = useState('typoBold');
    const [skillsTypo, setSkillsTypo] = useState('skillsTypo');
    const [sideAvatar, setSideAvatar] = useState('sideAvatar');

    useEffect(() => {
    })

    return (
        <div className='position-relative mb-5'>
            <div className="container">
                <h3 className="bgHead">About</h3>
                <div className="row">
                    <div className="col-md-4">
                        <img src={sideAvatar} alt="img" />
                    </div>
                    <div className="col-md-8">
                        <div className="content">
                            <p className="head">{title}</p>
                            <p>{typo}</p>
                            <p><b>{typoBold}</b></p>
                            <p>{skillsTypo}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}