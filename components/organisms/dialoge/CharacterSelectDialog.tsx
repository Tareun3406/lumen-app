import styleSheet from "@/constants/styleSheet";
import characters, {Character} from "@/constants/character";
import {TouchableOpacity} from "react-native";
import CharacterSelectImage from "@/components/atom/CharacterSelectImage";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogPortal,
    DialogTitle, ScrollView,
    View,
} from "tamagui";
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
                                backgroundColor="transparent"
                />
                <DialogContent
                    width="90%"//@ts-ignore
                    backgroundColor="$shadow6">
                    <DialogTitle style={{textAlign:"center", color:"white"}}>{props.player.isFirst ? "1P" : "2P"} 캐릭터 선택</DialogTitle>
                    <DialogDescription >
                        <ScrollView     // @ts-ignore
                            maxHeight={250}
                            width="100%"
                            backgroundColor="transparent"
                            padding="$4"
                            borderRadius="$4"
                        >
                            <View style={styleSheet.flexWrap}>
                                {characters.filter(character => (character.name !== "선택없음")).map((character, i) => (
                                    <TouchableOpacity onPress={() => onClickCharacter(character)}>
                                        <CharacterSelectImage character={character} size={126} key={i}/>
                                    </TouchableOpacity>
                                ))}
                            </View>

                        </ScrollView>
                    </DialogDescription>
                </DialogContent>
            </DialogPortal>
        </Dialog>

    )
}