import type { Meta, StoryObj } from '@storybook/react';
import { default as CheckboxG, TCheckboxGroupProps } from '../components/ui/checkbox-group';
import { useArgs } from '@storybook/preview-api';
import { default as Checkb } from '../components/ui/checkbox';
const meta = {
  title: 'Example/Checkbox-group',
  component: CheckboxG,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'string',
      defaultValue: ''
    },
    infoLabel: {
      description: 'string',
      defaultValue: ''
    },
    disabled: {
      description: 'boolean',
      defaultValue: false
    },
    invalid: {
      description: 'boolean',
      defaultValue: false
    },
    required: {
      description: 'boolean',
      defaultValue: false
    },
    errorText: {
      description: 'string',
      defaultValue: ''
    },
    children: {
      description: 'Accepts Checkbox components',
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CheckboxG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxGroup: Story = (args: TCheckboxGroupProps) => {
  const [{ disabled, invalid, errorText }] = useArgs();

  return (
    <CheckboxG
      {...args}
      disabled={disabled}
      invalid={invalid}
      errorText={errorText}
    >
      <Checkb
        name="checbox1"
        helpLabel="Contextual help message"
        showHelp={true}
        label="Label"
        onChange={console.log}
      />
      <Checkb
        name="checbox2"
        helpLabel="Contextual help message"
        label="Label"
        onChange={console.log}
        showHelp={true}
      />

    </CheckboxG>

  );
};

CheckboxGroup.args = {
  label: 'Group title',
  infoLabel: 'Group information text',
  errorText: 'Group error text',
  required: true,
  invalid: true,
  disabled: false,
};
