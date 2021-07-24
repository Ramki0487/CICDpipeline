import CardPicker from './CardPicker';

export default {
  title: 'CardPicker',
  component: CardPicker,
};

export const Primary = (args) => (
  <CardPicker {...args}>
    <div>
      <h5>Bob Ross</h5>
      <span>12345 main street Apt. 05 San Diego, CA 99104</span>
    </div>
  </CardPicker>
);

Primary.args = {
  className: '',
  isSelected: false,
  handleOnSelect: () => {
    window.alert('Card Slected');
  },
};
