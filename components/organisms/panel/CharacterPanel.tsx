import {PlayerState} from "@/store/slices/boardSlice";
import {Image, YStack, ZStack} from "tamagui";
import {TouchableOpacity} from "react-native";
import CharacterSelectedImage from "@/components/atom/CharacterSelectedImage";
import React from "react";

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
            <ZStack height={60} width={256}>
                <Image objectFit={"contain"} height={60} width={256} source={
                    isFirst
                        ? require("@/assets/images/name/name-place-left.png")
                        : require("@/assets/images/name/name-place-right.png")
                }/>
                <Image objectFit={"contain"} height={30} width={64} source={ character.nameImg } />
            </ZStack>
            <ZStack width={256} height={256}>
                <Image
                    objectFit={"contain"}
                    height={256}
                    width={256}
                    source={
                        isFirst
                            ? require("@/assets/images/selected/character-holder-left.png")
                            : require("@/assets/images/selected/character-holder-right.png")
                    } />
                <TouchableOpacity onPress={ props.onClick }>
                    <CharacterSelectedImage character={player.character} size={256}/>
                </TouchableOpacity>
            </ZStack>
        </YStack>
    )
}