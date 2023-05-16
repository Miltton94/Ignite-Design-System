import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
        return (
            <div className="flex items-center gap-2">
                {Story()}
                <Text size="sm">Lembrar de mim por 30 dias</Text>
            </div>
        )
    }
  ]
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {};
