import {Character} from "@/constants/character";
import {Image} from "tamagui";
import React from "react";

export interface CharacterSelectImageProps {
  character: Character;
}
export default function CharacterSelectImage(props: CharacterSelectImageProps) {
  return (
    <>
      <Image
        source={props.character.portrait}
        objectFit={"contain"}
        height={126}
        width={126}
      />
    </>
  )
}