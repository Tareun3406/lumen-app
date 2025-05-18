import {Character} from "@/constants/character";
import {Image} from "tamagui";
import React from "react";
import {characterSources} from "@/constants/imageSource";

export interface CharacterSelectImageProps {
  character: Character;
  size: number;
}
export default function CharacterSelectImage(props: CharacterSelectImageProps) {
  return (
    <>
      <Image
        source={characterSources[props.character.name].portrait.localSource}
        objectFit={"contain"}
        height={props.size}
        width={props.size}
      />
    </>
  )
}