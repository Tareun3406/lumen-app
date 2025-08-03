import {isWeb, ScrollView, SizableText, XStack, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {IDamageLog} from "@/store/slices/boardSlice";


interface IDamageLogPanelProps {
  damageLogs: IDamageLog[]
}
export default function DamageLogPanel({damageLogs}: IDamageLogPanelProps) {

  return (
    <ScrollView height={"100%"}>
      <YStack style={[{textAlign:"center"}, styleSheet.centeredContainer]}>
        <SizableText>데미지 기록</SizableText>
        {damageLogs && damageLogs.map((log, index) => {
          const sign = log.type === "DAMAGE" ? "-" : "+";
          return (
            <XStack key={index}  // @ts-ignore
                    backgroundColor={index % 2 === 0 ? "$yellow4" : null}>
              <SizableText style={{textAlign:"right"}} width={isWeb ? "35vw" : "35%"} color={log.type === "DAMAGE" ? "red" : "green"}>
                {log.isFirstPlayer && (sign + `${log.payload}(${log.result})`)}
              </SizableText>
              <SizableText style={{textAlign:"center"}} width={isWeb ? "30vw" : "30%"} color={log.type === "DAMAGE" ? "red" : "green"}>
                {index}
              </SizableText>
              <SizableText style={{textAlign:"left"}} width={isWeb ? "35vw" : "35%"} color={log.type === "DAMAGE" ? "red" : "green"}>
                {!log.isFirstPlayer && (sign + `${log.payload}(${log.result})`)}
              </SizableText>
            </XStack>
          )
        }).reverse()}
      </YStack>
    </ScrollView>
  )
}