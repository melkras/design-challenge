import type { Meta, StoryObj } from '@storybook/react';
import Checkbox, { TCheckbox } from '../components/ui/checkbox';
import { useArgs } from '@storybook/preview-api';

const meta: Meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      description: 'default, hover, active',
      defaultValue: '',
    },
    label: {
      description: 'string',
      defaultValue: '',
    },
    showHelp: {
      description: 'boolean',
      defaultValue: false,
    },
    helpLabel: {
      description: 'string',
      defaultValue: true,
    },
    disabled: {
      description: 'boolean',
      defaultValue: false,
    },
    checked: {
      description: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = (args: TCheckbox) => {
  const [{ checked, showHelp }, updateArgs] = useArgs();

  const handleCheckboxChange = () => {
    updateArgs({ checked: !checked });
  };

  return (
    <Checkbox
      {...args}
      checked={checked}
      showHelp={showHelp}
      onChange={handleCheckboxChange}
    />
  );
};

Primary.args = {
  state: 'default',
  label: 'Label',
  helpLabel: 'Contextual help message',
  showHelp: true,
  disabled: false,
  checked: false,
};
