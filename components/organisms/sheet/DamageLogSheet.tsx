import { Sheet } from "tamagui";
import React from "react";
import DamageLogPanel from "@/components/organisms/panel/DamageLogPanel";
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
        <DamageLogPanel damageLogs={damageLogs} />
      </Sheet.Frame>
    </Sheet>
  )
}