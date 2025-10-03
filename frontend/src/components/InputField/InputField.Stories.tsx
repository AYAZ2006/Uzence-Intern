import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {},
  render: () => <InputField />,
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <InputField />
    </div>
  ),
};
