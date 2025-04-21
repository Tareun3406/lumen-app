import styleSheet from "@/constants/styleSheet";
import characters, {Character} from "@/constants/character";
import {TouchableOpacity} from "react-native";
import CharacterSelectImage from "@/components/atom/CharacterSelectImage";
import {Button, Dialog, DialogContent, DialogPortal, XStack, YStack} from "tamagui";
import {PlayerState, setCharacterToFirst, setCharacterToSecond} from "@/store/slices/boardSlice";
import React from "react";
import {useAppDispatch} from "@/hooks/storeHooks";

export interface characterSelectDialogProps {
    player: PlayerState,
    open: boolean,
    close: () => void,
}

export default function CharacterSelectDialog(props: characterSelectDialogProps) {

    const dispatch = useAppDispatch();

    const onClickCharacter = (character: Character) => {
        if (props.player.isFirst) {
            dispatch(setCharacterToFirst(character));
            props.close();
            return;
        }
        dispatch(setCharacterToSecond(character));
        props.close();
    };

    return (
        <Dialog modal open={props.open} >
            <DialogPortal>
                <Dialog.Overlay key="overlay" // @ts-ignore
                                backgroundColor="$shadow6"
                                animation="slow"
                                enterStyle={{ opacity: 0 }}
                                exitStyle={{ opacity: 0 }}
                />
                <DialogContent style={styleSheet.flexWrap}>
                    {characters.filter(character => (character.name !== "선택없음")).map((character, i) => (
                        <TouchableOpacity onPress={() => onClickCharacter(character)}>
                            <CharacterSelectImage character={character} size={126} key={i}/>
                        </TouchableOpacity>
                    ))}
                </DialogContent>
            </DialogPortal>
        </Dialog>

    )
}