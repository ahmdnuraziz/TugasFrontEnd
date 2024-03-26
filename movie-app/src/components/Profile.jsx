const Profile = (props)=>{
    return (
        <div>
            <h2>Nama saya {props.name}</h2>
            <h3>Saya adalah {props.role}</h3>
         </div>
    )
}

export default Profile;