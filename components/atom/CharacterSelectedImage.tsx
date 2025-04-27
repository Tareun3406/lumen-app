import {Character} from "@/constants/character";
import {Image} from "tamagui";
import React from "react";

export interface CharacterSelectedImageProps {
    character: Character;
    size: number;
}

export default function CharacterSelectedImage(props: CharacterSelectedImageProps) {
    return (
        <Image
            source={props.character.selectedImg}
            objectFit={"contain"}
            height={props.size}
            width={props.size}
        />
    )
}