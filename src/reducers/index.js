import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {inbox} from '../routes/inbox/controllers/services/reducers';
import {sent} from '../routes/sent/controllers/services/reducers';
import {spam} from '../routes/spam/controllers/services/reducers';
import {trash} from '../routes/trash/controllers/services/reducers';
import {unreadMails} from '../controllers/unread-mails/services/reducers';
import {auth} from '../auth/reducers';
import {searchInput} from '../controllers/set-search-input/services/reducers';

export default combineReducers({
    inbox,
    sent,
    spam,
    trash,
    unreadMails,
    searchInput,
    form: formReducer,
    auth
});
