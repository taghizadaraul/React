import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Contacts from './Contacts';

function UserCv() {
  return (
    <div className="App">
      <PersonalInfo/>
      <Experience/>
      <Contacts/>
    </div>
  );
}

export default UserCv;
