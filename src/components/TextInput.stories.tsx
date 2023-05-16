import { Meta, StoryObj } from "@storybook/react";
import { textInput, TextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";

const { Input, Root, Icon } = textInput;

export default {
  title: "Components/TextInput",
  component: Root,
  tags: ['autodocs'],
  args: {
    children: [
      <Icon>
        <Envelope />
      </Icon>,
      <Input placeholder="milton@gmail.com" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WhithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: (
            <Input placeholder="milton@gmail.com" /> 
        )
    }
};
