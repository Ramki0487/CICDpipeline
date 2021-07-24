import RadioButton from './RadioButton';

export default {
  title: 'RadioButtonion',
  component: RadioButton,
};

export const Primary = (args) => <RadioButton {...args}></RadioButton>;

Primary.args = {
  className: '',
  callbackOnchange: () => {
    window.alert('Call back on Change Radio Butoon');
  },
  id: '1',
  isSelected: true,
  label: 'Mobile',
  value: 'Mobile',
};
