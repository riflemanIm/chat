import React, { Component } from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import { getCookie } from '../../utils/cookies';
import { AUTH_STATUS_UNKOWN, AUTH_STATUS_SUCCESS, AUTH_STATUS_FAILED } from '../../config';

import * as callActions from '../../redux/actions/call';
import * as webSocketActions from '../../redux/actions/websocket';
import * as userActions from '../../redux/actions/user';
import * as chatUsersActions from '../../redux/actions/chatUsers';
import * as chatMessagesActions from '../../redux/actions/chatMessages';
import * as mediaActions from '../../redux/actions/media';
import * as appActions from '../../redux/actions/app';
import * as chatRoomsActions from '../../redux/actions/chatRooms';

import VideoConference from '../../components/Call/VideoConference';
import LoginForm from '../../containers/Login';

import Loader from '../../components/Loader/index.tsx';

import { getLocaleName } from '../../utils/lang';

const params = qs.parse(window.location.search.substring(1));

@connect(
    (state) => state,
    (dispatch) => ({
        setLocale: () => dispatch(appActions.setLang()),
        checkCallStatus: () => dispatch(callActions.checkCallStatus()),
        refreshVideoUrl: (data) => dispatch(callActions.refreshVideoUrl(data)),
        setConferenceId: (data) => dispatch(callActions.setConferenceId(data)),
        setConferenceToken: (data) => dispatch(callActions.setConferenceToken(data)),
        connectToWebSocket: (data) => dispatch(webSocketActions.connectToWebSocket(data)),
        checkAuth: () => dispatch(userActions.checkAuth()),
        fetchUserData: () => dispatch(userActions.fetchUserData()),
        fetchChatUsers: () => dispatch(chatUsersActions.fetchChatUsers()),
        fetchChatMessages: () => dispatch(chatMessagesActions.fetchChatMessages()),
        setFileDropzoneActive: () => dispatch(mediaActions.setFileDropzoneActive()),
        unsetFileDropzoneActive: () => dispatch(mediaActions.unsetFileDropzoneActive()),
        fetchChatRooms: () => dispatch(chatRoomsActions.fetchChatRooms()),
    }),
)
class MessengerContainer extends Component {
    componentDidMount() {
        const {
            setLocale,
            checkAuth,
            fetchUserData,
            refreshVideoUrl,
            checkCallStatus,
            fetchChatRooms,
            app: { locale },
            user: { user, authStatus, userType },
            call: { url, conferenceStatus },
            chatRooms
        } = this.props;

        if (!locale) {
            setLocale();
        }

        // checkCallStatus();
        // setInterval(() => {
        //     if (conferenceStatus === 404) return;
        //     checkCallStatus();
        // }, 10000)

        if (!chatRooms.isLoaded) {
            fetchChatRooms();
        }

        if (authStatus === AUTH_STATUS_UNKOWN) {
            return checkAuth();
        }
        if (authStatus === AUTH_STATUS_SUCCESS && user === null) {
            return fetchUserData();
        }
        const conferenceId = getCookie('conference_id');
        const conferenceToken = getCookie('conference_token');
    }

    componentDidUpdate(prevProps) {
        const {
            isDragActive, user, chatUsers,
            setFileDropzoneActive, unsetFileDropzoneActive,
            fetchUserData, connectToWebSocket, fetchChatUsers, fetchChatMessages,
            websocket,
            call: {url, status}, refreshVideoUrl,
            checkCallStatus,
        } = this.props;
        if (!prevProps.isDragActive && isDragActive) {
            setFileDropzoneActive();
        }
        if (prevProps.isDragActive && !this.props.isDragActive) {
            unsetFileDropzoneActive();
        }
        if (user.authStatus === AUTH_STATUS_SUCCESS && user.user === null) {
            fetchUserData();
            connectToWebSocket();
        }
        if (user.authStatus === AUTH_STATUS_SUCCESS && user.user !== null && chatUsers.length === 0) {
            // fetchChatUsers();
            // fetchChatMessages();
        }
        if (url === null && status !== 'stopped') {
            // refreshVideoUrl();
        }

        // checkCallStatus();
        // setInterval(() => {
           // checkCallStatus();
        // }, 20000);
    }

    render() {
        const { app: { status }, user: { authStatus }, call: { conferenceId, conferenceStatus, url }, chatRooms } = this.props;
        if (typeof params.access_token !== 'string') {
            return (
                <LoginForm />
            );
        }

        if (authStatus === AUTH_STATUS_FAILED) {
            return (
                <LoginForm />
            );
        }

        if (conferenceStatus === 404) {
            return (
                <div className="warning error">
                    Конференция не найдена
                </div>
            );
        }

        if (status === 'pending') {
            return (
                <div className="warning">
                    <Loader />
                </div>
            );
        }

        if (status === 'closed') {
            return (
                <div className="warning" dangerouslySetInnerHTML={{ __html: getLocaleName('chatIsNotActivated') }} />
            );
        }

        return (
            <VideoConference {...this.props} url={url} video={typeof conferenceId !== 'undefined' && conferenceStatus === 'active'} />
        );
    }
}
export default MessengerContainer;
