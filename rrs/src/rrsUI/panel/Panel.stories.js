import Panel from '@RRS-UI/panel/Panel';

export default {
  title: 'Panel',
  component: Panel,
};

export const Primary = () => {
  return (
    <Panel>
      <Panel.Head>
        <h4>VIP FAMILY</h4>
      </Panel.Head>
      <Panel.Body>
        <p>VIP Family Member </p>
      </Panel.Body>
    </Panel>
  );
};

Primary.args = {};
