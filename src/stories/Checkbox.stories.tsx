import type { Meta, StoryObj } from '@storybook/react';
import { default as CheckB, TCheckbox } from '../components/ui/checkbox';
import { useArgs } from '@storybook/preview-api';

const meta: Meta = {
  title: 'Example/Checkbox',
  component: CheckB,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      defaultValue: '',
    },
    label: {
      defaultValue: '',
    },
    showHelp: {
      defaultValue: false,
    },
    helpLabel: {
      defaultValue: true,
    },
    disabled: {
      defaultValue: false,
    },
    checked: {
      defaultValue: false,
    },
    ref: {
      table: {
        disable: true,
      }
    },
    onChange: {
      table: {
        disable: true,
      }
    },
    name: {
      table: {
        disable: true,
      }
    },
  },
} satisfies Meta<typeof CheckB>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = (args: TCheckbox) => {
  const [{ checked, showHelp }, updateArgs] = useArgs();

  const handleCheckboxChange = () => {
    updateArgs({ checked: !checked });
  };

  return (
    <CheckB
      {...args}
      checked={checked}
      showHelp={showHelp}
      onChange={handleCheckboxChange}
    />
  );
};
Checkbox.args = {
  state: 'default',
  label: 'Label',
  helpLabel: 'Contextual help message',
  showHelp: true,
  disabled: false,
  checked: false,
};
