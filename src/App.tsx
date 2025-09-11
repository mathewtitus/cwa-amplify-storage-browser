import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';

import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button, Flex, Heading } from '@aws-amplify/ui-react';
Amplify.configure(config);

import { fetchUserAttributes } from 'aws-amplify/auth';


const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

const userAttributes = await fetchUserAttributes();
console.log(userAttributes);

function App() {
  

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <Flex direction="row" alignItems="center" wrap="nowrap" gap="1rem">
            {/*<Heading level={4}>{``}</Heading>*/}
            <Heading level={4}>{`Hello ${user?.username}`}</Heading>
            {/*<Heading level={4}>{`Hello ${userAttributes.name}`}</Heading>*/}
            <Button onClick={signOut}>Sign out</Button>
          </Flex>
          <StorageBrowser />
        </>
      )}
    </Authenticator>
  );
}

export default App;
