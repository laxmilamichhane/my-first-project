import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import styles from './styles';

const App = () => {
  <Layout style={styles.container}>
    <Layout style={styles.layout}>
      <Text>1</Text>
    </Layout>

    <Layout style={styles.layout}>
      <Text>2</Text>
    </Layout>
  </Layout>;
};
export default App;
