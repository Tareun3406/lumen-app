import {Character} from "@/constants/character";
import {Image} from "tamagui";
import React from "react";
import {characterImgSources} from "@/constants/imageSource";

export interface CharacterSelectImageProps {
  character: Character;
  size: number;
}
export default function CharacterSelectImage(props: CharacterSelectImageProps) {
  return (
    <>
      <Image
        source={characterImgSources[props.character.name].portrait}
        objectFit={"contain"}
        height={props.size}
        width={props.size}
      />
    </>
  )
}