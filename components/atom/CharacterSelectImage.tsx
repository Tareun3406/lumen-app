import {Character} from "@/constants/character";
import {Image} from "tamagui";
import React from "react";

export interface CharacterSelectImageProps {
  character: Character;
  size: number;
}
export default function CharacterSelectImage(props: CharacterSelectImageProps) {
  return (
    <>
      <Image
        source={props.character.selectImg}
        objectFit={"contain"}
        height={props.size}
        width={props.size}
      />
    </>
  )
}