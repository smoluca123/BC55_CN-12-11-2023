//JSX => Javscript XML
/**
 *
 * *Cho phép viết html bên trong javscript
 */

function Profile() {
  return (
    <>
      <h1
        className="title"
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        Name : John
      </h1>
      <h1>Email : John@smoteam.com</h1>
    </>
  );
}

export default Profile;
