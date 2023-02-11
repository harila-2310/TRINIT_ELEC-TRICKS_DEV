import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
import GoogleMeet from '../assets/google-meet.svg'
import MicroSoft from '../assets/microsoft.png'
import Whatsapp from '../assets/whatsapp.png'
import Razorpay from '../assets/razorpay.png'
import Telegram from '../assets/telegram.png'

const cookies = new Cookies();

const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <a href='https:/meet.google.com/' target='__blank'>
                <img src={GoogleMeet} alt="Hospital" width="30" />
                </a>
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <a href='https://teams.microsoft.com/l/team/19%3acL2EYilPJ4Vz8iZPXqF09AJB8_d_iqfRPx-OmeQAgYM1%40thread.tacv2/conversations?groupId=94d760da-58c9-4d2d-a7e2-d96fbac939c9&tenantId=6479f11c-512e-49e2-b6b2-b46c6f500ccb' target='__blank'>
                <img src={MicroSoft} alt="Hospital" width="30" />
                </a>
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <a href='https://t.me/Echo_2003_bot' target='__blank'>
                <img src={Telegram} alt="Hospital" width="30" />
                </a>
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <a href='https://chat.whatsapp.com/JGKXgewVnBe68iCQCDl6Zk' target='__blank'>
                <img src={Whatsapp} alt="Hospital" width="30" />
                </a>
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <a href='https://rzp.io/l/9JheGY021' target='__blank'>
                <img src={Razorpay} alt="Hospital" width="30" />
                </a>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">NGO App </p>
    </div>
)

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
}

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    }

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <SideBar logout={logout} />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
                />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    );
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            <div className="channel-list__container">
              <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing} 
              />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent 
                setIsCreating={setIsCreating} 
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
              />
            </div>
        </>
    )

}

export default ChannelListContainer;
