import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/202844438_4372144286130289_864136507009950365_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mRPI2uOIdZkAX-cHpqN&tn=pAPKX4fpfFrNR502&_nc_ht=scontent-lga3-1.xx&oh=175ac9dc29e77af6810424c1a7014547&oe=615C82F7"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
            </div> 
            <Sidebar />
        </div>
    )
}

export default Settings
