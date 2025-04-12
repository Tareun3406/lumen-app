import {ScrollView, Sheet, SizableText, XStack, YStack} from "tamagui";
import React, {useMemo} from "react";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectDamageLogs} from "@/store/slices/boardSlice";

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
         <YStack style={{textAlign:"center"}}>
           <SizableText>데미지 로그</SizableText>
           {damageLogs && damageLogs.map((log, index) => {
             const sign = log.type === "DAMAGE" ? "-" : "+";
             return (
               <XStack key={index}>
                 <SizableText style={{textAlign:"right"}} width={"35vw"}>{log.isFirstPlayer && (sign + `${log.payload}(${log.result})`)}</SizableText>
                 <SizableText style={{textAlign:"center"}} width={"30vw"}>{index}</SizableText>
                 <SizableText style={{textAlign:"left"}} width={"35vw"}>{!log.isFirstPlayer && (sign + `${log.payload}(${log.result})`)}</SizableText>
               </XStack>
             )
           }).reverse()}
         </YStack>
       </ScrollView>
      </Sheet.Frame>
    </Sheet>
  )
}