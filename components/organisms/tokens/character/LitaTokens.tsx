import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Button, Image, RadiusTokens, View, XStack, YGroup, YStack} from "tamagui";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import {useMemo} from "react";
import {TouchableOpacity} from "react-native";
import styleSheet from "@/constants/styleSheet";
import {tokenImgSources} from "@/constants/imageSource";
import TokenToolTip from "@/components/atom/TokenToolTip";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";

export default function LitaTokens(props: IActionProps) {
  const { player } = props;
  const { character } = player;
  const [region ,guardian, assassin, paladin, lumen] = character.tokens
  const { changeToggle, setTokenToggleAsList } = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);

  const handleToggle = (index: number) => {
    if (character.tokens[index].toggle) {
      changeToggle(index);
      return;
    }
    setTokenToggleAsList({1: index === 1, 2: index === 2, 3: index === 3});
  }

  const handleActiveLumen = () => {
    changeToggle(4);
  }

  const activatedToken = useMemo(() => {
    if (lumen.toggle) {
      return region
    }

    return [guardian, assassin, paladin].find((token)=> token.toggle) ?? region
  }, [region, guardian, assassin, paladin, lumen])

  const lumenTokenStyle = useMemo(() => {
    if (lumen.toggle) {
      return {
        backgroundColor: '#FDD835',
        borderRadius: "$15" as RadiusTokens,
        tintColor: "white",
      }
    }

    if (player.currentHp <= 1000) {
      return {
        backgroundColor: 'grey',
        borderRadius: "$15" as RadiusTokens,
        tintColor: "white",
      }
    }
    else {
      return {
        backgroundColor: 'grey',
        borderRadius: "$15" as RadiusTokens,
        tintColor: "black",
      }
    }

  }, [lumen.toggle, player.currentHp])


  return (
    <XStack gap={5} style={!props.player.isFirst && flipPanel?[styleSheet.flexReverse]:[]}>
      <XStack style={!props.player.isFirst && flipPanel?[styleSheet.flexReverse]:[]}>
        <TouchableOpacity onPress={() => changeToggle(0)} activeOpacity={1}>
          <TokenToggleImg token={ activatedToken } size={116} toggle={region.toggle}/>
        </TouchableOpacity>
        <YGroup>
          <Button height={38} onPress={() => handleToggle(1)}
                  theme={(activatedToken === guardian || lumen.toggle) ? "yellow" : null}>가디언</Button>
          <Button height={38} onPress={() => handleToggle(2)}
                  theme={(activatedToken === assassin || lumen.toggle) ? "yellow" : null}>어쌔신</Button>
          <Button height={38} onPress={() => handleToggle(3)}
                  theme={(activatedToken === paladin || lumen.toggle) ? "yellow" : null}>팔라딘</Button>
        </YGroup>
      </XStack>

      <XStack style={styleSheet.centeredContainer}>
        <TouchableOpacity onPress={handleActiveLumen} disabled={player.currentHp > 1000} activeOpacity={1}>
          <TokenToolTip descriptions={lumen.description}>
            <View position={"relative"}>
              <Image
                source={tokenImgSources[lumen.name]}
                objectFit={"contain"}
                height={80}
                width={80}
                {...lumenTokenStyle}
              />

            </View>
          </TokenToolTip>
        </TouchableOpacity>
      </XStack>
    </XStack>
  )
}