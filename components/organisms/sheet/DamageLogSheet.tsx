import {isWeb, ScrollView, Sheet, SizableText, XStack, YStack} from "tamagui";
import React, {useMemo} from "react";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectDamageLogs} from "@/store/slices/boardSlice";
import styleSheet from "@/constants/styleSheet";

export interface DamageLogSheetProps{
  open: boolean,
  setOpen: (open: boolean) => void;
}
export default function DamageLogSheet(props: DamageLogSheetProps) {
  const damageLogs = useAppSelector(selectDamageLogs);

  return (
    <Sheet
      open={props.open}
      modal={true}
      onOpenChange={props.setOpen}
      dismissOnSnapToBottom
      snapPoints={[80, 50, 30]}
      zIndex={100_000}
      animation="medium"
    >
      <Sheet.Overlay
        animation="lazy"   // @ts-ignore
        backgroundColor="$shadow6"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />

      <Sheet.Handle />
      <Sheet.Frame // @ts-ignore
         padding="$4" alignItems="center" gap="$5" // justifyContent="center"
      >
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
      </Sheet.Frame>
    </Sheet>
  )
}