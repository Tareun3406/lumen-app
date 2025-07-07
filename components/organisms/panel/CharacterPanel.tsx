import {PlayerState} from "@/store/slices/boardSlice";
import {Image, styled, YStack} from "tamagui";
import {TouchableOpacity} from "react-native";
import React from "react";
import {characterImgSources} from "@/constants/imageSource";
import {characterStandingPanelStyle} from "@/constants/mediaQueryStyle";

export interface ICharacterPanelProps {
    player: PlayerState;
    onClick: () => void;
}
export default function CharacterPanel(props: ICharacterPanelProps) {
    const player = props.player;
    const { isFirst } =  player;
    const { character } = player

    const ResponsiveStandingContainer = styled(YStack, characterStandingPanelStyle.standingImageContainer)
    const ResponsiveNameTagContainer = styled(YStack, characterStandingPanelStyle.nameTagImageContainer)

    return (
        <YStack>
            <TouchableOpacity onPress={ props.onClick }>
                <ResponsiveStandingContainer>
                    <Image
                        objectFit={"contain"}
                        width="100%"
                        height="100%"
                        source={
                            isFirst
                                ? characterImgSources[character.name].standingLeft
                                : characterImgSources[character.name].standingRight
                        } />
                </ResponsiveStandingContainer>
                <ResponsiveNameTagContainer>
                    <Image 
                        objectFit={"contain"}
                        width="100%"
                        height="100%"
                        source={
                            isFirst
                                ? characterImgSources[character.name].nameTagLeft
                                : characterImgSources[character.name].nameTagRight
                        }/>
                </ResponsiveNameTagContainer>
            </TouchableOpacity>
        </YStack>
    )
}