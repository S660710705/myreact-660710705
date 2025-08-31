import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img
        src="https://pbs.twimg.com/media/GxKIVPia4AIpR7W?format=jpg&name=900x900"
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #ad43a2ff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#b35c94ff', margin: '10px 0' }}>
        660710705 ณปภัช นักฟ้อน
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        นักศึกษามหาลัยศิลปากร สาขาเทคโนโลยีสารสนเทศ
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #bd72beff',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#fee2ffff',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;