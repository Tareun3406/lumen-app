import {PlayerState} from "@/store/slices/boardSlice";
import {Image, YStack} from "tamagui";
import {TouchableOpacity} from "react-native";
import React from "react";
import {characterImgSources} from "@/constants/imageSource";

export interface ICharacterPanelProps {
    player: PlayerState;
    onClick: () => void;
}
export default function CharacterPanel(props: ICharacterPanelProps) {
    const player = props.player;
    const { isFirst } =  player;
    const { character } = player

    return (
        <YStack>
            <TouchableOpacity onPress={ props.onClick }>
                <Image
                    objectFit={"contain"}
                    height={256}
                    width={256}
                    source={
                        isFirst
                            ? characterImgSources[character.name].standingLeft
                            : characterImgSources[character.name].standingRight
                    } />
                <Image objectFit={"contain"} height={60} width={256} source={
                    isFirst
                        ? characterImgSources[character.name].nameTagLeft
                        : characterImgSources[character.name].nameTagRight
                }/>
            </TouchableOpacity>
        </YStack>
    )
}