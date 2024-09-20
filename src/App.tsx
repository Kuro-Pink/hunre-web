import { UserProfile } from './One/UserProfile';
import { Collections } from './Three/Collections';
import { Joblist } from './Two/Joblist';
import { ReviewForm } from './Four/ReviewForm';
import { UsersList } from './Five/UsersList';
import { WebHunre } from './Hunre/webHunre';
import { HunreLib } from './Hunre/hunreLib';
function App() {
    return (
        <div className="flex w-full items-center justify-center bg-[#E6EFFA]">
            {/* <UserProfile /> */}
            {/* <Joblist /> */}
            {/* <Collections /> */}
            {/* <ReviewForm /> */}
            {/* <UsersList /> */}
            {/* <WebHunre /> */}
            <HunreLib />
        </div>
    );
}

export default App;
